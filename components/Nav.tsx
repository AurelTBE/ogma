import React, { useState } from "react";
import Link from 'next/link'

function Nav() {
  return (
    <div className="w-full">
      <nav className="glassnav">
        <Link href="/">
            <a
            className="hover:bg-gray-700 hover:text-white text-stone-800 px-3 py-2 rounded-md text-sm font-medium"
            >
            Accueil
            </a>
            </Link>
            <Link href="/actus">
            <a
            className="text-stone-800 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
            Actus
            </a>
            </Link>
            <Link href="/">
            <a
            href="#"
            className="text-stone-800 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
            Projects
            </a>
            </Link>
      </nav>
    </div>
  );
}

export default Nav;
