import React, { useContext } from "react";
import Link from 'next/link'
import { State } from "../context/State"

function Nav() {
  const { activePage }: any = useContext(State)
  
  return (
    <div className="flex">
      <nav className="flex w-full py-5 pl-4 neuenav">
        <Link href="/">
          <img src="/ogma.svg" alt="Ogma Logo" className="mx-3 sm:mx-6 w-11" />
        </Link>
        <Link href="/">
          <a
            className={`${activePage == "Accueil" && "activeneue" } text-stone-800 hoverneue px-3 mx-3 py-2 rounded-md text-sm font-medium`}
          >
            Accueil
          </a>
        </Link>
        <Link href="/actus">
          <a
            className={`${activePage == "Actus" && "activeneue" } text-stone-800 hoverneue px-3 mx-3 py-2 rounded-md text-sm font-medium`}
          >
            Actus
          </a>
        </Link>
        <Link href="/projets">
          <a
            className={`${activePage == "Projets" && "activeneue" } "text-stone-800 hoverneue px-3 mx-3 py-2 rounded-md text-sm font-medium`}
          >
            Projets
          </a>
        </Link>
      </nav>
    </div>
  );
}

export default Nav;
