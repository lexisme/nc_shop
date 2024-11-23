import express from 'express';
import mysql from 'mysql2/promise';
import cors from 'cors';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Homepage data endpoint
app.get('/api/homepage', async (req, res) => {
  try {
    const dataPath = path.join(__dirname, '..', 'data', 'homepage.json');
    const data = await fs.readFile(dataPath, 'utf8');
    res.json(JSON.parse(data));
  } catch (error) {
    console.error('Error reading homepage data:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

app.post('/api/login', async (req, res) => {
  try {
    const { mobile, password } = req.body;

    if (!mobile || !password) {
      return res.status(400).json({
        success: false,
        message: 'Mobile and password are required'
      });
    }

    const [rows] = await pool.execute(
      'SELECT * FROM member WHERE mobile = ?',
      [mobile]
    );

    if (rows.length === 0) {
      return res.status(401).json({
        success: false,
        message: 'Invalid mobile number or password'
      });
    }

    const user = rows[0];
    const isValidPassword = await bcrypt.compare(password, user.pwd);

    if (!isValidPassword) {
      return res.status(401).json({
        success: false,
        message: 'Invalid mobile number or password'
      });
    }

    res.json({
      success: true,
      message: 'Login successful'
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});