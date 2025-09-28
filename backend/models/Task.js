const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    project: { type: mongoose.Schema.Types.ObjectId, ref: 'Project', required: true },
    title:   { type: String, required: true },
    status:  { type: String, enum: ['backlog', 'pending', 'in_progress', 'blocked', 'done'], default: 'backlog' },
    dueDate: Date,
    priority: { type: String, enum: ['low', 'medium', 'high'], default: 'medium' },
    estimatedCost: Number,
    weather: String, // todo
    conditions: String,
}, { timestamps: true });

module.exports = mongoose.model('Task', projectSchema);