import React from 'react';

import Home from '../pages/Home';
import Info from '../pages/Info';
import Infos from '../pages/Infos';

const Main = () => {
  return (
    <div className='w-[100%] h-[100%]'>
      <Home />
      <Info />
      <Infos />
    </div>
  );
}

export default Main;