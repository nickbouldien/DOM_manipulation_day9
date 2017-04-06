//Next 5 are for the Magic 8 Ball
//answer array
var answers = ["Yup!", "Fuhgeddaboudit", "Maybe", "Ask: what would your mother do?", "Ask: what would an Australian do", "then do the opposite", "Your answer here"]

//question prompt
var question = prompt("What's your question?")

//random answer
answers = answers [Math.floor(Math.random() * 6)]

//Output the question with the random answer.
function eightBall(){
  var question = prompt("What's your question?")
  alert(answers[Math.floor(Math.random() * 6)])
}

//Put the question and answer into a loop that stops when the user enters STOP.
function eightBall(){
  while (question !== "stop"){
    var qcd uestion = prompt('What is your question? Write "stop" if you wish to quit.')
    if(question == "stop"){alert ("Thank you for playing!")}
    else {
    alert(answers)
    }
}
}
