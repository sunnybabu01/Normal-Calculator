let isDarkMode = true;

function changeTheme() {
  const theme = document.getElementById('theme');
  const themeIcon = document.getElementById('theme-icon');
  if (isDarkMode) {
    theme.setAttribute('href', 'styles/light.css');
    themeIcon.setAttribute('src', 'assets/MoonIcon.svg');
  } else {
    theme.setAttribute('href', 'styles/dark.css');
    themeIcon.setAttribute('src', 'assets/SunIcon.svg');
  }
  isDarkMode = !isDarkMode;
}

function liveScreen(value) {
  const resultField = document.getElementById('result');
  resultField.value += value;
}

function calculate(expression) {
  try {
    const resultField = document.getElementById('result');
    resultField.value = eval(expression.replace('x', '*'));
  } catch {
    alert('Invalid calculation');
  }
}
