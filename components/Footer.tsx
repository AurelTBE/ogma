import React from 'react'

interface Props {
    
}

const Footer = (props: Props) => {
    return (
        <footer className="flex items-center justify-center w-full py-10">
            <div className="flex p-10 m-5 neue">
                <a
                    className="flex items-center justify-center"
                    href="/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Créé par Aurélien T.
                    <img src="/ogma.svg" alt="Ogma Logo" className="h-4 ml-2" />
                </a>
            </div>

        </footer>
    )
}

export default Footer
