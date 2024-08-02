import React from 'react';

const DEFAULT_VALUES = {
  title: '',
  color: 'bg-white',
  onClick: () => {},
  disabled: false,
  extraAttributes: '',
  textColor: 'text-black',
  startIcon: <></>,
  rounded: 'rounded-2xl',
  hover: '',
};

function Button({
  title,
  color,
  onClick,
  disabled,
  extraAttributes,
  textColor,
  startIcon,
  rounded,
  hover,
}) {
  return (
    <button
      className={`flex items-center justify-center gap-2 px-4 py-1 text-sm ${rounded} ${color} ${textColor} ${disabled ? 'bg-slate-500 text-white' : ''} ${extraAttributes}`}
      disabled={disabled}
      onClick={onClick}
    >
      {startIcon}
      <span>{title}</span>
    </button>
  );
}

export default Button;

export const BaseButton = (props) => {
  const mergedProps = { ...DEFAULT_VALUES, ...props };
  return <Button {...mergedProps} />;
};
