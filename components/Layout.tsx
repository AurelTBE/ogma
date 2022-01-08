import React from 'react'
import 'regenerator-runtime/runtime'
import Nav from './Nav'
import Assistant from './Assistant';

interface Props {
    
}

const Layout = ({ children }: any) => {
    return (
        <div className="mainbg w-full h-screen">
            <Nav />
            <Assistant />
            {children}
        </div>
    )
}

export default Layout