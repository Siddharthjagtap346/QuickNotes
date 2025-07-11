const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/User');
const router = express.Router();

const SECRET = 'quicknotes_secret_key'; // 🔐 use env var in production

router.post('/signup', async (req, res) => {
  try {
    const { username, password } = req.body;
    const exists = await User.findOne({ username });
    if (exists) return res.status(400).json({ msg: 'User exists' });

    const user = new User({ username, password });
    await user.save();

    const token = jwt.sign({ id: user._id }, SECRET);
    res.json({ token, user: { id: user._id, username } });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    console.log('Login attempt:', username);

    const user = await User.findOne({ username });
    if (!user) {
      console.log('User not found');
      return res.status(400).json({ msg: 'User not found' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.log('Invalid password');
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user._id }, SECRET);
    res.json({ token, user: { id: user._id, username } });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});


module.exports = router;
