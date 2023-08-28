const fs = require('fs');

function countStudents(path) {
  try {
    // Read the file synchronously
    const data = fs.readFileSync(path, 'utf8');
    
    // Split the data into lines
    const lines = data.split('\n').filter(line => line.trim() !== '');

    // Extract field names from the first line
    const fields = lines[0].split(',');

    // Initialize an object to store the counts
    const counts = {};

    // Initialize an object to store the lists
    const lists = {};

    // Loop through each line (excluding the header)
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

    // Log the counts and lists
    for (const field in counts) {
      console.log(`Number of students in ${field}: ${counts[field]}. List: ${lists[field].join(', ')}`);
    }

    // Log the total number of students
    const totalStudents = lines.length - 1;
    console.log(`Number of students: ${totalStudents}`);
  } catch (error) {
    console.error('Cannot load the database');
  }
}

// Call the function with the path to the database file
countStudents('database.csv');

