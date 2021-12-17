// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { renderPastPoll } from '../render-utils.js';

const test = QUnit.test;

test('renderPastPoll(poll) should take in a poll object and return DOM elements containing the poll question, poll option titles and poll votes', (expect) => {
    //Arrange
    const poll = {
        question: 'Pizza or Tacos?',
        option_a: 'Pizza',
        votes_a: 3,
        option_b: 'Tacos',
        votes_b: 3
    };
    // Set up your arguments and expectations
    const expected = '<div class="past-poll-container"><p class="past-title">Pizza or Tacos?</p><p class="option-a">Pizza - 3</p><p class="option-b">Tacos - 3</p></div>';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderPastPoll(poll);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected, 'renderPastPoll(poll) takes in a poll object and returns DOM elements containing the question, option titles and votes');
});
