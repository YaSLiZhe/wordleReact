import React, { useContext } from 'react';
import { AppContext } from '@/app/page';

function Letter({ letterPos, attemptVal }) {
  const { board, rightWord, currAttempt } = useContext(AppContext);
  const letter = board[attemptVal][letterPos];

  const correct = rightWord[letterPos] === letter;
  const almost = !correct && letter !== '' && rightWord.includes(letter);

  const letterState =
    currAttempt.attempt > attemptVal &&
    (correct ? 'correct' : almost ? 'almost' : 'error');
  console.log(letterState);
  return (
    <div
      className={`w-16 h-16 border-4 text-xl font-bold text-center flex items-center justify-center mx-2
    ${
      letterState === 'correct'
        ? 'bg-green-500'
        : letterState === 'almost'
        ? 'bg-yellow-500'
        : letterState === 'error' // Adjusted for an 'error' state
        ? 'bg-gray-500'
        : 'bg-white' // This is a default state with a specific color
    }`}
    >
      {letter}
    </div>
  );
}

export default Letter;
