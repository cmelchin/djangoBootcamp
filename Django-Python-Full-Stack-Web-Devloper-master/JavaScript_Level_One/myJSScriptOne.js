var ham = 0;
var cheese = 0;

var report = "blank";

if (ham >= 10 && cheese >= 10){
  report = "Strong sales of both ham and cheese."
}else if (ham === 0 && cheese === 0 ) {
  report = "We didn't sell a darn thing!"
} else {
  report = "Roughly average sales."
}

console.log(report);
