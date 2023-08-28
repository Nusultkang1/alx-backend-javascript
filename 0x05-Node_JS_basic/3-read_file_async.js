const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter(line => line.trim() !== '');
      const fields = lines[0].split(',');

      const counts = {};
      const lists = {};

      for (let i = 1; i < lines.length; i++) {
        const values = lines[i].split(',');
        for (let j = 0; j < values.length; j++) {
          if (!counts[fields[j]]) {
            counts[fields[j]] = 0;
            lists[fields[j]] = [];
          }

          if (values[j].trim() !== '') {
            counts[fields[j]]++;
            lists[fields[j]].push(values[j].trim());
          }
        }
      }

      for (const field in counts) {
        console.log(`Number of students in ${field}: ${counts[field]}. List: ${lists[field].join(', ')}`);
      }

      const totalStudents = lines.length - 1;
      console.log(`Number of students: ${totalStudents}`);

      resolve();
    });
  });
}

// Call the function with the path to the database file
countStudents('database.csv')
  .catch(error => {
    console.error(error.message);
  });

