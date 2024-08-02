import React from 'react';
import PlayerCard from './Player/PlayerCard';

function Player() {
  return (
    <div className="flex items-center justify-between bg-black px-4 py-2">
      <PlayerCard />
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-center gap-1">
          <button className="rounded-full p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
            >
              <path
                fill="white"
                d="m19.496 4.136l-12 7a1 1 0 0 0 0 1.728l12 7A1 1 0 0 0 21 19V5a1 1 0 0 0-1.504-.864M4 4a1 1 0 0 1 .993.883L5 5v14a1 1 0 0 1-1.993.117L3 19V5a1 1 0 0 1 1-1"
              />
            </svg>
          </button>
          <button className="rounded-full bg-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 24 24"
            >
              <path fill="black" d="M9 17.192V6.808L17.154 12z" />
            </svg>
          </button>
          <button className="rounded-full p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
            >
              <path
                fill="white"
                d="M3 5v14a1 1 0 0 0 1.504.864l12-7a1 1 0 0 0 0-1.728l-12-7A1 1 0 0 0 3 5m17-1a1 1 0 0 1 .993.883L21 5v14a1 1 0 0 1-1.993.117L19 19V5a1 1 0 0 1 1-1"
              />
            </svg>
          </button>
        </div>
        <div className="flex items-center justify-center gap-2 text-gray-400 text-xs ">
          <p>0:00</p>
          <div className="w-96 rounded-lg border-2 border-white"></div>
          <p>3:22</p>
        </div>
      </div>
      <div className="flex gap-2">
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 24 24"
          >
            <path
              fill="white"
              d="M4.8 7q-.375-.425-.587-.925T4 5q0-1.25.875-2.125T7 2t2.125.875T10 5q0 .575-.213 1.075T9.2 7zM10 22q-1.65 0-2.825-1.175T6 18H5L4 8h6L9 18H8q0 .825.588 1.413T10 20t1.413-.587T12 18V6q0-1.65 1.175-2.825T16 2t2.825 1.175T20 6v16h-2V6q0-.825-.587-1.412T16 4t-1.412.588T14 6v12q0 1.65-1.175 2.825T10 22"
            />
          </svg>
        </button>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 24 24"
          >
            <path
              fill="white"
              d="M3 21v-8h2v4.6L17.6 5H13V3h8v8h-2V6.4L6.4 19H11v2z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Player;
