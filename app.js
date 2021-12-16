
import { redirectIfLoggedIn, signUpUser, signInUser } from './fetch-utils.js';

const signUpForm = document.getElementById('sign-up-form');
const signUpEmail = document.getElementById('sign-up-email');
const signUpPassword = document.getElementById('sign-up-password');
// console.log(signUpForm, signUpEmail, signUpPassword);
const signInForm = document.getElementById('sign-in-form');
const signInEmail = document.getElementById('sign-in-email');
const signInPassword = document.getElementById('sign-in-password');

signUpForm.addEventListener('submit', async(e) => {
    e.preventDefault();

    const user = await signUpUser(signUpEmail.value, signUpPassword.value);

    if (user) {
        redirectIfLoggedIn();
    } else {
        console.log(user);
    }
});

// signInForm.addEventListener('submit', async(e) => {
//     e.preventDefault();

//     const user = await signInUser(signInEmail.value, signInPassword.value);

//     if (user) {
//         redirectIfLoggedIn();
//     } else {
//         console.log(user);
//     }
// });