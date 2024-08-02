import React from 'react';
import SideCard from './SideCard';

function Library() {
  const content = [
    {
      title: 'Create your first playlist',
      paragraph: "It's easy, we will help you",
      button: 'Create Playlist',
    },
    {
      title: "Let's find some podcasts to follow",
      paragraph: "We'll keep you updated on new episodes",
      button: 'Browse podcasts',
    },
  ];
  return (
    <div className="flex h-full flex-col gap-4 rounded-xl bg-midnight py-2">
      <div className="flex items-center justify-between px-4 py-2">
        <div className="group flex items-center gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
          >
            <path
              fill="#e5e7eb"
              d="M3 5.5A2.5 2.5 0 0 1 5.5 3h2A2.5 2.5 0 0 1 10 5.5v21A2.5 2.5 0 0 1 7.5 29h-2A2.5 2.5 0 0 1 3 26.5zm9 0A2.5 2.5 0 0 1 14.5 3h2A2.5 2.5 0 0 1 19 5.5v21a2.5 2.5 0 0 1-2.5 2.5h-2a2.5 2.5 0 0 1-2.5-2.5zm9.8 2.105c-1.295.358-2.064 1.733-1.717 3.07l4.27 16.466c.348 1.338 1.678 2.131 2.973 1.773l1.875-.52c1.294-.357 2.063-1.732 1.716-3.07L26.647 8.86c-.348-1.338-1.678-2.131-2.973-1.773z"
            />
          </svg>
          <h1 className="text-md font-semibold text-gray-200 group-hover:text-white">
            Library
          </h1>
        </div>
        <div className="flex gap-2">
          <button className="rounded-full hover:bg-nightlight">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 24 24"
            >
              <path fill="#e5e7eb" d="M11 13H5v-2h6V5h2v6h6v2h-6v6h-2z" />
            </svg>
          </button>
          <button className="rounded-full hover:bg-nightlight">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 24 24"
            >
              <path
                fill="#e5e7eb"
                d="M12.7 17.925q-.35.2-.625-.062T12 17.25L14.425 13H3q-.425 0-.712-.288T2 12t.288-.712T3 11h11.425L12 6.75q-.2-.35.075-.612t.625-.063l7.975 5.075q.475.3.475.85t-.475.85z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        {content.map((obj, index) => {
          return (
            <SideCard
              title={obj.title}
              paragraph={obj.paragraph}
              button={obj.button}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Library;
