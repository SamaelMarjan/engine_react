import React from 'react';

import Img from '../assets/Figmateam.png';

const Footer = () => {
  return (
    <>
      <div className='bg-white w-[100%] h-[200px] flex items-center justify-center '>
        <div className='w-[100%] h-[100%] mt-10 flex flex-col items-center justify-center md:flex md:flex-row md:justify-between md:items-start'>
          <div>
            <img className='w-[255.2px] h-[24.64px]' src={Img} alt='logo' />
          </div>
          <div className='w-[114px] h-[152px] text-sm-400 text-[#666666] tracking-widest flex flex-col'>
            <a href='#'>quis</a>
            <a href='#'>nostrud</a>
            <a href='#'>exercitation</a>
            <a href='#'>ullamco</a>
          </div>
          <div className='w-[114px] h-[152px] text-sm-400 text-[#666666] tracking-widest flex flex-col'>
            <a href='#'>quis</a>
            <a href='#'>nostrud</a>
            <a href='#'>exercitation</a>
            <a href='#'>ullamco</a>
          </div>
          <div>flex3</div>
        </div>
      </div>
    </>
  );
}

export default Footer;