// import functions and grab DOM elements
import { logout } from '../fetch-utils.js';

const logoutBtn = document.getElementById('logout-btn');

logoutBtn.addEventListener('click', () => {
    logout();
});