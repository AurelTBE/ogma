import Head from 'next/head'
import { useContext } from "react"
import { State } from "../context/State"

export default function Home() {
    const { transcript }: any = useContext(State)

    return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>Text To Speech - Actus</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-row items-center justify-center w-full flex-1 px-20 text-center">
      <div className="flex flex-col flex-1 col-span-full items-center justify-center contentglass">
          <div className="flex text-stone-800 p-10 text-2xl">
            Actus
          </div>
          <div className="flex flex-row flex-1 pb-10">
            Transcription : {transcript}
          </div>
        </div>
      </main>
      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
        </a>
      </footer>
    </div>
  )
}
