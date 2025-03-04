import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Menu from '../Menu'

import headImg from '../../wishes/gif6.gif'

// import hbdImg from '../../wishes/hbd3.jfif'

function Header() {
    return (
        <header className='top-0 z-50 shadow'>
            <nav className='bg-white mx-auto px-4 py-1.5 border-black sm:p-2'>

                <div className='flex flex-wrap justify-between items-center  max-w-screen-xl'>

                    <div className='h-28 w-28'>
                        <Link to='/' className='flex items-center'>
                            {/* <img src="data:image/png;base64,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" */}
                            {/* <img src={hbdImg} */}
                            <img src={headImg}
                                alt="logo" />
                        </Link>
                    </div>
                    <div className="justify-between items-center w-full sm:flex sm:w-auto sm:order-1">

                        <ul className='sm:hidden md:flex lg:gap-x-3 mt-4 font-medium sm:flex-row sm:space-x-8 sm:mt-0'>
                            <li>

                                <NavLink to='/' className={({ isActive }) =>
                                    `${isActive ? 'text-pink-400' : 'text-gray-500'} text-black duration-200
                                hover:text-purple-700 border-gray-100 border-b block py-2 px-3 lg:py-0`


                                }>

                                    Home
                                </NavLink>
                            </li>

                            <li>

                                <NavLink to='/card' className={({ isActive }) =>
                                    `${isActive ? 'text-pink-400' : 'text-gray-500'} text-black duration-200
                                hover:text-purple-700 border-gray-100 border-b block py-2 px-3 lg:py-0`

                                }>
                                    Card
                                </NavLink>

                            </li>


                            <li>


                                <NavLink to='/carousel' className={({ isActive }) =>
                                    `${isActive ? 'text-pink-400' : 'text-gray-500'} text-black duration-200
                                hover:text-purple-700 border-gray-100 border-b block py-2 px-3 lg:py-0`

                                }>
                                    Carousel
                                </NavLink>
                            </li>

                            <li>

                                <NavLink to='/smile' className={({ isActive }) =>
                                    `${isActive ? 'text-pink-400' : 'text-gray-500'} text-black duration-200
                                    hover:text-purple-700 border-gray-100 border-b block py-2 px-3 lg:py-0` 

                                }>
                                    Smile
                                </NavLink>

                            </li>

                        </ul>
                    </div>
                    {/* <div className='sm:hidden md:hidden'> */}
                    <div className=' lg:flex lg:gap-x-2 lg:order-3'>
                        <Link to='https://slides-of-her-majesty.vercel.app/' target='_blank' className=' hover:bg-purple-300  text-gray-500
                        duration-200 focus:ring-4 focus:ring-gray-300 focus:outline-none font-medium rounded-lg 
                         px-4 lg:px-5 py-2 lg:py-2.5 mr-2
                        '>
                            Slides
                        </Link>
                        {/* <Link to='#' className=' hover:bg-purple-400  text-gray-800
                        duration-200 focus:ring-4 focus:ring-gray-300 focus:outline-none font-medium rounded-lg 
                        text-sm px-4 lg:px-4 py-2 lg:py-2.5 bg-purple-600'>
                            SignUp
                        </Link> */}
                    </div>



                    <div className='sm:order-2'>

                        <Menu />

                    </div>






                </div>
            </nav>

        </header>
    )
}

export default Header
