const display = document.getElementById('display');

function appendValue(value) {
  if (value === '√') {
    display.value = display.value ? Math.sqrt(eval(display.value)) : '';
  } else if (value === '^2') {
    display.value = display.value ? Math.pow(eval(display.value), 2) : '';
  } else if (value === '%') {
    display.value = display.value ? eval(display.value) / 100 : '';
  } else {
    display.value += value;
  }
}

function clearDisplay() {
  display.value = '';
}

function backspace() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = 'Error';
  }
}
