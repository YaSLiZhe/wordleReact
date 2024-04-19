'use client';

import React from 'react';
import Key from './Key';

function Keyboard() {
  const key1 = 'qwertyuiop'.toUpperCase().split('');
  const key2 = 'asdfghjkl'.toUpperCase().split('');
  const key3 = 'zxcvbnm'.toUpperCase().split('');
  return (
    <div className="mb-9 flex flex-col items-center justify-center">
      {/* Three line of keyboard */}
      <div className="flex">
        {key1.map((key) => (
          <Key keyVal={key} />
        ))}
      </div>
      <div className="flex">
        {key2.map((key) => (
          <Key keyVal={key} />
        ))}
      </div>
      <div className="flex">
        <Key keyVal={'ENTER'} />
        {key3.map((key) => (
          <Key keyVal={key} />
        ))}
        <Key keyVal={'DELETE'} />
      </div>
    </div>
  );
}

export default Keyboard;
