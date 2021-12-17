export function renderPastPoll(poll) {
    const pastPollEl = document.createElement('div');
    const pastTitleEl = document.createElement('p');
    const optionAEl = document.createElement('p');
    const optionBEl = document.createElement('p');

    pastPollEl.classList.add('past-poll-container');
    pastTitleEl.classList.add('past-title');
    optionAEl.classList.add('option-a');
    optionBEl.classList.add('option-b');


    pastTitleEl.textContent = poll.question;
    optionAEl.textContent = `${poll.option_a} - ${poll.votes_a}`;
    optionBEl.textContent = `${poll.option_b} - ${poll.votes_b}`;

    pastPollEl.append(pastTitleEl, optionAEl, optionBEl);

    return pastPollEl;
}