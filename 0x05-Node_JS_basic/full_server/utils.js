const fs = require('fs').promises;

function readDatabase(filePath) {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await fs.readFile(filePath, 'utf8');
      const lines = data.split('\n').filter(line => line.trim() !== '');
      const fields = lines[0].split(',');

      const studentsPerFields = {};

      for (let i = 0; i < fields.length; i++) {
        studentsPerFields[fields[i]] = [];
      }

      for (let i = 1; i < lines.length; i++) {
        const values = lines[i].split(',');
        for (let j = 0; j < values.length; j++) {
          if (values[j].trim() !== '') {
            studentsPerFields[fields[j]].push(values[j].trim());
          }
        }
      }

      resolve(studentsPerFields);
    } catch (error) {
      reject(error);
    }
  });
}

module.exports = {
  readDatabase
};

