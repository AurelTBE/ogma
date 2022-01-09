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
            <title>Text To Speech - {activePage}</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
    )
}

export default HeadApp