import React from 'react';
import NavLinks from './side-navbar/NavLinks';
import Library from './side-navbar/Library';

function Sidebar() {
  return (
    <div className="flex flex-col gap-2 h-[90%] w-[23%] bg-black p-2">
      <NavLinks />
      <Library />
    </div>
  );
}

export default Sidebar;
