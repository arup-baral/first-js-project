const button = document.getElementById('button');
const form = document.querySelector('form');
const span = document.querySelector('.result');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let height = parseFloat(document.getElementById('height-field').value);
  const weight = parseFloat(document.getElementById('weight-field').value);

  if (height === 0 || isNaN(height) || height === '') {
    span.innerHTML = 'Please give a valid height value';
  } else if (weight === 0 || isNaN(weight) || weight === '') {
    span.innerHTML = 'Please give a valid weight value';
  } else {
    height = height / 100;
    const bmi = (weight / (height * height)).toFixed(2);
    let s = '';
    if (bmi < 18.6) {
      s = 'Under Weight';
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      s = 'Normal Range';
    } else {
      s = 'Overweight';
    }
    span.innerHTML = `Your bmi is: ${bmi} (${s})`;
  }
  span.style.color = 'purple';
  span.style.fontWeight = 'bold';
});
