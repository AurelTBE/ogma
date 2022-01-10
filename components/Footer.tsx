import React from 'react'

interface Props {
    
}

const Footer = (props: Props) => {
    return (
        <footer className="flex items-center justify-center w-full py-10">
            <div className="flex p-10 m-5 neue">
                <a
                    className="flex items-center justify-center"
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Créé par Aurélien T.
                    <img src="/ogma.svg" alt="Vercel Logo" className="h-4 ml-2" />
                </a>
            </div>

        </footer>
    )
}

export default Footer
