//Next 5 are for the Magic 8 Ball

var answers = ["Yup!", "Fuhgeddaboudit", "Maybe", "Ask: what would your mother do?", "Ask: what would an Australian do", "then do the opposite", "No"] //answer array

//question prompt
var question = document.getElementById("user-question").value;


//Put the question and answer into a loop that stops when the user enters STOP.
function eightBall(){
    var answer = answers[Math.floor(Math.random() * 6)]
  //while (question !== "stop"){
    var keyword = "stop"
      //question =   document.getElementById("user-question").value
    if (question === keyword.toUpperCase()){
      document.getElementById("result").innerHTML = "Thank you for playing!";
    }
    else {
      document.getElementById("result").innerHTML = answer //alert(answers)
    }
}












//
