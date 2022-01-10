import React from 'react'
import dynamic from "next/dynamic";
import 'regenerator-runtime/runtime'
import Nav from './Nav'
import Footer from './Footer';
import HeadApp from './HeadApp';

const Assistant = dynamic(() => import('./Assistant'), {
  ssr: false
})

//import Reader from '../utils/Reader'
const Reader = dynamic(() => import('../utils/Reader'), {
  ssr: false
})
  
interface Props {
    
}

const Layout = ({ children }: any) => {
    return (
      <div className="neuebg">
        <HeadApp />
        <Nav />
        <Assistant />
        <Reader />
        {children}
        <Footer />
      </div>
    )
}

export default Layout