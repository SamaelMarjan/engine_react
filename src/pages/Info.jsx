import React from 'react';

import Img from '../assets/image 6.png';
import Img2 from '../assets/image 7.png';

const Info = () => {
  return (
    <>
    <div className='w-[100%] h-[600px] md:h-[400px]'>
        <div className='w-[90%] h-[100%] m-auto flex flex-col md:flex-row items-center justify-center gap-[60px]'>
            <div className='text-right'>
                <p className='w-[500px] h-[80px] text-[#fff] text-xl font-medium tracking-widest'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                <p className='w-[500px] h-[140px] text-[#666666] text-xl font-normal tracking-widest'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse</p>
            </div>
            <img className='w-[550px] h-[300px]' src={Img} alt='im' />
        </div>
    </div>

    <div className='w-[90%] h-[500px] m-auto flex flex-row'>
        <div className='w-[40%] h-[100%]'>
            <img className='md:absolute left-0 w-[450px] h-[600px]' src={Img2} alt='im' />
        </div>
        <div className='w-[60%] h-[100%] flex flex-row'>
            <div className='w-[55%] h-[100%] flex flex-col'>
                <div className='w-[300px] h-[60px]'>
                    <p className='text-4xl text-[#fff] font-medium tracking-widest'>Lorem ipsum </p>
                </div>
                <div className='w-[382px] h-[428px] flex flex-col gap-[15px]'>
                    <p className='w-[167px] h-[26px] font-medium text-xl text-[#828282] tracking-widest'>Lorem ipsum </p>
                    <p className='w-[230px] h-[26px] font-medium text-xl text-[#828282] tracking-widest'>Ut enim ad minim</p>
                    <p className='w-[306px] h-[26px] font-medium text-xl text-[#828282] tracking-widest'>Lorem Ut enim ad minim</p>
                    <p className='w-[382px] h-[26px] font-medium text-xl text-[#828282] tracking-widest'>Lorem ipsum Ut enim ad minim</p>
                    <p className='w-[242px] h-[26px] font-medium text-xl text-[#828282] tracking-widest'>Lorem ipsum ipsum</p>
                    <p className='w-[230px] h-[26px] font-medium text-xl text-[#828282] tracking-widest'>Ut enim ad minim</p>
                    <p className='w-[382px] h-[26px] font-medium text-xl text-[#828282] tracking-widest'>Lorem ipsum Ut enim ad minim</p>
                    <p className='w-[230px] h-[26px] font-medium text-xl text-[#828282] tracking-widest'>Ut enim ad minim</p>
                </div>
            </div>
            <div className='w-[45%] h-[100%] flex flex-col'>
                <div className='w-[300px] h-[60px]'>
                    <p className='text-4xl text-[#fff] font-medium tracking-widest'>Lorem ipsum</p>
                </div>
                <div className='w-[382px] h-[428px] flex flex-col gap-[15px]'>
                    <p className='w-[167px] h-[26px] font-medium text-xl text-[#828282] tracking-widest'>Lorem ipsum</p>
                    <p className='w-[230px] h-[26px] font-medium text-xl text-[#828282] tracking-widest'>Ut enim ad minim</p>
                    <p className='w-[306px] h-[26px] font-medium text-xl text-[#828282] tracking-widest'>Lorem Ut enim ad minim</p>
                    <p className='w-[382px] h-[26px] font-medium text-xl text-[#828282] tracking-widest'>Lorem ipsum Ut enim ad</p>
                    <p className='w-[242px] h-[26px] font-medium text-xl text-[#828282] tracking-widest'>Lorem ipsum ipsum</p>
                </div>
            </div>
        </div>
    </div>
    </>
  );
}

export default Info;