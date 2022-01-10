import React, { createContext, useState } from 'react'

interface ContextState {
    transcript: string,
    handleTranscript: any,
    commandUrl: string, 
    handleUrl: any,
    activePage: string,
    handleActivePage: any,
    landing: boolean,
    handleLanding: any
}

export const State = createContext({} as ContextState)


export const StateProvider = ({children}: any) => {
    const [activePage, setActivePage] = useState<string>("")
    const [transcript, setTranscript] = useState<string>("")
    const [commandUrl, setCommandUrl] = useState<string>("")
    const [landing, setLanding] = useState<boolean>(true)

    const handleActivePage = (currentPage: string) => {
        setActivePage(currentPage)
    }

    const handleTranscript = (speech: string) => {
        setTranscript(speech)
    }

    const handleUrl = (voiceurl: string) => {
        setCommandUrl(voiceurl)
    }

    const handleLanding = (landstatus: boolean) => {
        setLanding(landstatus)
    }

    return (
        <State.Provider value={{ transcript, handleTranscript, commandUrl, handleUrl, activePage, handleActivePage, landing, handleLanding }}>
            {children}
        </State.Provider>
    )
}

