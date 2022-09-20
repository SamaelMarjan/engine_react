import React from 'react';

import Img from '../assets/image 4.png';
import Im2 from '../assets/image 5.png';

const Home = () => {
  return (
    <div className='w-[100%] h-[100%] flex flex-col'>
      <div className='w-[90%] h-[700px] md:h-[350px] m-auto'>
        <div className=''>
          <p className='w-[173px] h-[60px] mt-10 text-2xl font-normal text-[#666666] tracking-widest'>Lorem ipsum</p>
          <p className='w-[260px] h-[95px] text-7xl font-normal'>Engine</p>
          <p className='w-[451PX] h-[102px] text-xl font-normal text-[#666666] tracking-widest'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
        </div>
        <img className='md:absolute w-[500px] md:w-[750px] h-[200px] md:h-[450px] right-[0] top-[60px]' src={Img} alt='engine' />
      </div>
      <div className='bg-[#10181B] w-[100%] h-[900px] md:h-[450px] '>
        <div className='w-[90%] h-[100%] m-auto  flex flex-col md:flex-row items-center '>
          <div className='w-[100%] md:w-[40%] h-[50%] md:h-[100%] flex items-baseline'>
            <img className='w-[450px] h-[350px] left-[100px] top-[530px] md:absolute' src={Im2} alt='logo' />
          </div>
          <div className='w-[60%] h-[50%] md:h-[100%]'>
            <div className='w-[100%] md:w-[600px] h-[100%] md:h-[200px] md:mt-[180px] ml-[50px]'>
              <p className='w-[100%] md:w-[500px] h-[100px] text-[#fff] text-xl font-medium tracking-widest'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
              <p className='w-[100%] md:w-[100%] h-[100%] font-normal text-xl text-[#666666] tracking-widest'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;