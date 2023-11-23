const body = document.querySelector('body');
const buttons = document.querySelectorAll('.button');

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    // console.log(e.target);
    switch (e.target.id) {
      case 'grey':
        body.style.backgroundColor = e.target.id;
        break;

      case 'white':
        body.style.backgroundColor = e.target.id;
        break;

      case 'blue':
        body.style.backgroundColor = e.target.id;
        break;

      case 'yellow':
        body.style.backgroundColor = e.target.id;
        break;
    }
  });
});
