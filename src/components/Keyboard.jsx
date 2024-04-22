'use client';

import React, { useContext, useEffect, useCallback } from 'react';
import Key from './Key';
import { AppContext } from '@/app/page';
function Keyboard() {
  const { onEnter, onDelete, onSelector, disabledLetters } =
    useContext(AppContext);
  const key1 = 'qwertyuiop'.toUpperCase().split('');
  const key2 = 'asdfghjkl'.toUpperCase().split('');
  const key3 = 'zxcvbnm'.toUpperCase().split('');
  const handleKeyboard = useCallback((event) => {
    if (event.key === 'Enter') {
      onEnter();
    } else if (event.key === 'Backspace') {
      onDelete();
    } else {
      key1.forEach((key) => {
        if (key.toLowerCase() === event.key) {
          onSelector(key);
        }
      });
      key2.forEach((key) => {
        if (key.toLowerCase() === event.key) {
          onSelector(key);
        }
      });
      key3.forEach((key) => {
        if (key.toLowerCase() === event.key) {
          onSelector(key);
        }
      });
    }
  });
  useEffect(() => {
    document.addEventListener('keydown', handleKeyboard);
    return () => {
      document.removeEventListener('keydown', handleKeyboard);
    };
  }, [handleKeyboard]);
  return (
    <div
      className="mb-9 flex flex-col items-center justify-center"
      onKeyDown={handleKeyboard}
    >
      {/* Three line of keyboard */}
      <div className="flex">
        {key1.map((key) => (
          <Key keyVal={key} disabled={disabledLetters.includes(key)} />
        ))}
      </div>
      <div className="flex">
        {key2.map((key) => (
          <Key keyVal={key} disabled={disabledLetters.includes(key)} />
        ))}
      </div>
      <div className="flex">
        <Key keyVal={'ENTER'} />
        {key3.map((key) => (
          <Key keyVal={key} disabled={disabledLetters.includes(key)} />
        ))}
        <Key keyVal={'DELETE'} />
      </div>
    </div>
  );
}

export default Keyboard;
