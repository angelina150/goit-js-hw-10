import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
form.addEventListener('submit', onsubmit);

function onsubmit(event) {
  event.preventDefault();

  const inputDelay = form.elements.delay.value;
  const inputState = form.elements.state.value;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (inputState === 'fulfilled') {
        resolve(inputDelay);
      } else {
        reject(inputDelay);
      }
    }, inputDelay);
  });

  promise
    .then(value => {
      iziToast.show({
        title: 'OK',
        titleColor: 'white',
        message: `Fulfilled promise in ${value}ms`,
        messageColor: 'white',
        position: 'topRight',
        color: '#59a10d',
      });
    })
    .catch(error => {
      iziToast.show({
        title: 'Error',
        titleColor: 'white',
        message: `Rejected promise in ${error}ms`,
        messageColor: 'white',
        position: 'topRight',
        color: '#ef4040',
      });
    });

  form.reset();
}
