import React from 'react';

function RightSidebar(props) {
  return (
    <div>
      <div>
        <h1>{props.songTitle}</h1>
        <div className='flex gap-3'>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 15 15"
            >
              <path
                fill="white"
                stroke="currentColor"
                d="M3 7.5a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0Zm5 0a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0Zm5 0a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0Z"
              />
            </svg>
          </button>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
            >
              <path
                fill="white"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-width="1.5"
                d="m8.464 15.535l7.072-7.07m-7.072 0l7.072 7.07"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default RightSidebar;
