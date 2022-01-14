import { useContext, useEffect } from "react"
import { State } from "../context/State"

interface IProps {
  transcript: string, 
  handleActivePage: (page: string) => void
}

export default function Actus() {
    const { transcript, handleActivePage }: IProps = useContext(State)

    useEffect(() => {
      handleActivePage("Actus")
    }, [])

    return (
    <div className="flex flex-col items-center justify-center">
      <main className="flex flex-row justify-center w-full px-5 pt-12 text-center">
        <div className="flex flex-col items-center justify-center px-4 col-span-full sm:px-20 neue">
          <div className="flex p-20 text-2xl text-cyan-600">
            Actus
          </div>
          <img src="/news.svg" alt="Actus" className="w-[50vw]" />
          <div className="flex flex-row flex-1 py-20">
            {transcript && `Transcription : ${transcript}`}
          </div>
        </div>
      </main>
    </div>
  )
}
