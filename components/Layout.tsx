import React from 'react'
import dynamic from "next/dynamic";
import 'regenerator-runtime/runtime'
import Nav from './Nav'
import Assistant from './Assistant';
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
        <div className="mainbg w-full h-screen">
            <Nav />
            <Assistant />
            <VoiceSynth />
            {children}
        </div>
    )
}

export default Layout