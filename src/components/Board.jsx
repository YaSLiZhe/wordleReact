'use client';

import React, { useState } from 'react';
import Letter from './Letter';

function Board() {
  return (
    <div className="flex flex-col items-center justify-center">
      {/* Each row of the board */}
      {Array.from({ length: 6 }, (_, attemptVal) => (
        <div key={attemptVal} className="flex justify-center mb-1">
          {/* Each letter in a row */}
          {Array.from({ length: 5 }, (_, letterPos) => (
            <Letter
              key={letterPos}
              letterPos={letterPos}
              attemptVal={attemptVal}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default Board;
