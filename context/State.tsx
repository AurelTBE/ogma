import React, { createContext, useState } from 'react'

interface ContextState {
    transcript: string,
    handleTranscript: any
}

export const State = createContext({} as ContextState)


export const StateProvider = ({children}: any) => {
    const [transcript, setTranscript] = useState<string>("")

    const handleTranscript = (speech: string) => {
        setTranscript(speech)
    }
    return (
        <State.Provider value={{ transcript, handleTranscript }}>
            {children}
        </State.Provider>
    )
}

