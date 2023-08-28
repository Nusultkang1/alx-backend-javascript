const { readDatabase } = require('./utils');

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const studentsData = await readDatabase('database.csv');
      const fields = Object.keys(studentsData).sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' }));
      
      res.status(200).send(`This is the list of our students\n\n${fields.map(field => {
        const studentsInField = studentsData[field];
        return `Number of students in ${field}: ${studentsInField.length}. List: ${studentsInField.join(', ')}`;
      }).join('\n')}`);
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.query;

    if (!major || (major !== 'CS' && major !== 'SWE')) {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    try {
      const studentsData = await readDatabase('database.csv');
      
      if (!studentsData[major]) {
        res.status(200).send(`No students found for major: ${major}`);
        return;
      }

      res.status(200).send(`List: ${studentsData[major].join(', ')}`);
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }
}

module.exports = StudentsController;

