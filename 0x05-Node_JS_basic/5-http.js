const http = require('http');
const fs = require('fs');
const { countStudents } = require('./3-read_file_async'); // Importing the countStudents function from 3-read_file_async.js

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    // For root path
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!\n');
  } else if (req.url === '/students') {
    // For /students path
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    // Call the countStudents function from 3-read_file_async.js
    countStudents('database.csv')
      .then(() => {
        // Read the content of the 3-read_file_async.js file and send it as response
        fs.readFile('3-read_file_async.js', 'utf8', (err, data) => {
          if (err) {
            res.end('Cannot read the content of 3-read_file_async.js');
          } else {
            res.end(data);
          }
        });
      })
      .catch(error => {
        res.end(error.message);
      });
  } else {
    // For other paths
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not found\n');
  }
});

app.listen(1245, () => {
  console.log('Server is running and listening on port 1245');
});

module.exports = app;

