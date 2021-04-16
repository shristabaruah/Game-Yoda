var questions = [
  {
    question: "Is Yoda a fictional character?",
    options: ["Yes", "No"],
    ans: 0,
  },
  {
    question:
      "What color is Yoda?",
    options: ["Blue", "Green", "Yellow"],
    ans: 1,
  },
  {
    question: "Yoda, a Jedi Master, trains _______________.",
    options: ["Luke Skywalker", "Darth Maul"],
    ans: 0,
  },
  {
    question: "At what age does Yoda die?",
    options: ["900 years", "500 years", "678 years", "99 years"],
    ans: 0,
  },
  {
    question: "In which 'Star Wars' movie did Yoda make his last chronological appearance ?",
    options: ["Revenge on the Sith", "The Empire Strikes Back", "Return of the Jedi"],
    ans: 2,
  },
  {
    question: "What does Yoda say fear leads to in 'The Phantom Menace'?",
    options: ["Suffering", "Despair", "Sorrow"],
    ans: 0,
  },
  {
    question: "Who does Yoda escort on the trip to another planet in the animated series 'Star Wars: Clone Wars' ?" ,
    options: ["General Grievous", "Padme"],
    ans: 1,
  },
  {
    question: "What does Yoda say to Anakin when Anakin tells Yoda about his dreams that someone close to him will die?",
    options: ["Train yourself to let go of everything you fear to lose", "Enjoy what you have while you have it", "Never let go" , " Remember who you love"],
    ans: 0,
  },
  {
    question:
      "What knowledge does Yoda leave Luke when he dies?",
    options: ["There is another Skywalker", "You will die soon", "You will live a happy life."],
    ans: 0,
  },
  {
    question:
      "The second 'Star Wars' movie, 'Attack of the Clones', is set __ years after the first 'Star Wars' movie, 'The Phantom Menace'.",
    options: ["Three", "Two", "One", "ten"],
    ans: 3,
  },
];

var scores = {
  Ravi: 7,
  Sachin: 8,
  Nitin: 5,
  Ritesh: 2,
};

var readlineSync = require("readline-sync");
var chalk = require("chalk");
var score = 0;
var flag = false;

function play() {
 var playerName = readlineSync.question(chalk.magentaBright('Enter your name to get started: '))

  var greetMsg = chalk.cyanBright("Hello " + playerName + ", Let's play the quiz.")

  var instructions = "\nYou will get 2 points for every correct answer and 1 point will be deducted for each wrong answer\n\n"

  console.log(greetMsg, instructions);

  console.log(chalk.bgCyan("Press Y to get started"));

  if (readlineSync.keyInYN("Press")) {
    for (var i = 0; i < questions.length; i++) {
      quizQuestion(questions[i]);
    }
  } else {
    console.log("You pressed No. Please refresh the page if you want to play.");
    return;
  }
  if (checkHighScore()) {
    console.log(chalk.bgBlue("You've scored a High Score"));
  }
  console.log("Your Score is " + score + "/20");
  console.log("Thank you for playing!!");
}

function quizQuestion(q) {
  console.log("\n\n" + q.question);
  var a = readlineSync.keyInSelect(q.options, "Choose from ");
  if (a === q.ans) {
    console.log(chalk.greenBright("Your answer is correct"));
    score = score + 2;
  } else {
    console.log(chalk.red.bold("Oops! Thats a wrong answer."));
    console.log(chalk.bgCyan("The correct answer is " + q.options[q.ans]));
    score--;
  }
}

function checkHighScore() {
  for (var item in scores) {
    if (score > scores[item]) {
      return true;
    }
  }
  return false;
}

play();