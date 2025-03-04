import React, { useEffect, useState } from 'react'
import bgPic from '../../../../pics/Anya.jfif'

function Discclaimer() {
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
      }, 100) 

      return () => clearInterval(intervalId)
    }, [text])

    return <div className='disText'>{displayText}</div>
  }
  return (
    <div>
      
      <div className='justify-center items-center relative'>
        <div className='w-full h-full '>
          <img src={bgPic} alt="" className='h-full w-full object-cover blur-md' />
        </div>


        <div className='w-[40%] absolute top-[30%] left-[30%] font-bold text-3xl text-black'>
          <Typewriter text="Fair Discalimer,                           
                 Agar kisi bhi content se dikat ho, ya phir if U didn't want me using a particular pic,                           
                 please let the developer know;                   
                 P.S : Just let him know, he isin't going to do anthing about it; He is LAZY 🥱" />
        </div>


      </div>

    </div>
  )
}

export default Discclaimer
