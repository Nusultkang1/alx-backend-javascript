const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("Welcome to Holberton School, what is your name?");
rl.on('line', function(userInput) {
  if (userInput === 'exit') {
    console.log("This important software is now closing");
    rl.close();
  } else {
    console.log("Your name is: " + userInput);
  }
});

