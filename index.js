var percent = 0;
var result = "";
var results = [];

$(".btn").click(function() {
  $(".input").each(function() {
    results.push(parseFloat(this.value));
    console.log(results);
  });

  if (results.includes(NaN)) {
    alert("Please enter a percentage number for each module!");
    location.reload();

  } else {
    calculatePercentage();
    determineResult();
    displayResults();
    results = [];
  }
});

function calculatePercentage() {
  var tenCreditTotal = results[0] + results[1] + results[4] + results[5];
  var twentyCreditTotal = (results[2] + results[3] + results[6] + results[7]) * 2;
  var projectTotal = results[8] * 6;
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

function displayResults() {
  $("#result").html(result);
  $("#percent").html(percent.toFixed(2) + "%");
}
