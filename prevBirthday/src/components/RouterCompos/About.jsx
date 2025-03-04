import React from 'react'
import Baloons from './Baloons'
import './style.css'

import CardUI from './CardDisplay/CardUI'
import './CardDisplay/card.module.css';

function About() {
    return (
        <div className='justify-center h-[800px] '>
            <div className='relative' >   
            {/* ml-96  className='flex justify-between items-center  absolute' */}
                {/* <img src={img1} alt="" className='w-4/5 h-1/5 -z-10' /> */}
            <CardUI/>

            </div>
            <Baloons />
        
        </div>
    )
}

export default About
