const questions = [
  {
    question:
      "What is the name of a function whose execution can be suspended and resumed at a later point",
    options: [
      { answerOption: "Arrow Function", isCorrect: false },
      { answerOption: "Generator Function", isCorrect: true },
      { answerOption: "Async/Await Function", isCorrect: false },
      { answerOption: "Higher-Order Function", isCorrect: false },
    ],
  },
  {
    question: "Which declaration is function scoped? ",
    options: [
      { answerOption: "let", isCorrect: false },
      { answerOption: "const", isCorrect: false },
      { answerOption: "def", isCorrect: false },
      { answerOption: "var", isCorrect: true },
    ],
  },
  {
    question: "Which choice is not a unary operator ",
    options: [
      { answerOption: "instanceof", isCorrect: true },
      { answerOption: "void", isCorrect: false },
      { answerOption: "typeof", isCorrect: false },
      { answerOption: "delete", isCorrect: false },
    ],
  },
];

export default questions;
