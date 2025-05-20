
export const Header = () => {
    return (
        <header className="flex justify-between items-center bg-black text-white px-5 py-3">
            <div className="flex items-center gap-10">
                <div className="">
                    <h1 className="text-2xl text-red-700 uppercase font-bold">Movie</h1>
                </div>
                <nav>
                    <ul className="flex gap-8">
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </nav>
            </div>

            <div className="gap-5 flex items-center">
                <input className="bg-white text-black px-2 py-2" type="text" placeholder="search" />
                <button className="bg-red-700 px-1 py-0.5 items-center rounded-md ">Search</button>
            </div>





        </header>
    )
}