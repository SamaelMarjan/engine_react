import React from 'react';

import Navbar from './components/Navbar';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <div className='w-[100%] h-[100%] relative'>
      <div className='w-[90%] h-[100%] m-auto'>
        <Navbar />
        <Main />
        <Footer />
      </div>
    </div>
    </>
  );
}

export default App;
