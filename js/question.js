// function Question(questionText, answers, correctAnswer) {
//     this.questionText = questionText;
//     this.answers = answers;
//     this.correctAnswer = correctAnswer;
// }

// Question.prototype.checkAnswer = function (answer) {
//     return answer === this.correctAnswer;
// }           

let personalityScore = {
    thinker: 0,
    explorer: 0,
    dreamer: 0
};

    function handleAnswer(question, selectedOption) {
        const personalityType = question.answerTypes[selectedOption];
        personalityScore[personalityType]++;
    }

class Question {
    constructor(questionText, answers, answerTypes) {
        this.questionText = questionText;
        this.answers = answers;
        this.answerTypes = answerTypes;
    }
}

let questions = [
    new Question("A mysterious button appears with a note: “Pressing this will change something in your life.”", {
        a: "Press it immediately — curiosity wins",
        b: "Overthink it for a long time before deciding",
        c: "Decide not to press it at all"
    }, 
    {
        a: "explorer",
        b: "thinker",
        c: "dreamer"
    }
    ),
    new Question("You can choose only ONE superpower. Which one feels right?", {
        a: "Reading minds",
        b: "Becoming invisible",
        c: "Controlling time"
    }, 
    {
        a: "thinker",
        b: "explorer",
        c: "dreamer"
    }),
    new Question("If your thoughts became visible for one day:", {
        a: "You’d be curious what others think",
        b: "You’d feel exposed but fascinated",
        c: "You’d analyze how people react"
    }, 
    {
        a: "explorer",
        b: "dreamer",
        c: "thinker"
    }),
    new Question("If your personality were a place, what would it be?", {
        a: "A quiet library",
        b: "A busy street market",
        c: "A peaceful beach at sunset"
    }, 
    {
        a: "thinker",
        b: "explorer",
        c: "dreamer"
    }),
    new Question("You can relive one moment repeatedly.", {
        a: "A moment of discovery",
        b: "A peaceful thinking moment",
        c: "A deeply emotional memory"
    }, 
    {
        a: "explorer",
        b: "thinker",
        c: "dreamer"
    })
];


    function getFinalPersonality() {
    let max = 0;
    let result = "";

    for (let type in personalityScore) {
        if (personalityScore[type] > max) {
            max = personalityScore[type];
            result = type;
        }
    }

    return result;
}

const result = getFinalPersonality();

if (result === "thinker") {
    console.log("You are thoughtful, analytical, and introspective.");
}
if (result === "explorer") {
    console.log("You are curious, adventurous, and action-oriented.");
}
if (result === "dreamer") {
    console.log("You are emotional, imaginative, and reflective.");
}
