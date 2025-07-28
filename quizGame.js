const questions = [
  {
    category: "Geography",
    question: "What is the capital of Japan?",
    choices: ["Beijing", "Seoul", "Tokyo"],
    answer: "Tokyo"
  },
  {
    category: "Science",
    question: "What is the chemical symbol for water?",
    choices: ["O2", "H2O", "CO2"],
    answer: "H2O"
  },
  {
    category: "History",
    question: "Who was the first President of the United States?",
    choices: ["Abraham Lincoln", "George Washington", "Thomas Jefferson"],
    answer: "George Washington"
  },
  {
    category: "Technology",
    question: "Which company developed the iPhone?",
    choices: ["Samsung", "Google", "Apple"],
    answer: "Apple"
  },
  {
    category: "Art",
    question: "Who painted the Mona Lisa?",
    choices: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso"],
    answer: "Leonardo da Vinci"
  }
];
const getRandomQuestion= (array) =>{
let number = Math.floor(Math.random() * array.length)
return array[number]
}
const getRandomComputerChoice = (array) =>{
  let number1 = Math.floor((Math.random() * array.length))
return array[number1];
}
const getResults = (question,computerschoice) =>{
  if (question.answer == computerschoice){
    return "The computer's choice is correct!"
    
  }
  else {
    return `The computer's choice is wrong. The correct answer is: ${question.answer}`
  }
}
