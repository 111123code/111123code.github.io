let expression = '';

function press(char) {
  const operators = ['+', '-', '*', '/'];
  const lastChar = expression.slice(-1);

  // Не разрешаем вводить несколько операторов подряд
  if (operators.includes(char)) {
    if (expression === '' || operators.includes(lastChar)) {
      return; // игнорируем
    }
  }

  // Первое число не может начинаться с нескольких нулей (упрощённо)
  if (char === '0' && expression === '0') {
    return;
  }

  if (expression === '0' && char !== '.') {
    // Если было 0, а ввели цифру — заменяем первый 0
    expression = char;
  } else {
    expression += char;
  }

  updateDisplay();
}

function updateDisplay() {
  const display = document.getElementById('display');
  display.value = expression || '0';
}

function clearDisplay() {
  expression = '';
  updateDisplay();
}

function calculate() {
  if (expression === '') return;

  // Не можем вычислять, если последний символ оператор
  const lastChar = expression.slice(-1);
  if (['+', '-', '*', '/'].includes(lastChar)) return;

  try {
    // Осторожно: eval — только для учебных целей!
    const result = eval(expression);
    expression = String(result);
    updateDisplay();
  } catch (error) {
    expression = '';
    document.getElementById('display').value = 'Ошибка';
  }
}