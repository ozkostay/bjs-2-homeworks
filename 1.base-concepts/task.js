"use strict";

function solveEquation(a, b, c) {
  let arr = [];
  let discriminant;
  discriminant = b**2 - 4*a*c;
  if (discriminant > 0) {
    arr[0] = (-b + Math.sqrt(discriminant)) / (2*a);
    arr[1] = (-b - Math.sqrt(discriminant)) / (2*a);
  } else if (discriminant === 0) {
    arr[0] = -b / (2*a);
  }
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;
  let totalMonth;
  let dateNow = new Date();
  
  //Проверка на правильность заполнения
  //percent = Number(percent);
  if (isNaN(Number(percent))) {
    totalAmount = 'Параметр "Процентная ставка" содержит неправильное значение "test"';
    return totalAmount;
  }
  //contribution = Number(contribution);
  if (isNaN(Number(contribution))) {
    totalAmount = 'Параметр "Начальный взнос" содержит неправильное значение "test"';
    return totalAmount;
  }
  //amount = Number(amount);
  if (isNaN(Number(amount))) {
    totalAmount = 'Параметр "Общая стоимость" содержит неправильное значение "test"';
    return totalAmount;
  }
  if ((date - dateNow) < 0) {
    totalAmount = "Параметр Срок ипотеки содержит неправильное значение " + date;
    return totalAmount;
  } else {
    //Вычисляем разницу в месяцах
    totalMonth = (date.getFullYear() - dateNow.getFullYear())*12 + (date.getMonth() - dateNow.getMonth());
  }

  let percentAtMonth = percent/12/100;
  totalAmount = totalMonth * (amount - contribution) * (percentAtMonth + percentAtMonth/(((1 + percentAtMonth)**totalMonth) - 1));
  totalAmount = Number(totalAmount.toFixed(2));
  return totalAmount;
}
