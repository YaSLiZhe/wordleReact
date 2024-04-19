'use client';

import Board from '@/components/Board';
import Keyboard from '@/components/Keyboard';
import { boardDefault } from '@/components/Words';
import { createContext, useState } from 'react';

export const AppContext = createContext();

export default function Page() {
  const [board, setBoard] = useState(boardDefault);
  const [currAttempt, setCurrAttempt] = useState({ attempt: 0, letterPos: 0 });
  return (
    <div className="flex flex-col items-center justify-between min-h-screen">
      <nav className="text-center">
        <h1 className="text-3xl font-bold underline decoration-4 underline-offset-8">
          Wordle Game
        </h1>
      </nav>
      <AppContext.Provider
        value={{ board, setBoard, currAttempt, setCurrAttempt }}
      >
        <Board />
        <Keyboard />
      </AppContext.Provider>
    </div>
  );
}
