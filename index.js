var button = document.querySelector("button");
var inputBox1 = document.querySelector(".input1");
var inputBox2 = document.querySelector(".input2");
var inputBox3 = document.querySelector(".input3");
var inputBox4 = document.querySelector(".input4");
var inputBox5 = document.querySelector(".input5");
var inputBox6 = document.querySelector(".input6");
var inputBox7 = document.querySelector(".input7");
var inputBox8 = document.querySelector(".input8");
var inputBox9 = document.querySelector(".input9");
var percentText = document.querySelector("#percent");
var resultText = document.querySelector("#result");
var percent = 0;
var result = "";
var numbers = [];

button.addEventListener("click", function() {

  calculatePercentage();
  determineResult();

  resultText.innerHTML = result;
  percentText.innerHTML = percent.toFixed(2) + "%";

});


function calculatePercentage() {
  input1 = parseFloat(inputBox1.value);
  input2 = parseFloat(inputBox2.value);
  input3 = parseFloat(inputBox3.value);
  input4 = parseFloat(inputBox4.value);
  input5 = parseFloat(inputBox5.value);
  input6 = parseFloat(inputBox6.value);
  input7 = parseFloat(inputBox7.value);
  input8 = parseFloat(inputBox8.value);
  input9 = parseFloat(inputBox9.value);
  var tenCreditTotal = input1 + input2 + input5 + input6;
  var twentyCreditTotal = (input3 + input4 + input7 + input8) * 2;
  var projectTotal = input9 * 6;
  percent = (tenCreditTotal + twentyCreditTotal + projectTotal) / 18;
}

function determineResult() {
  if (percent >= 70) {
    result = "Distinction";
  } else if (percent < 70 && percent >= 60) {
    result = "Merit";
  } else if (percent < 60 && percent >= 50) {
    result = "Award";
  } else {
    result = "Fail";
  }
}
