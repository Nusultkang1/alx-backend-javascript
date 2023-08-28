const express = require('express');
const fs = require('fs').promises;
const { countStudents } = require('./3-read_file_async'); // Importing the countStudents function from 3-read_file_async.js

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!\n');
});

app.get('/students', async (req, res) => {
  try {
    // Call the countStudents function from 3-read_file_async.js
    const studentsResult = await countStudents('database.csv');
    
    // Read the content of the 3-read_file_async.js file
    const readFileContent = await fs.readFile('3-read_file_async.js', 'utf8');
    
    // Send the response with the count and file content
    res.send(`This is the list of our students\n\n${studentsResult}\n\nContent of 3-read_file_async.js:\n\n${readFileContent}`);
  } catch (error) {
    res.send(error.message);
  }
});

app.listen(1245, () => {
  console.log('Server is running and listening on port 1245');
});

module.exports = app;

