import React from 'react'
import Speech from 'react-speech';

interface Props {
    
}

const VoiceSynth = (props: Props) => {
    return (
        <div>
            <Speech 
                text="I have altered my voice" 
                voice="Google UK English Female" />
        </div>
    )
}

export default VoiceSynth