import React, { useState, useEffect } from 'react'
import anyaPic from '../../../pics/Anya.jfif'

const Typewriter = ({ text }) => {
    const [displayText, setDisplayText] = useState('')

    useEffect(() => {
        let currentIndex = 0
        const intervalId = setInterval(() => {
            if (currentIndex <= text.length) {
                setDisplayText(text.substring(0, currentIndex))
                currentIndex++
            } else {
                clearInterval(intervalId)
            }
        }, 100) // Adjust the typing speed by changing the interval (milliseconds)

        return () => clearInterval(intervalId)
    }, [text])

    return <div>{displayText}</div>
}

function DisabledTwittter() {
    return (
        <div>

            <div className='justify-center items-center relative'> 
                <div className='w-full h-full '>
                    <img src={anyaPic} alt="" className='h-full w-full object-cover blur-md' />
                </div>


            <div className='w-[40%] absolute top-[30%] left-[30%] font-bold text-3xl'>
                <Typewriter text="Why Do U want my twitter ?                        
                 I thought U said U dont use Twitter , huh ?!                                
                 Eitherways, I've disabled my twitter; wasn't using it, felt useless ,so......" />
            </div>


            </div>



        </div>
    )
}

export default DisabledTwittter










