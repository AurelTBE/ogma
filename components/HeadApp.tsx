import React from 'react'
import Head from 'next/head'
import { useContext } from "react"
import { State } from "../context/State"

interface Props {
    
}

const HeadApp = (props: Props) => {
    const { activePage }: any = useContext(State)
    return (
        <Head>
            <title>Ogma - {activePage}</title>
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="manifest" href="/site.webmanifest" />
            <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
            <meta name="msapplication-TileColor" content="#00aba9" />
            <meta name="theme-color" content="#ffffff" />
        </Head>
    )
}

export default HeadApp