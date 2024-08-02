import React from 'react';

function Cards({ image, title, credits }) {
  return (
    <div className="group relative flex w-1/5 flex-col items-center justify-center rounded-lg bg-slate-600 hover:bg-slate-400">
      <div
        className={`flex h-48 w-11/12 items-end justify-end rounded-lg bg-[url('${image}')]`}
      >
        <button className="invisible absolute bottom-2 right-3 transform rounded-full bg-green-600 px-3 py-3 transition-transform delay-150 group-hover:visible group-hover:-translate-y-8 hover:bg-green-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="38"
            height="38"
            viewBox="0 0 24 24"
          >
            <path fill="currentColor" d="M9 17.192V6.808L17.154 12z" />
          </svg>
        </button>
      </div>
      <div className="w-4/5 text-xl text-white">
        <h2>{title}</h2>
        <p className="py-1 text-sm text-gray-300">{credits}</p>
      </div>
    </div>
  );
}

export default Cards;
