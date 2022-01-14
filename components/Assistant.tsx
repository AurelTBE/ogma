import React, { useState, useEffect } from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import { useContext } from "react"
import { State } from "../context/State"
import { useRouter } from 'next/router'

interface IProps {
    handleTranscript: (transc:string) => void
    handleUrl: (url:string) => void
    landing: boolean
}

const Assistant = () => {
    const router = useRouter()
    const [redirectUrl, setredirectUrl] = useState("")
    const { handleTranscript, handleUrl, landing }: IProps = useContext(State)
    const [textToRead, setTextToRead] = useState(landing ? `Bonjour, je suis Ogma, je peux t'aider à naviguer sur ce site. Demande moi de naviguer sur une page.` : '');

    const commands = [
        {
            command: ["*", "va sur *", "va sur les *", "Aller sur *", "Aller à *", "Ouvrir *", "Accéder à *", "Retourner sur *", 
            "Retourner a *", "Retour à *", "Retourne sur *", "Retourne à * ", "retourne à *", "Go sur *", "Clic sur *", 
            "Clic *", "Sélectionner *", "Sélectionne *", "Navigue sur *", "Navigue vers *", "Navigue à *", "Sélection *", 
            "Montre *", "Montrer *", "Montre les *", "Montre-moi *", "Montre-moi les *", "Affiche *", "Affiche-moi *", 
            "Affiche les *", "Affiche-moi les *", "amène-moi sur *", "amène-moi sur les *", "amène-moi à *", 
            "ramène-moi sur *", "ramène-moi à *", "retour *"],
            callback: (redirectPage: string) => (
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
            callback: ({ resetTranscript }: {resetTranscript: () => void}) => resetTranscript()
        }
    ]
    const { transcript } = useSpeechRecognition({commands})

    const pages = ["accueil", "Accueil", "l'accueil", "actus", "actu", "Actu", "Actus", "l'actu", "actualité", "actualités", "projets", "projet", "les projets", "stop"]

    const urls: {[key: string]: string} = {
        accueil: "/",
        Accueil: "/",
        "l'accueil": "/",
        actus: "/actus",
        actu: "/actus",
        Actu: "/actus",
        Actus: "/actus",
        "l'actu": "/actus",
        actualité: "/actus",
        actualités: "/actus",
        projets: "/projets",
        projet: "/projets",
        "les projets": "/projets",
        stop: "#"
    }

    if(!SpeechRecognition.browserSupportsSpeechRecognition) {
        return null
    }

    if(redirectUrl) {
        if(pages.includes(redirectUrl)) {
            router.push(urls[redirectUrl])
            handleTranscript("")
            setredirectUrl("")
        } else {
            router.push("/error")
            handleTranscript("")
            setredirectUrl("")
        }
    }

    const synth = window.speechSynthesis;
    const voices = synth.getVoices()
    const dial = new SpeechSynthesisUtterance(textToRead);
    dial.voice = voices[2]

    const handleAssistant = async () => {
        SpeechRecognition.stopListening()
        synth.speak(dial)
        dial.onend = () => SpeechRecognition.startListening({ continuous: true })
    }

    useEffect(() => {
        handleTranscript(transcript)
        handleUrl(redirectUrl)
    }, [transcript])

    return (
        <>      
            <div className="fixed bottom-0 right-0 p-5 m-2 text-gray-900 rounded z-999 btnglass hover:cursor-pointer hover:text-gray-700">
                <button onClick={handleAssistant}>
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