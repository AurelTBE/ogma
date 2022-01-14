import { useState, useEffect, useContext } from 'react'
import { State } from "../context/State"

interface IProps {
    landing: boolean, 
    handleLanding: (land: boolean) => void
  }

const Reader = () => {
    const { landing, handleLanding }: IProps = useContext(State)
    const [textToRead, setTextToRead] = useState(landing ? `Bonjour, je suis Ogma, je peux t'aider à naviguer sur ce site. Clique sur le bouton en bas, et demande moi de naviguer sur une page.` : '');
    const synth = window.speechSynthesis;
    const voices = synth.getVoices()
    const dial = new SpeechSynthesisUtterance(textToRead);
    dial.voice = voices[2]
    
    useEffect(() => {
        synth.speak(dial);
        console.log(dial)
        handleLanding(false)
    }, [textToRead])

    return null
}

export default Reader