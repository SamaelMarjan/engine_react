import React from 'react';

import Img from '../assets/Figmateam.png';

const Footer = () => {
  return (
    <>
      <div className=' w-[100%] h-[100%] flex'>
        <div className='w-[100%] h-[100%] mt-10 flex flex-col items-center justify-center md:flex md:flex-row md:justify-between md:items-start'>
          <div className='mb-[20px]'>
            <img className='w-[255.2px] h-[24.64px]' src={Img} alt='logo' />
          </div>
          <div className='w-[114px] h-[152px] items-center justify-center md:items-start md:justify-start text-sm-400 text-[#666666] tracking-widest flex flex-col'>
            <a href='a'>quis</a>
            <a href='b'>nostrud</a>
            <a href='c'>exercitation</a>
            <a href='d'>ullamco</a>
          </div>
          <div className='w-[114px] h-[152px] items-center justify-center md:items-start md:justify-start text-sm-400 text-[#666666] tracking-widest flex flex-col'>
            <a href='a'>quis</a>
            <a href='b'>nostrud</a>
            <a href='c'>exercitation</a>
            <a href='d'>ullamco</a>
          </div>
          <div className='w-[100%] h-[200px] md:h-[149px] md:w-[300px] flex justify-center items-center md:items-start md:justify-start text-sm-400 text-[#666666] tracking-widest'>
            <p className='flex items-center justify-center'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;