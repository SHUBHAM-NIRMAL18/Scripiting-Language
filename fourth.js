let maritalStatus = prompt("Enter your marital status (Married/Unmarried): ");
let annualIncome = parseInt(prompt("Enter your annual income: "));
let gender = prompt("Enter your gender: ");

let tax = 0;
if (maritalStatus === "Married") {
  if (annualIncome <= 450000) {
    tax = annualIncome * 0.01;
  } else if (annualIncome > 450000 && annualIncome <= 550000) {
    tax = 4500 + ((annualIncome - 450000) * 0.1);
  } else if (annualIncome > 550000 && annualIncome <= 750000) {
    tax = 4500 + 10000 + ((annualIncome - 550000) * 0.2);
  } else if (annualIncome > 750000 && annualIncome <= 1300000) {
    tax = 4500 + 10000 + 40000 + ((annualIncome - 750000) * 0.3);
  } else if (annualIncome > 1300000) {
    tax = 4500 + 10000 + 40000 + 165000 ((annualIncome - 1300000) * 0.35);
  }
} else if (maritalStatus === "Unmarried") {
  if (annualIncome <= 400000) {
    tax = annualIncome * 0.01;
  } else if (annualIncome > 400000 && annualIncome <= 500000) {
    tax = 4000 + ((annualIncome - 400000) * 0.1);
  } else if (annualIncome > 500000 && annualIncome <= 750000) {
    tax = 4000 + 10000 + ((annualIncome - 500000) * 0.2);
  } else if (annualIncome > 750000 && annualIncome <= 1300000) {
    tax = 4000 + 10000 + 50000 ((annualIncome - 750000) * 0.3);
  } else if (annualIncome > 1300000) {
    tax =4000 + 10000 + 50000 + 165000 + ((annualIncome -1300000)*0.35);
}
}
if(gender === "female"){
tax *= .9;
}
console.log("Your total tax is: " + tax); 
