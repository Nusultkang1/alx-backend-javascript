const express = require('express');
const routes = require('./full_server/routes/index');

const app = express();

// Use the routes defined in full_server/routes/index.js
app.use('/', routes);

app.listen(1245, () => {
  console.log('Server is running and listening on port 1245');
});

