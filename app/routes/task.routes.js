module.exports = (app) => {
    const tasks = require('../controllers/task.controller.js');

    // Create a new Note
    app.post('/tasks', tasks.create);

    // Retrieve all Notes
    app.get('/tasks', tasks.findAll);

    // Retrieve a single Note with taskId
    app.get('/tasks/:taskId', tasks.findOne);

    // Update a Note with taskId
    app.put('/tasks/:taskId', tasks.update);

    // Delete a Note with taskId
    app.delete('/tasks/:taskId', tasks.delete);
}
