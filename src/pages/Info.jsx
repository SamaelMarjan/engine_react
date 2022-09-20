import React from 'react';

import Img from '../assets/image 6.png';

const Info = () => {
  return (
    <div className='w-[100%] h-[600px] md:h-[400px]'>
        <div className='w-[90%] h-[100%] m-auto flex flex-col md:flex-row items-center justify-center gap-[60px]'>
            <div className='text-right'>
                <p className='w-[500px] h-[80px] text-[#fff] text-xl font-medium tracking-widest'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                <p className='w-[500px] h-[140px] text-[#666666] text-xl font-normal tracking-widest'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse</p>
            </div>
            <img className='w-[550px] h-[300px]' src={Img} alt='im' />
        </div>
    </div>
  );
}

export default Info;