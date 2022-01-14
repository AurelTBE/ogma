import { useContext, useEffect } from "react"
import { State } from "../context/State"

interface IProps {
  commandUrl: string
  handleActivePage: (page: string) => void
}

export default function Error() {
    const { commandUrl, handleActivePage }: IProps = useContext(State)

    useEffect(() => {
      handleActivePage("Erreur")
    }, [])

    return (
    <div className="flex flex-col items-center justify-center">
      <main className="flex flex-row justify-center w-full px-5 pt-12 text-center">
        <div className="flex flex-col items-center justify-center px-4 col-span-full sm:px-20 neue">
          <div className="flex p-20 text-2xl text-stone-800">
           Page Introuvable
          </div>
          <img src="/error.svg" alt="Erreur" className="w-[50vw]" />
          <div className="flex flex-row flex-1 py-20">
            Impossible de trouver la page "{commandUrl}"
          </div>
        </div>
      </main>
    </div>
  )
}
