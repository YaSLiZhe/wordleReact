'use client';

import Board from '@/components/Board';
import Keyboard from '@/components/Keyboard';
import GameOver from '@/components/GameOver';
import Rules from '@/components/Rules';
import { boardDefault, generateWordSet } from '@/components/Words';
import { createContext, useEffect, useState } from 'react';
import { MdTipsAndUpdates } from 'react-icons/md';

export const AppContext = createContext();

export default function Page() {
  const [board, setBoard] = useState(boardDefault);
  const [currAttempt, setCurrAttempt] = useState({ attempt: 0, letterPos: 0 });
  const [wordSet, setWordSet] = useState(new Set());
  const [disabledLetters, setDisabledLetters] = useState([]);
  const [gameOver, setGameOver] = useState({
    gameOver: false,
    guessWord: false,
  });
  const [rightWord, setRightWord] = useState('');
  const [showRules, setShowRules] = useState(false);

  useEffect(() => {
    generateWordSet().then((res) => {
      setWordSet(res.wordSet);
      setRightWord(res.todayWord.toUpperCase());
    });
  }, []);

  const onSelector = (keyVal) => {
    if (currAttempt.letterPos > 4) return;
    const newBoard = [...board];
    newBoard[currAttempt.attempt][currAttempt.letterPos] = keyVal;
    setBoard(newBoard);
    //...Object will copy previous object, and we can change remain part
    setCurrAttempt({ ...currAttempt, letterPos: currAttempt.letterPos + 1 });
  };
  const onDelete = () => {
    if (currAttempt.letterPos === 0) return;
    const newBoard = [...board];
    newBoard[currAttempt.attempt][currAttempt.letterPos - 1] = '';
    setBoard(newBoard);
    setCurrAttempt({ ...currAttempt, letterPos: currAttempt.letterPos - 1 });
  };
  const onEnter = () => {
    if (currAttempt.letterPos !== 5) return;

    let curWord = '';
    for (let i = 0; i < 5; i++) {
      curWord += board[currAttempt.attempt][i];
    }
    if (wordSet.has(curWord.toLowerCase())) {
      setCurrAttempt({ attempt: currAttempt.attempt + 1, letterPos: 0 });
    } else {
      alert('Word not found!');
    }
    if (curWord === rightWord) {
      setGameOver({ gameOver: true, guessWord: true });
      return;
    }
    if (currAttempt.attempt === 5) {
      setGameOver({ gameOver: true, guessWord: false });
      return;
    }
  };
  const toggleRules = () => {
    setShowRules((prev) => !prev);
  };
  return (
    <div className="flex flex-col items-center justify-center justify-between min-h-screen">
      <nav className="flex justify-between items-center w-full p-4">
        <h1 className="text-3xl font-bold underline decoration-4 underline-offset-8">
          Wordle Game
        </h1>
        <button
          onClick={toggleRules}
          className="text-xl p-2 rounded-full hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          aria-label="Rules"
        >
          <MdTipsAndUpdates className="text-2xl" />
        </button>
      </nav>
      <AppContext.Provider
        value={{
          board,
          setBoard,
          currAttempt,
          setCurrAttempt,
          onSelector,
          onDelete,
          onEnter,
          rightWord,
          disabledLetters,
          setDisabledLetters,
          gameOver,
          setGameOver,
          showRules,
          toggleRules,
        }}
      >
        {gameOver.gameOver ? <GameOver /> : showRules ? <Rules /> : <Board />}
        {!showRules && <Keyboard />}
      </AppContext.Provider>
    </div>
  );
}
