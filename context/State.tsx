import React, { createContext, useState } from 'react'

interface ContextState {
    transcript: string,
    handleTranscript: any,
    commandUrl: string, 
    handleUrl: any,
    activePage: string,
    handleActivePage: any
}

export const State = createContext({} as ContextState)


export const StateProvider = ({children}: any) => {
    const [activePage, setActivePage] = useState<string>("")
    const [transcript, setTranscript] = useState<string>("")
    const [commandUrl, setCommandUrl] = useState<string>("")

    const handleActivePage = (currentPage: string) => {
        setActivePage(currentPage)
    }

    const handleTranscript = (speech: string) => {
        setTranscript(speech)
    }

    const handleUrl = (voiceurl: string) => {
        setCommandUrl(voiceurl)
    }

    return (
        <State.Provider value={{ transcript, handleTranscript, commandUrl, handleUrl, activePage, handleActivePage }}>
            {children}
        </State.Provider>
    )
}

