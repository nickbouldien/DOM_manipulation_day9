var random = Math.floor(Math.random() * 10);  //create random number
var counter = 0;    //initialize number of guesses to 0
console.log("rand num is: " + random);  // log random number

function highLow () {

  var name = document.getElementById("your-name").value; // get name
  var guess = document.getElementById("user-input").value; // get guess

  console.log("counter: " + counter); // loggin number of guesses and the current guess

  if (guess < random) {
    document.getElementById("result").innerHTML = "Too Low"
    counter = counter + 1;
    console.log("counter " + counter);
  } else if (guess > random) {
    document.getElementById("result").innerHTML = "Too High"
    counter = counter + 1;
    console.log("counter " + counter);
  } else {
    document.getElementById("result").innerHTML = "WINNER " + name + "!";
  }

  if (counter >= 3) {
    document.getElementById("result").innerHTML = "You lose, " + name + "!";
  }

}














// function whileLoop() {
//
//   console.log("random # " + random);
//
//   return highLow(random);
//
// }


//
