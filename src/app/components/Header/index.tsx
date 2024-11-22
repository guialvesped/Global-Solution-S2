"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Header : React.FC = () => {

    const [isHidden, setIsHidden] = useState(true);
    const toggleVisibility = () => {
        setIsHidden(!isHidden);
    };

    const pathname = usePathname();

    return(
        <>
        <header>
            <nav className="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src='/logo-def.png' className="h-12 backdrop-blur rounded" alt="Logo EcoSnart" />
                    </Link>
                    <button onClick={toggleVisibility} data-collapse-toggle="navbar-hamburger" type="button" className="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-hamburger" aria-expanded="false">
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="#22d3ee" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                    </button>
                    <div className={`${isHidden ? "hidden" : "relative"} w-full `} id="navbar-hamburger">
                    <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                        <li>
                        <Link href="/" className={`block py-2 px-3 ${pathname === "/" ? ' text-white bg-blue-700 rounded dark:bg-blue-600' :  'text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white' }`} aria-current="page">Home</Link>
                        </li>
                        <li>
                        <Link href="/about" className={`block py-2 px-3 ${pathname === "/about" ? ' text-white bg-blue-700 rounded dark:bg-blue-600' :  'text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white' }`}>Sobre Nós</Link>
                        </li>
                        <li>
                        <Link href="/login" className={`block py-2 px-3 ${pathname === "/about" ? ' text-white bg-blue-700 rounded dark:bg-blue-600' :  'text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white' }`}>Login</Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </header>
        </>
    )
}

export default Header;