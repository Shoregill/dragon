// const inquirer = require('inquirer')
import Boy from "./classes/boy.js";
import Girl from "./classes/girl.js";
import inquirer from "inquirer";
let myPet;

const start = async () => {
  const { typeOfPet } = await inquirer.prompt({
    type: "list",
    name: "typeOfPet",
    message: "Please choose what type of dragon you would like.",
    choices: [
      {
        key: "a",
        name: "Boy",
        value: "boy",
      },
      {
        key: "b",
        name: "Girl",
        value: "girl",
      },
    ],
  });
  const { petName } = await inquirer.prompt({
    type: "input",
    name: "petName",
    message: "What is your dragon called?",
  });

  if (typeOfPet === "boy") {
    myPet = new Boy(petName);
  } else if (typeOfPet === "girl") {
    myPet = new Girl(petName);
  }
  console.log(`You have a dragon called ${myPet.name}`);
  userChoice();
};

let userChoice = async () => {
  const { choice } = await inquirer.prompt({
  type: "list",
    name: "choice",
      message: "What would you like to do with your dragon?",
        choices: [
          {
            key: "a",
            name: "Play with your dragon",
            value: "play",
          },
          {
            key: "b",
            name: "Feed your dragon",
            value: "feed",
          },
          {
            key: "c",
            name: "Give your dragon gold",
            value: "gold",
          },
          {
            key: "h",
            name: "Steal your dragon's gold",
            value: "steal",
          },
          {
            key: "d",
            name: "View your dragon's stats",
            value: "stats",
          },
          {
            key: "q",
            name: "Quit the game",
            value: "quit",
          },
        ],
  });

// if (choice === "play") await myPet.play()

if (choice === "feed") await myPet.eats();
if (choice === "play") await myPet.play();
if (choice === "stats") await myPet.stats();
if (choice === "gold") await myPet.gold();
if (choice === "steal") await myPet.steal();
if (choice === "quit") {
  const quitChoice = await confirmQuit();
  if (quitChoice) return;
}

myPet.stats();
userChoice();
};

let confirmQuit = async () => {
  const { quitChoice } = await inquirer.prompt({
    type: "list",
    name: "quitChoice",
    message: "Are you sure you want to quit? Your dragon will be lonely!",
    choices: [
      {
        key: "a",
        name: "Yes, I'm quite sure.",
        value: "yes",
      },
      {
        key: "b",
        name: "No, I'll keep playing.",
        value: "no",
      },
      
    ],
  });
  if (quitChoice === "yes") return true;
  else return false;
};

start();
