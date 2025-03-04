import React from 'react'
import img from '../../pics/cutout5.png'
import Compo from './CSlider'
import './style.css'

function Contact() {
    return (

        <>

            <div className='w-full'>
            <hr className="my-6 border-gray-200 sm:mx-auto sm:my-32" />
                <div className=''>
                    <Compo />
                </div>
            <img src={img} alt="img5" className='bottom-0 -translate-y-80 md:-translate-y-96 mb-[-300px] ' />
            </div>

        </>
    )
}

export default Contact
