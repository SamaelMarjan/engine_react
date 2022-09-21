import React from 'react';

import Img from '../assets/image 8.png';

const Infos = () => {
  return (
    <div className='w-[100%] h-[700px] bg-[#10181B]'>
      <div className='w-[90%] h-[650px] m-auto grid grid-cols-2 items-center'>
        <div className='w-[500px] h-[230px] flex mt-[150px]'>
          <p className='p-10 w-[521px] h-[68px] text-xl font-medium tracking-widest'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
        </div>
        <div className='w-[500px] h-[230px]'>
          <img className='p-4' src={Img} alt='im' />
        </div>
        <div className='w-[500px] h-[230px]'>
          <p>Lorem ipsum dolor sit amet</p>
          <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse</p>
        </div>
        <div className='w-[500px] h-[230px]'>
          <p>Lorem ipsum dolor sit amet</p>
          <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse</p>
        </div>
      </div>
    </div>
  );
}

export default Infos;