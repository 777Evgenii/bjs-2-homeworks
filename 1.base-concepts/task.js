"use strict"

function solveEquation(a, b, c) {
  let arr = [];

  let d = Math.pow(b, 2) - 4 * a * c;


  if (d == 0) {
    arr.push(-b / (2 * a));

  } else if (d > 0) {
    arr.push((-b + Math.sqrt(d)) / (2 * a));
    arr.push((-b - Math.sqrt(d)) / (2 * a));
  }

  return arr;
}


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let totalAmount;

  if (isNaN(percent)) {
    return totalAmount = `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
  } else if (isNaN(contribution)) {
    return totalAmount = `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
  } else if (isNaN(amount)) {
    return totalAmount = `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
  }

  let P = percent / 100 / 12;
  let S = amount - contribution;
  let monthLoanFee = S * (P + (P / ((Math.pow(1 + P, countMonths)) - 1)));

  return Number((monthLoanFee * countMonths).toFixed(2));
}
