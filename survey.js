// survey.js
// Alan Dodge, Graeme Nickerson
// September 24, 2019

const readline = require('readline');


let questions = [
  "What's your name? Nicknames are also acceptable :)  ",
  "What's an activity you like doing?  ",
  "What do you listen to while doing that?  ",
  "Which meal is your favourite (eg: dinner, brunch, etc.)  ",
  "What's your favourite thing to eat for that meal?  ",
  "Which sport is your absolute favourite?  ",
  "What is your superpower? In a few words, tell us what you are amazing at!  "
];
let answers = [];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const askQuestions = function(questions, answers) {
  if (questions.length > 0) {
    rl.question(questions[0], (answer) => {
      answers.push(answer);
      askQuestions(questions.slice(1), answers);
    });
  } else {
    console.log(`${answers[0]} loves listening to ${answers[2]} while ${answers[1]}, devouring ${answers[3]}`,
      `for ${answers[4]}, perfers ${answers[5]} over any other sport, and is amazing at ${answers[6]}.`);
    rl.close();
  }
};


askQuestions(questions, answers);
// ask(questions.q1.q);
