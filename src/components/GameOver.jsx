import { AppContext } from '@/app/page';
import React, { useContext } from 'react';

function GameOver() {
  const { gameOver, currAttempt, rightWord } = useContext(AppContext);
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-md rounded-lg p-6 text-center">
        <h3
          className={`text-lg font-bold ${
            gameOver.guessWord ? 'text-green-500' : 'text-red-500'
          }`}
        >
          {gameOver.guessWord ? 'Congratulations! 🎉' : 'Game Over 😢'}
        </h3>
        <h1 className="text-2xl font-bold text-gray-800 mt-2">
          Correct word: <span className="text-blue-500">{rightWord}</span>
        </h1>
        {gameOver.guessWord && (
          <h3 className="text-md text-gray-600 mt-4">
            You guessed in{' '}
            <span className="text-purple-500 font-bold">
              {currAttempt.attempt}
            </span>{' '}
            attempts
          </h3>
        )}
      </div>
    </div>
  );
}

export default GameOver;
