const express = require('express');

const app = express();

// Define a route for the root path
app.get('/', (req, res) => {
  res.send('Hello Holberton School!\n');
});

// Start the server on port 1245
app.listen(1245, () => {
  console.log('Server is running and listening on port 1245');
});

module.exports = app;

