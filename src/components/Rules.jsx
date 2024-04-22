import React, { useContext } from 'react';
import { AppContext } from '@/app/page';
import { AiOutlineClose } from 'react-icons/ai'; // Using React Icons for the close icon

function Rules() {
  const { toggleRules } = useContext(AppContext);
  return (
    <div
      className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
      id="my-modal"
    >
      <div className="absolute top-5 right-5">
        <button
          onClick={toggleRules}
          className="text-xl p-2 rounded-full hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          aria-label="Close"
        >
          <AiOutlineClose />
        </button>
      </div>
      <div className="relative top-20 mx-auto p-5 border w-11/12 sm:w-3/4 lg:w-1/2 shadow-lg rounded-md bg-white">
        <div className="mt-3 text-center">
          <h3
            className="text-lg leading-6 font-medium text-gray-900"
            id="modal-title"
          >
            How to play
          </h3>
          <div className="mt-2 px-7 py-3">
            <p className="text-sm text-gray-500">
              You have to guess the hidden word in 6 tries and the color of the
              letters changes to show how close you are.
            </p>
            <p className="text-sm text-gray-500">
              To start the game, just enter any word, for example:
            </p>
            <div className="flex justify-center mt-4">
              <div className="bg-yellow-400 rounded-md px-3 py-1 text-sm font-semibold text-gray-800 m-1">
                T
              </div>
              <div className="bg-green-400 rounded-md px-3 py-1 text-sm font-semibold text-gray-800 m-1">
                A
              </div>
              <div className="bg-yellow-400 rounded-md px-3 py-1 text-sm font-semibold text-gray-800 m-1">
                B
              </div>
              <div className="bg-red-400 rounded-md px-3 py-1 text-sm font-semibold text-gray-800 m-1">
                L
              </div>
              <div className="bg-green-400 rounded-md px-3 py-1 text-sm font-semibold text-gray-800 m-1">
                E
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              <span className="text-red-400 font-bold">L</span>, aren't in the
              target word at all.
            </p>
            <p className="text-sm text-gray-500">
              <span className="text-yellow-400 font-bold">T</span>,
              <span className="text-yellow-400 font-bold">B</span> is in the
              word but in the wrong spot.
            </p>
            <p className="text-sm text-gray-500">
              <span className="text-green-400 font-bold">A</span>
              <span className="text-green-400 font-bold">E</span> is in the word
              and in the correct spot.
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Another try to find matching letters in the target word.
            </p>
            <div className="flex justify-center mt-4">
              <div className="bg-green-400 rounded-md px-3 py-1 text-sm font-semibold text-gray-800 m-1">
                F
              </div>
              <div className="bg-green-400 rounded-md px-3 py-1 text-sm font-semibold text-gray-800 m-1">
                L
              </div>
              <div className="bg-green-400 rounded-md px-3 py-1 text-sm font-semibold text-gray-800 m-1">
                A
              </div>
              <div className="bg-red-400 rounded-md px-3 py-1 text-sm font-semibold text-gray-800 m-1">
                S
              </div>
              <div className="bg-green-400 rounded-md px-3 py-1 text-sm font-semibold text-gray-800 m-1">
                H
              </div>
            </div>
            <div className="flex justify-center mt-2">
              <div className="bg-green-400 rounded-md px-3 py-1 text-sm font-semibold text-gray-800 m-1">
                F
              </div>
              <div className="bg-green-400 rounded-md px-3 py-1 text-sm font-semibold text-gray-800 m-1">
                L
              </div>
              <div className="bg-green-400 rounded-md px-3 py-1 text-sm font-semibold text-gray-800 m-1">
                A
              </div>
              <div className="bg-red-400 rounded-md px-3 py-1 text-sm font-semibold text-gray-800 m-1">
                M
              </div>
              <div className="bg-red-400 rounded-md px-3 py-1 text-sm font-semibold text-gray-800 m-1">
                E
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-4">So close!</p>
            <p className="text-lg font-bold text-green-500 mt-2">Got it! 🏆</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rules;
