'use client'

import { usePathname, useRouter } from 'next/navigation'

import Link from "next/link"
import useLoggedIn from './_hooks/useLoggedIn'

export default function NavBar() {
    const pathname = usePathname()
    const {isLoggedIn, isStudent} = useLoggedIn();

    return(<nav className="absolute flex w-full border-b-[1px] select-none border-gray-300 justify-between items-center px-10 py-3 ">
        <Link href={'/'} className="font-bold text-4xl">
            SmartQ
        </Link>
        <div className="flex gap-4 ">
            {
                isStudent &&
                <Link href={'/join'} className=" border-[1px] border-gray-400 py-1 px-2 rounded hover:border-green-600">
                    Enter Code
                </Link>
            }
            {
                pathname == '/signup' ?
                    <Link href={'/signin'} className="bg-green-700 hover:bg-green-800 text-white py-1 px-2 rounded">
                        Sign in
                    </Link>
                :
                    <Link href={'/signup'} className="bg-green-700 hover:bg-green-800 text-white py-1 px-2 rounded">
                        Sign up
                    </Link>
            }
        </div>
    </nav>)
}