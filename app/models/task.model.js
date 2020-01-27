const mongoose = require('mongoose');

const TaskSchema = mongoose.Schema({
    title: String,
}, {
    timestamps: true
});

module.exports = mongoose.model('Task', TaskSchema);
