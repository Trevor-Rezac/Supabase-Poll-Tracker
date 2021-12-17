// import functions and grab DOM elements
import { checkAuth, logout } from '../fetch-utils.js';

checkAuth();

const logoutBtn = document.getElementById('logout-btn');

const pollForm = document.getElementById('poll-form');
const pollQuestionEl = document.getElementById('poll-question');
const optionATitleEl = document.getElementById('option-a-title');
const optionAVotesEl = document.getElementById('option-a-votes');
const optionBTitleEl = document.getElementById('option-b-title');
const optionBVotesEl = document.getElementById('option-b-votes');
const voteABtn = document.getElementById('vote-a-btn');
const voteBBtn = document.getElementById('vote-b-btn');
const closePollBtn = document.getElementById('close-poll-btn');


let question = '';
let optionA = '';
let optionB = '';
let votesA = 0;
let votesB = 0;


pollForm.addEventListener('submit', async(e) => {
    e.preventDefault();

    const data = new FormData(pollForm);

    const question = data.get('poll-question');
    const optionA = data.get('option-a');
    const optionB = data.get('option-b');

    pollQuestionEl.textContent = question;
    optionATitleEl.textContent = optionA;
    optionBTitleEl.textContent = optionB;

    pollForm.reset();
});

voteABtn.addEventListener('click', () => {
    votesA++;
    optionAVotesEl.textContent = votesA;
});

voteBBtn.addEventListener('click', () => {
    votesB++;
    optionBVotesEl.textContent = votesB;
});

logoutBtn.addEventListener('click', () => {
    logout();
});