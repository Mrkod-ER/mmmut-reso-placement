// routes/placement.js

const express = require('express');
const Placement = require('../models/Placements');

const router = express.Router();

// Get placement data by session
router.get('/', async (req, res) => {
    const session = req.query.session;

    if (!session) {
        return res.status(400).json({ message: "Session parameter is required" });
    }

    try {
        const data = await Placement.findOne({ session: session });

        if (!data) {
            return res.status(404).json({ message: "No data found for the given session" });
        }

        const { report, company } = data;
        return res.status(200).json({ report, company });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Server error" });
    }
});

module.exports = router;
