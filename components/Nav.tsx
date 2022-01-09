import React, { useContext } from "react";
import Link from 'next/link'
import { State } from "../context/State"

function Nav() {
  const { activePage }: any = useContext(State)
  
  return (
    <div className="flex">
      <nav className="w-full neuenav py-5 pl-4">
        <Link href="/">
          <a
            className={`${activePage == "Accueil" && "activeneue" } text-stone-800 hover:bg-gray-700 hover:text-white px-3 mx-3 py-2 rounded-md text-sm font-medium`}
          >
            Accueil
          </a>
        </Link>
        <Link href="/actus">
          <a
            className={`${activePage == "Actus" && "activeneue" } text-stone-800 hover:bg-gray-700 hover:text-white px-3 mx-3 py-2 rounded-md text-sm font-medium`}
          >
            Actus
          </a>
        </Link>
        <Link href="/projets">
          <a
            className={`${activePage == "Projets" && "activeneue" } "text-stone-800 hover:bg-gray-700 hover:text-white px-3 mx-3 py-2 rounded-md text-sm font-medium`}
          >
            Projets
          </a>
        </Link>
      </nav>
    </div>
  );
}

export default Nav;
