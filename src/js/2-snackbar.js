console.log('Snackbar');


import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

document.querySelector('.snack-form').addEventListener('submit', function(event) {
    event.preventDefault();
     
    const delay = parseInt(this.querySelector('input[name="delay"]').value);
    const state = this.querySelector('input[name="state"]:checked').value;

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (state === 'fulfilled') {
        resolve(delay);
    } else {
        reject(delay);
    }
    }, delay);
});

promise 
.then(delay => {
    iziToast.success({
        title: 'Success',
        message: `&#x1F7E2; Fulfilled promise in ${delay}ms`,
        position: 'topRight',
        class: 'iziToast-custom'
});
})

.catch(delay => {
    iziToast.error({
        title: 'Error',
        message: `&#10060; Rejected promise in ${delay}ms`,
        position: 'topRight',
        class: 'iziToast-custom'
    });
    });
});