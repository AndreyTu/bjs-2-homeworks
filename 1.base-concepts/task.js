"use strict"
function solveEquation(a, b, c) {
  let roots = [];
  let discriminant = Math.pow(b,2) - 4*a*c;
  if (discriminant > 0) {
    roots[0] = (-b + Math.sqrt(discriminant) )/(2*a);
    roots[1] = (-b - Math.sqrt(discriminant) )/(2*a);
  } 
  else if (discriminant===0) {
    roots[0] = -b/(2*a)
  }
  return roots;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {

  percent = parseFloat(percent);
  contribution = parseFloat(contribution);
  amount = parseFloat(amount);
  countMonths = parseInt(countMonths);

  const monthPercent = percent / 100 / 12;

  const bodyOfCredit = amount - contribution;

  if (isNaN(percent) || isNaN(contribution) || isNaN(amount) || isNaN(countMonths) || percent < 0 || countMonths < 0) {
    return false;
  }

  const payment = bodyOfCredit * (monthPercent + monthPercent/(Math.pow(1+monthPercent, countMonths) - 1));
  let totalLoanAmount = payment * countMonths;
  totalLoanAmount = parseFloat(totalLoanAmount.toFixed(2));

  return totalLoanAmount;
}