'use client';

import Board from '@/components/Board';
import Keyboard from '@/components/Keyboard';
import { boardDefault, generateWordSet } from '@/components/Words';
import { createContext, useEffect, useState } from 'react';

export const AppContext = createContext();

export default function Page() {
  const [board, setBoard] = useState(boardDefault);
  const [currAttempt, setCurrAttempt] = useState({ attempt: 0, letterPos: 0 });
  const [wordSet, setWordSet] = useState(new Set());

  const rightWord = 'RIGHT';
  useEffect(() => {
    generateWordSet().then((res) => setWordSet(res.wordSet));
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
    setCurrAttempt({ attempt: currAttempt.attempt + 1, letterPos: 0 });
  };
  return (
    <div className="flex flex-col items-center justify-between min-h-screen">
      <nav className="text-center">
        <h1 className="text-3xl font-bold underline decoration-4 underline-offset-8">
          Wordle Game
        </h1>
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
        }}
      >
        <Board />
        <Keyboard />
      </AppContext.Provider>
    </div>
  );
}
