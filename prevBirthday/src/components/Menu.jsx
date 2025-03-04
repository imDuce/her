import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Menu() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    return (
        <div className="flex items-center justify-between border-b border-gray-400 py-8 lg:hidden md:hidden">

            <nav>
                <section className="MOBILE-MENU flex lg:hidden">
                    <div
                        className="HAMBURGER-ICON space-y-2"
                        onClick={() => setIsNavOpen((prev) => !prev)}
                    >
                        <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                        <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                        <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                    </div>

                    <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
                        <div
                            className="absolute top-0 right-0 px-8 py-8"
                            onClick={() => setIsNavOpen(false)}
                        >
                            <svg
                                className="h-8 w-8 text-gray-600"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </div>
                        <ul className="flex flex-col items-center justify-between min-h-[250px]">

                            
                        <li>
                            
                            <NavLink to='/' className={({ isActive }) =>
                                `${isActive ? 'text-orange-500' : 'text-gray-500'} text-black duration-200
                            hover:text-orange-700 border-b border-gray-400 my-8 uppercase`

                            }>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            
                            <NavLink to='/about' className={({ isActive }) =>
                                `${isActive ? 'text-orange-500' : 'text-gray-500'} text-black duration-200
                            hover:text-orange-700 border-b border-gray-400 my-8 uppercase`

                            }>
                                Card
                            </NavLink>
                        </li>
                        <li>
                            
                            <NavLink to='/contact' className={({ isActive }) =>
                                `${isActive ? 'text-orange-500' : 'text-gray-500'} text-black duration-200
                            hover:text-orange-700 border-b border-gray-400 my-8 uppercase`

                            }>
                                Carousel
                            </NavLink>
                        </li>

                        <li>
                            
                            <NavLink to='/smile' className={({ isActive }) =>
                                `${isActive ? 'text-orange-500' : 'text-gray-500'} text-black duration-200
                            hover:text-orange-700 border-b border-gray-400 my-8 uppercase`

                            }>
                                Smile
                            </NavLink>
                        </li>

                        </ul>
                    </div>
                </section>

            </nav>
            <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        duration: 200
      }
    `}</style>
        </div>
    );
}
