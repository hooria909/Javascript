var questions = [
    {
        question: "Q1: HTML Stands for?",
        option1: "Hyper Text Markup Language",
        option2: "Hyper Tech Markup Language",
        option3: "Hyper Touch Markup Language",
        correct: "Hyper Text Markup Language",
    },
    {
        question: "Q2: CSS Stands for",
        option1: "Cascoding Style Sheets",
        option2: "Cascading Style Sheets",
        option3: "Cascating Style Sheets",
        correct: "Cascading Style Sheets",
    },
    {
        question: "Q3: Which tag is used for most large heading",
        option1: "<h6>",
        option2: "<h2>",
        option3: "<h1>",
        correct: "<h1>",
    },
    {
        question: "Q4: Which tag is used to make element unique ",
        option1: "id",
        option2: "class  ",
        option3: "label",
        correct: "id",
    },
    {
        question: "Q5: Any element assigned with id, can be get in css ",
        option1: "by # tag",
        option2: "by @ tag",
        option3: "by & tag",
        correct: "by # tag",
    },
    {
        question: "Q6: CSS can be used with ______ methods ",
        option1: "8",
        option2: "3",
        option3: "4",
        correct: "3",
    },
    {
        question: "Q7: In JS variable types are ____________ ",
        option1: "6",
        option2: "3",
        option3: "8",
        correct: "8",
    },
    {
        question: "Q8: In array we can use key name and value ",
        option1: "True",
        option2: "False",
        option3: "None of above",
        correct: "False",
    },
    {
        question: "Q9: toFixed() is used to define length of decimal ",
        option1: "True",
        option2: "False",
        option3: "None of above",
        correct: "True",
    },
    {
        question: "Q10: push() method is used to add element in the start of array ",
        option1: "True",
        option2: "False",
        option3: "None of above",
        correct: "False",
    },
];

var quesElement = document.getElementById("ques");
var opt1 = document.getElementById("option1");
var opt2 = document.getElementById("option2");
var opt3 = document.getElementById("option3");
var index = 0;
var nextBtn = document.getElementById("btn");
var score = 0;
var timerDisplay = document.getElementById("timer");
var totalTime = 10 * 60;

function startTimer() {
  var timer = setInterval(function () {
    var minutes = Math.floor(totalTime / 60);
    var seconds = totalTime % 60;

    var formattedTime =
      minutes.toString().padStart(2, "0") +
      ":" +
      seconds.toString().padStart(2, "0");
    timerDisplay.innerText = "Time: " + formattedTime;

    totalTime--;

    if (totalTime < 0) {
      clearInterval(timer);
      showResult(); 
    }
  }, 1000);
}



function nextQues() {
    var answers = document.getElementsByTagName("input");

    for (var i = 0; i < answers.length; i++) {
        if (answers[i].checked) {
            answers[i].checked = false;
            var userSelectedValue = answers[i].value;

            var selectedOption = questions[index - 1]["option" + userSelectedValue];
            var correctOption = questions[index - 1]["correct"];


            if (selectedOption === correctOption) {
                score++;
            }
        }
    }

    nextBtn.disabled = true;

    if (index > questions.length - 1) {
        var percentage = (score / questions.length) * 100;
        var message = "";
        var iconType = "success";

        if (percentage >= 90) {
            message = "Excellent!"
        } else if (percentage >= 80) {
            message = "Good!"
        } else if (percentage >= 70) {
            message = "Satisfactory!"
        } else {
           message = "Better Luck Next Time!"
            iconType = "error";
        }

        Swal.fire({
            title: "Quiz Completed!",
            text: "You got " + percentage.toFixed(2) + "%. " + message,
            icon: iconType,
        });
    } else {
        quesElement.innerText = questions[index].question;
        opt1.innerText = questions[index].option1;
        opt2.innerText = questions[index].option2;
        opt3.innerText = questions[index].option3;
        index++;
    }
}

function press() {
    nextBtn.disabled = false;
}

window.onload = function () {
  nextQues();
  startTimer();
};