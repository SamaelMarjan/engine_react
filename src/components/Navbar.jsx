import React from 'react';

import Img from '../assets/Figmateam.png';

const Navbar = () => {
  return (
    <div className='w-[90%] h-[80px] m-auto flex items-end'>
      <img className='w-[255.2px] h-[24.64px]' src={Img} alt='logo' />
    </div>
  );
}

export default Navbar;