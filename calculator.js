
function calculate() {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  const operation = document.getElementById('operation').value;
  const errorElement = document.getElementById('error');
  const resultElement = document.getElementById('result');

  if (isNaN(num1) || isNaN(num2)) {
    errorElement.textContent = 'Please enter valid numbers.';
    resultElement.textContent = '';
    return;
  }

  let result;
  switch (operation) {
    case 'add':
      result = num1 + num2;
      break;
    case 'subtract':
      result = num1 - num2;
      break;
    case 'multiply':
      result = num1 * num2;
      break;
    case 'divide':
      if (num2 === 0) {
        errorElement.textContent = 'Cannot divide by zero.';
        resultElement.textContent = '';
        return;
      }
      result = num1 / num2;
      break;
    default:
      errorElement.textContent = 'Please select a valid operation.';
      resultElement.textContent = '';
      return;
  }

  errorElement.textContent = '';
  resultElement.textContent = `Result: ${result}`;
}
