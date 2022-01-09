import { useContext, useEffect } from "react"
import { State } from "../context/State"

export default function Home() {
  const { transcript, handleActivePage }: any = useContext(State)

  useEffect(() => {
    handleActivePage("Projets")
  }, [])

  return (
    <div className="flex flex-col items-center justify-center">
      <main className="flex flex-row justify-center w-full px-5 pt-12 text-center">
        <div className="flex flex-col col-span-full items-center justify-center px-4 sm:px-20 neue">
          <div className="flex text-red-600 p-20 text-2xl">
            Projets
          </div>
          <img src="/projects.svg" alt="Projets" className="w-[50vw]" />
          <div className="flex flex-row flex-1 py-20">
            Transcription : {transcript}
          </div>
        </div>
      </main>
    </div>
  )
}
