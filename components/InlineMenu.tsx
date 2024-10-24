'use client';

import Menu from './Menu';

const InlineMenu = () => (
  <div className="hidden md:flex justify-center lg:hidden w-full">
    <Menu inline />
  </div>
);

export default InlineMenu;
