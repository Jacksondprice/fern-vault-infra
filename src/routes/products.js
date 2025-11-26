const express = require('express');
const db = require('../db');

const router = express.Router();

router.get('/', async (_req, res) => {
  const result = await db.query('SELECT id, name FROM products ORDER BY id LIMIT 100');
  res.json(result.rows);
});

router.post('/', async (req, res) => {
  if (typeof req.body.name !== 'string') return res.status(400).json({ error: 'name is required' });
  const result = await db.query('INSERT INTO products(name) VALUES ($1) RETURNING id, name', [req.body.name]);
  res.status(201).json(result.rows[0]);
});

module.exports = router;
