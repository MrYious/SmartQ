export default function Join(){

    return(<section className="flex flex-col min-h-screen items-center justify-center">
        <div className="text-7xl font-bold pb-5">SmartQ</div>
        <div className="">Enter a code to join</div>
        <div className="flex my-4 items-center border-2 border-black p-2 rounded-md focus-within:border-green-700">
            <input
                className="text-center tracking-[0.2em] outline-none text-3xl bg-transparent font-bold"
                type="text"
                placeholder="XXXX"
                name="code"
                id="code"
                maxLength={4}
                size={3}
            />
            <button className="bg-green-700 hover:bg-green-800 shadow-sm shadow-black text-white py-1 px-2 rounded font-semibold tracking-wider">
                JOIN
            </button>
        </div>
        <div className="flex flex-col justify-center items-center p-2 border-[1px] border-red-700 bg-red-100 text-red-700 rounded text-sm">
            <div>You have entered an invalid code.</div>
            <div>Please ask your instructor for the quiz code</div>
        </div>
    </section>)
}