function calculate(operator) {
  const num1 = parseFloat(document.getElementById('num1').value)
  const num2 = parseFloat(document.getElementById('num2').value)
  const resultElem = document.getElementById('result')
  
  if (isNaN(num1) || isNaN(num2)) {
    resultElem.textContent = 'Введите оба числа';
    return;
  }
  
  let result;
  switch(operator) {
    case '+':
      result = num1 + num2; 
      break;
    case '-':
      result = num1 - num2; 
      break;
    case '*':
      result = num1 * num2; 
      break;
    case '/':
      if (num2 === 0) {
        resultElem.textContent = 'На ноль делить нельзя!';
        return;
      }
      result = num1 / num2; 
      break;
  }
  
  resultElem.textContent = 'Результат: ' + result;
}