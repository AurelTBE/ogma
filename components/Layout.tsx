import React from 'react'
import Assistant from './Assistant'
import Nav from './Nav'

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