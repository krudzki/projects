const express = require('express');
const router  = express.Router();
const User    = require('../models/user');
const jwt     = require('jsonwebtoken');

// Registration
router.post('/register', async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json({ message: 'User registered successfully', user });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }   
});

// Login
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ error: 'Invalid email or password' });
    const isMatch = await user.comparePassword(password);
    if (!isMatch) return res.status(401).json({ error: 'Invalid email or password' });
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res.json({ message: 'Login successful', token });
});

module.exports = router;