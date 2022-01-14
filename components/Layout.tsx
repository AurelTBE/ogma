import React, { ReactElement } from 'react'
import dynamic from "next/dynamic";
import 'regenerator-runtime/runtime'
import Nav from './Nav'
import Footer from './Footer';
import HeadApp from './HeadApp';

const Assistant = dynamic(() => import('./Assistant'), {
  ssr: false
})

const Reader = dynamic(() => import('../utils/Reader'), {
  ssr: false
})

const Layout = ({ children }: {children:ReactElement}) => {
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