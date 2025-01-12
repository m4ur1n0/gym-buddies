// src/pages/_app.js
import '../../styles/globals.css';  // Import global CSS file
import React from 'react';
import NavBar from '@/components/NavBar';

function MyApp({ Component, pageProps }) {
  return (
    <div className="app-total flex flex-col justify-start items-center w-full h-screen bg-gray-100">

      {/* Wrapper with iPhone-like aspect ratio */}
      <div className="relative w-[430px] h-[932px] aspect-[2.17] bg-white shadow-lg overflow-hidden border flex flex-col">
        <Component {...pageProps} />


        <NavBar />


      </div>



    </div>
    );
}

export default MyApp;
