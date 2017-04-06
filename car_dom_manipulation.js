
// Javascript Car Simulator Webpage
//
// Story 1:
//
// Add (model) year, and a method that returns make, model and year as one String and use the method to tell the user.
// Story 2:
//
// Constrain the maximum speed to not exceed 85. Try taking it above 80 and see what happens.
// Story 3:
//
// Use a while loop to take speed up to 70, then use a while loop to brake down to 0. Surprise: it doesn't stop at 0, fix that.
// Story 4:
//
// Sometimes roads are slippery and downhill, and sometimes brakes fail: make the brake change the speed with a random amount with a maximum of plus or minus of the current speed. (Hint: try Math.random();)


// New Car Constructor

// function createCar(newMake, newModelYear, newColor) {
//   // var car = {}
//   return {
//     make: document.getElementById("make").value,
//     modelYear: document.getElementById("model").value,
//     color: document.getElementById("color").value,
//     getData: function() {
//       document.getElementById("result").innerHTML = "Make: " + this.make  + "model: " + this.modelYear + " color: " + this.color}
//    }
// }


function createCar(newMake, newModelYear, newColor) {
  // var car = {}
    this.make= document.getElementById("make").value,
    this.modelYear= document.getElementById("model").value,
    this.color= document.getElementById("color").value;

    return document.getElementById("result").innerHTML = "Make: " + this.make  + " model: " + this.modelYear + " color: " + this.color
  }
      // console.log(this.make),


// Acceleration, brake and speed

// function raceCar(document.getElementById("speed").value) {
//   // var speed = 0
//
//   return {
//     getData: function() { return speed },
//     increase: function() { speed += 10 },
//     decrease: function() { speed -= 7 }
//    }
// return document.getElementById("performance").innerHTML = "maxSpeed: " + this.maxSpeed
//
// }

function raceCar() {
  var speed = parseInt(document.getElementById("speed").value);

  return document.getElementById("performance").innerHTML = "Start Speed: " + speed;
}
//   // var speed = 0
   //var speed= document.getElementById("speed").value;
  // console.log("nick" + speed);

    //this.getData = function() { return speed },
    function increase () {
      var speed = parseInt(document.getElementById("speed").value);

      speed += 10;
      console.log("increasing");
      return document.getElementById("MPH").value = speed;
    }
    function decrease() {
      var speed = parseInt(document.getElementById("speed").value);
      speed -= 7;
      console.log("decreasing");
      return document.getElementById("MPH").value = speed;
    }



//
// // Speed loop with decrease of speed
//
// function raceCar(x) {
//   // var speed = 0
//   for (x = x; x > 85 || x < 0; x= prompt("enter valid number")) {
//     console.log("Invalid")
//   } return {
//     getData: function() { return parseInt(x) },
//     decrease: function() {
//       while(x > 0) {
//         x--
//       }
//     },
//     increase: function() {
//       while(x < 85) {
//         x++
//       }
//     }
//   }
// }
//
// //random braking iteration challenge
//
// function raceCar(x) {
//   // var speed = 0
//   for (x = x; x > 85 || x < 0; x= prompt("enter valid number")) {
//     console.log("Invalid")
//   }
//   return {
//     getData: function() { return parseInt(x) },
//     decrease: function() {
//       while(x > 0) {
//         x--;
//       }
//     },
//       brake: function() {
//         var y = (Math.floor(Math.random()* x/2))
//         while(y > x/2) {
//           y = (Math.floor(Math.random()* x/2))
//         }
//         x = x - y;
//       },
//       increase: function() {
//         while(x < 85) {
//           x++
//         }
//       }
//     }
//   }
//
//













//
