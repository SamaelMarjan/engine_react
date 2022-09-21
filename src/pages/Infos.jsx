import React from 'react';

import Img from '../assets/image 8.png';
import Img2 from '../assets/image 9.png';
import Img3 from '../assets/image 10.png';
import Img4 from '../assets/Group 12.png';

const Infos = () => {
  return (
    <>
      <div className='w-[100%] h-[100%] bg-[#10181B]'>
        <div className='w-[90%] h-[700px] m-auto grid grid-cols-2 items-center justify-center'>
          <div className='w-[500px] h-[230px] flex mt-[150px]'>
            <p className='p-10 w-[521px] h-[68px] text-xl font-medium tracking-widest'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
          </div>
          <div className='w-[500px] h-[230px]'>
            <img className='p-4' src={Img} alt='im' />
          </div>
          <div className='w-[500px] h-[230px] border-[#828282] border hover:border-[#FF0000] mb-[100px] flex items-center'>
            <div className='w-[80%] m-auto'>
              <p className='w-[100%] h-[43px] text-xl font-medium tracking-widest'>Lorem ipsum dolor sit amet</p>
              <p className='w-[100%] h-[118px] text-base font-normal text-[#666666] tracking-widest'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse</p>
            </div>
          </div>
          <div className='w-[500px] h-[230px] border-[#828282] border hover:border-[#FF0000] mb-[100px] flex items-center'>
            <div className='w-[80%] m-auto'>
              <p className='w-[100%] h-[43px] text-xl font-medium tracking-widest'>Lorem ipsum dolor sit amet</p>
              <p className='w-[100%] h-[118px] text-base font-normal text-[#666666] tracking-widest'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse</p>
            </div>
          </div>
        </div>
      </div>
      <div className='w-[100%] h-[800px] flex flex-wrap  md:relative'>
        <div className='w-[40%] h-[400px] bg-white'>
          <img className='w-[100%] h-[100%]' src={Img2} alt='im' />
        </div>
        <div className='w-[60%] h-[400px] flex items-center justify-center'>
          <div className='w-[80%]'>
            <p className='uppercase text-xl font-normal text-[#BDBDBD] w-[100%] h-[68px] tracking-widest'>
              Duis aute 
              <span className='block'>irure dolor in reprehenderit</span>
            </p>
            <p className='font-medium text-3xl w-[100%] h-[102px] tracking-widest'>
              139,222 Lorem 
              <span className='block'>ipsum dolor sit amet 4 Turbo</span>
            </p>
            <p className='w-[450px] h-[100%] font-normal text-[#666666] text-xl tracking-widest'>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
        <div className='w-[40%] h-[400px]'>
          <img className='w-[100%] h-[100%]' src={Img4} alt='im' />
        </div>
        <div className='w-[60%] h-[400px]'>
          <img className='w-[100%] h-[100%]' src={Img3} alt='im' />
        </div>
        <div className='md:absolute top-[50%]  w-[40%] h-[400px] flex items-center justify-center'>
          <div className='w-[70%]'>
            <p className='w-[100%] h-[43px] font-medium text-2xl tracking-widest'>Lorem ipsum dolor sit amet</p>
            <p className='w-[100%] h-[78px] font-normal text-base tracking-widest'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
            <button className='bg-black w-[350px] h-[70px] rounded-full'>
              <a href='a'>Lorem ipsum dolor</a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Infos;