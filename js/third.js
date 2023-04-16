var principle =Number(prompt("Enter Principle:"));
var time =Number(prompt("Enter Time:"));
var rate =Number(prompt("Enter Rate:"));
var year = Number(prompt("Enter number of year:"));

var si= (principle*time*rate)/100;
var ci = (principle*(1+rate/year)^year);

alert('Simple Intrest is:'+ si);
alert('Compound Intrest is:'+ ci);