const display = document.querySelector('.display');

setInterval(() => {
  const date = new Date();
  display.innerHTML = date.toLocaleTimeString();
}, 1000);
