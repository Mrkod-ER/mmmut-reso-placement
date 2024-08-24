// models/Placement.js

const mongoose = require('mongoose');

const placementSchema = new mongoose.Schema({
    session: { type: String, required: true },
    report: { type: Object, required: true },
    company: [{ type: Object, required: true }]
});

module.exports = mongoose.model('Placement', placementSchema);
