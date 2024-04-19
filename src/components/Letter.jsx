import React, { useContext } from 'react';
import { AppContext } from '@/app/page';

function Letter({ letterPos, attemptVal }) {
  const { board } = useContext(AppContext);
  const letter = board[attemptVal][letterPos];
  return (
    <div className="w-16 h-16 border-4 text-xl font-bold text-center flex items-center justify-center mx-2">
      {letter}
    </div>
  );
}

export default Letter;
