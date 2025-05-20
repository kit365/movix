import {Hero} from "../hero";
import { GiHamburgerMenu } from "react-icons/gi";

export const Header = () => {

    const navValue: string[] = ["Home", "About", "Contact"];

    return (
        <header>
            <div  className="flex justify-between items-center bg-black text-white px-5 py-3 h-full w-full">
                <div className="flex items-center gap-10 ">
                    <div className="cursor-pointer">
                        <h1 className="text-2xl text-red-700 uppercase font-bold">Movix</h1>
                    </div>
                    <nav className="max-lg:hidden">
                        <ul className="flex gap-8 max-lg:gap-10 ">
                            {
                                navValue.map((item, index) => {
                                    return (
                                        <li className="cursor-pointer" key={index}>{item}</li>
                                    )
                                })
                            }
                        </ul>
                    </nav>
                </div>

                <div className="gap-5 flex items-center max-lg:hidden">
                    <input className="bg-white text-black px-2 py-2" type="text" placeholder="search"/>
                    <button className="bg-red-700 px-1 py-0.5 items-center rounded-md">Search</button>
                </div>

                <div className="hidden max-lg:flex items-center justify-center bg-red-700 p-2 rounded cursor-pointer">
                    <GiHamburgerMenu className="text-white w-6 h-6" />
                </div>


            </div>



            <section>
                <Hero/>
            </section>



        </header>
    )
}