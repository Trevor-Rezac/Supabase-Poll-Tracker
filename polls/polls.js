// import functions and grab DOM elements
import { checkAuth, logout, savePoll, getPolls } from '../fetch-utils.js';
import { renderPastPoll } from '../render-utils.js';

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
const pastPollsEl = document.querySelector('.past-polls');

let question = '';
let optionA = '';
let optionB = '';
let votesA = 0;
let votesB = 0;

pollForm.addEventListener('submit', async(e) => {
    e.preventDefault();

    const data = new FormData(pollForm);

    question = data.get('poll-question');
    optionA = data.get('option-a');
    optionB = data.get('option-b');

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

closePollBtn.addEventListener('click', async() => {

    await savePoll(question, optionA, optionB, votesA, votesB);

    resetState();

    displayPolls();
    displayCurrentPoll();
});

logoutBtn.addEventListener('click', () => {
    logout();
});

function displayCurrentPoll() {
    pollQuestionEl.textContent = question;
    optionATitleEl.textContent = optionA;
    optionAVotesEl.textContent = votesA;
    optionBTitleEl.textContent = optionB;
    optionBVotesEl.textContent = votesB;
}

function resetState() {
    question = '';
    optionA = '';
    optionB = '';
    votesA = '';
    votesB = '';
}

async function displayPolls() {
    const polls = await getPolls();

    pastPollsEl.textContent = '';
    for (let poll of polls) {
        const pastPollEl = renderPastPoll(poll);
        pastPollsEl.append(pastPollEl);
    }
}

displayPolls();
