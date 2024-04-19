import React, { useContext } from 'react';
import { AppContext } from '@/app/page';

function Key({ keyVal }) {
  const { board, setBoard, currAttempt, setCurrAttempt } =
    useContext(AppContext);
  const selectLetter = () => {
    if (keyVal == 'ENTER') {
      if (currAttempt.letterPos !== 5) return;
      setCurrAttempt({ attempt: currAttempt.attempt + 1, letterPos: 0 });
    } else if (keyVal === 'DELETE') {
      if (currAttempt.letterPos === 0) return;
      const newBoard = [...board];
      newBoard[currAttempt.attempt][currAttempt.letterPos - 1] = '';
      setBoard(newBoard);
      setCurrAttempt({ ...currAttempt, letterPos: currAttempt.letterPos - 1 });
    } else {
      if (currAttempt.letterPos > 4) return;
      const newBoard = [...board];
      newBoard[currAttempt.attempt][currAttempt.letterPos] = keyVal;
      setBoard(newBoard);
      setCurrAttempt({ ...currAttempt, letterPos: currAttempt.letterPos + 1 });
    }
  };
  return (
    <div
      className="flex items-center justify-center w-16 h-10 bg-gray-100 rounded shadow-md hover:bg-gray-300 active:bg-gray-400 active:shadow-inner"
      onClick={selectLetter}
    >
      {keyVal}
    </div>
  );
}

export default Key;
