import React, { useState, useEffect } from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import { useContext } from "react"
import { State } from "../context/State"
import { useRouter } from 'next/router'

interface Props {
    
}

const Assistant = (props: Props) => {
    const router = useRouter()
    const [redirectUrl, setredirectUrl] = useState("")
    const { handleTranscript, handleUrl }: any = useContext(State)
    const commands = [
        {
            command: ["va sur *", "Aller sur *", "Aller à *", "Ouvrir *", "Accéder à *", "Retourner sur *", "Retourner a *", "Retour à *", "Retourne sur *", "Retourne à * ", "retourne à *", "Go sur *", "Clic sur *", "Clic *", "Sélectionner *", "Sélectionne *", "Sélection *"],
            callback: (redirectPage: any) => (
                setredirectUrl(redirectPage),
                handleUrl(redirectPage)
            )
        },
        {
            command: 'stop',
            callback: () => SpeechRecognition.stopListening()
        },
        {
            command: 'annuler',
            callback: () => SpeechRecognition.abortListening()
        },
        {
            command: 'effacer',
            callback: ({ resetTranscript }: any) => resetTranscript()
        }
    ]
    const { transcript } = useSpeechRecognition({commands})

    const pages = ["accueil", "Accueil", "l'accueil", "actus", "actu", "projets", "projet"]

    const urls: {[key: string]: string} = {
        accueil: "/",
        Accueil: "/",
        "l'accueil": "/",
        actus: "/actus",
        actu: "/actus",
        projets: "/projets",
        projet: "/projets"
    }

    if(!SpeechRecognition.browserSupportsSpeechRecognition) {
        return null
    }

    if(redirectUrl) {
        if(pages.includes(redirectUrl)) {
            router.push(urls[redirectUrl])
            setredirectUrl("")
        } else {
            router.push("/error")
            setredirectUrl("")
        }
    }

    const handleListening = () => {
        SpeechRecognition.startListening({ continuous: true })
    }


    useEffect(() => {
        handleTranscript(transcript)
        handleUrl(redirectUrl)
    }, [transcript])

    return (
        <>      
            <div className="fixed bottom-0 right-0 p-5 z-999 rounded m-2 btnglass hover:cursor-pointer text-gray-900 hover:text-gray-700">
                <button onClick={handleListening}>
                    <div className="flex items-center justify-center">
                        <img src="/ogma.svg" alt="Ogma" className="w-[30vw] sm:w-32 p-6" />
                        <div className="flex">
                            Bonjour, je suis Ogma.
                            Cliquez ici pour naviguer par la voix
                        </div>
                    </div>

                </button>
            </div>
        </>
    )
}

export default Assistant