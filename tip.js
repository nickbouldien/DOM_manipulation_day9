

function tipCalc() {
  var cost= parseInt(document.getElementById("bill").value)
  document.getElementById("cost").innerHTML = "$" + cost;

  var tip= parseInt(cost* .15)
  document.getElementById("total_tip").innerHTML = "$" + tip;

  var total= parseInt(cost + tip)
  document.querySelector("#bill_total").innerHTML = "$" + total;


  // var links = Array.from(document.querySelectorAll("a"));
  //
  // document.querySelector("linq").innerHTML = links;



}
