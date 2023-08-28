const express = require('express');
const AppController = require('./AppController');
const StudentsController = require('./StudentsController');

const app = express();

// Routes linked to AppController
app.get('/', AppController.getHomepage);

// Routes linked to StudentsController
app.get('/students', StudentsController.getAllStudents);
app.get('/students/:major', StudentsController.getAllStudentsByMajor);

app.listen(1245, () => {
  console.log('Server is running and listening on port 1245');
});

