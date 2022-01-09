import React from 'react'
import dynamic from "next/dynamic";
import 'regenerator-runtime/runtime'
import Nav from './Nav'
import Assistant from './Assistant';
import Footer from './Footer';
import HeadApp from './HeadApp';


const VoiceSynth = dynamic(
    () => {
      return import("../utils/VoiceSynth");
    },
    { ssr: false }
  );
  
interface Props {
    
}

const Layout = ({ children }: any) => {
    return (
      <div className="neuebg">
        <HeadApp />
        <Nav />
        <Assistant />
        <VoiceSynth />
        {children}
        <Footer />
      </div>
    )
}

export default Layout