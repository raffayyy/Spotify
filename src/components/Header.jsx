import React from 'react';
import { BaseButton } from './baseComponents/Button';

function Header() {
  return (
    <div className="flex flex-col gap-3 rounded-t-xl bg-transparent px-4 py-2">
      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          <button className="rounded-full bg-black p-1 opacity-80">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="white"
              viewBox="0 0 24 24"
            >
              <path
                fill="current"
                d="m9.55 12l7.35 7.35q.375.375.363.875t-.388.875t-.875.375t-.875-.375l-7.7-7.675q-.3-.3-.45-.675t-.15-.75t.15-.75t.45-.675l7.7-7.7q.375-.375.888-.363t.887.388t.375.875t-.375.875z"
              />
            </svg>
          </button>
          <button className="rounded-full bg-black p-1 opacity-80">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path
                fill="white"
                d="m14.475 12l-7.35-7.35q-.375-.375-.363-.888t.388-.887t.888-.375t.887.375l7.675 7.7q.3.3.45.675t.15.75t-.15.75t-.45.675l-7.7 7.7q-.375.375-.875.363T7.15 21.1t-.375-.888t.375-.887z"
              />
            </svg>
          </button>
        </div>
        <div className="flex gap-2">
          <BaseButton
            title={'Explore Premium'}
            color={'bg-white'}
            textColor={'text-black'}
            extraAttributes={'text-sm font-semibold hover:bg-gray-200'}
          ></BaseButton>
          <BaseButton
            title={'Install App'}
            startIcon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
              >
                <path
                  fill="white"
                  d="M8 17h8q.425 0 .713-.288T17 16t-.288-.712T16 15H8q-.425 0-.712.288T7 16t.288.713T8 17m3-6.85l-.9-.875Q9.825 9 9.413 9t-.713.3q-.275.275-.275.7t.275.7l2.6 2.6q.3.3.7.3t.7-.3l2.6-2.6q.275-.275.287-.687T15.3 9.3q-.275-.275-.687-.288t-.713.263l-.9.875V7q0-.425-.288-.712T12 6t-.712.288T11 7zM12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"
                />
              </svg>
            }
            color={'bg-black'}
            textColor={'text-white'}
            extraAttributes={'text-sm font-semibold opacity-80'}
          ></BaseButton>
          <button className="rounded-full bg-black p-1 opacity-80">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path
                fill="white"
                d="M5 19q-.425 0-.712-.288T4 18t.288-.712T5 17h1v-7q0-2.075 1.25-3.687T10.5 4.2v-.7q0-.625.438-1.062T12 2t1.063.438T13.5 3.5v.7q2 .5 3.25 2.113T18 10v7h1q.425 0 .713.288T20 18t-.288.713T19 19zm7 3q-.825 0-1.412-.587T10 20h4q0 .825-.587 1.413T12 22"
              />
            </svg>
          </button>
          <button className="rounded-full bg-black p-1 opacity-80">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path
                fill="white"
                d="M5.85 17.1q1.275-.975 2.85-1.537T12 15t3.3.563t2.85 1.537q.875-1.025 1.363-2.325T20 12q0-3.325-2.337-5.663T12 4T6.337 6.338T4 12q0 1.475.488 2.775T5.85 17.1M12 13q-1.475 0-2.488-1.012T8.5 9.5t1.013-2.488T12 6t2.488 1.013T15.5 9.5t-1.012 2.488T12 13m0 9q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center justify-start gap-2">
          <BaseButton title={'All'}></BaseButton>
          <BaseButton
            title={'Music'}
            color={'bg-black'}
            textColor={'text-white'}
            extraAttributes={'text-sm opacity-50'}
          ></BaseButton>
        </div>
        <BaseButton
          title={'Play My Playlist'}
          color={'bg-black'}
          textColor={'text-white'}
          extraAttributes={'text-sm opacity-50'}
        ></BaseButton>
      </div>
    </div>
  );
}

export default Header;
