import React, { useContext } from 'react';
import { AppContext } from '@/app/page';

function Key({ keyVal, disabled }) {
  const { onEnter, onDelete, onSelector } = useContext(AppContext);
  const selectLetter = () => {
    if (keyVal == 'ENTER') {
      onEnter();
    } else if (keyVal === 'DELETE') {
      onDelete();
    } else {
      onSelector(keyVal);
    }
  };
  return (
    <div
      className={`flex items-center justify-center w-16 h-10 bg-gray-100 rounded shadow-md hover:bg-gray-300 active:bg-gray-400 active:shadow-inner ${
        disabled ? 'bg-gray-300' : 'bg-gray-100' // This is a default state with a specific color
      }`}
      onClick={selectLetter}
    >
      {keyVal}
    </div>
  );
}

export default Key;
