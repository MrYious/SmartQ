import Link from "next/link"

export default function NotFound(){

    return(<main className="flex flex-col items-center justify-center min-h-screen text-center gap-5 ">
        <div className="text-5xl font-bold"><span className="text-red-600">404</span> Not Found</div>
        <div className="font-semibold w-1/3">The page you requested could not be found. You can go back to the previous page or visit our homepage.</div>
        <Link href={'/'} className="bg-green-700 text-white py-2 px-4 rounded hover:bg-green-800 font-semibold">
            Go Back Home
        </Link>
    </main>)
}