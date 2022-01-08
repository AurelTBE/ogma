import React from 'react'
import Nav from './Nav'
interface Props {
    
}

const Layout = ({ children }: any) => {
    return (
        <>
            <Nav />
            <main>{children}</main>
        </>
    )
}

export default Layout