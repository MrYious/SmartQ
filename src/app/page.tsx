import { FaArrowRightLong } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (<>
    <main className="flex flex-col min-h-screen justify-center items-center gap-7">
      <div className="flex flex-col gap-1 text-center">
        <div className="font-bold text-6xl">Empower Learning</div>
        <div className="text-xl">Discover Fun & Interactive Quizzes!</div>
      </div>
      <div className="flex flex-col gap-3">
        <div className="text-xl">This is where learning meets adventure!</div>
        <div className="flex gap-2 justify-center">
          <Link href={'/signup'} className="flex flex-col gap-2 p-3 rounded border-2 bg-green-700 hover:bg-green-800">
            <div className="text-gray-300 text-sm">
              New Instructor ?
            </div>
            <div className="text-white flex items-center gap-3 font-bold">
              Sign up now <FaArrowRightLong  className=""/>
            </div>
          </Link>
          <Link href={'/signup'} className="flex flex-col gap-2 p-3 rounded border-gray-700 border-2 hover:border-green-800">
            <div className="text-sm">
              Active Quiz ?
            </div>
            <div className="flex items-center gap-3 font-bold">
              Join via Code <FaArrowRightLong  className=""/>
            </div>
          </Link>
        </div>
      </div>
      <div className="absolute bottom-0 py-2 bg-green-700 w-full flex text-white justify-center font-semibold">
        <a href="#about">What is SmartQ?</a>
      </div>
    </main>
  </>);
}
