import React from 'react';
import Button, { BaseButton } from '../baseComponents/Button';

const SideCard = ({ title, paragraph, button }) => {
  console.log(title);

  return (
    <div className="bg-nightlight flex mx-2 flex-col gap-2 rounded-lg px-2 py-4">
      <h2 className="text-xl font-semibold text-white">{title}</h2>
      <p className="text-sm text-white">{paragraph}</p>
      <div>
        <BaseButton title={button} extraAttributes={'font-semibold hover:bg-gray-200'}></BaseButton>
      </div>
    </div>
  );
};

export default SideCard;
