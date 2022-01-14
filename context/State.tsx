import React, { createContext, ReactChildren, useState } from 'react'

interface ContextState {
    transcript: string,
    handleTranscript: (transc:string) => void,
    commandUrl: string, 
    handleUrl: (url:string) => void,
    activePage: string,
    handleActivePage: (page:string) => void,
    landing: boolean,
    handleLanding: (land:boolean) => void
}

export const State = createContext({} as ContextState)


export const StateProvider = ({children}: {children:ReactChildren}) => {
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

