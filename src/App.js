import React from 'react';

import Navbar from './components/Navbar';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <div className='w-[100%] h-[100%] relative'>
        <Navbar />
        <Main />
        <Footer />
    </div>
    </>
  );
}

export default App;
