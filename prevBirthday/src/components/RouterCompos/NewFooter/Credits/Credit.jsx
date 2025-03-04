import React, { useEffect, useState } from 'react'
import bgPic from '../../../../pics/hayee.jpg'
import '../../../RouterCompos/style.css'

function Credit() {



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
      }, 130) 

      return () => clearInterval(intervalId)
    }, [text])

    return <div className='crdText'>{displayText}</div>
  }

  return (
    <div>
      <div className='justify-center items-center relative'>
        <div className='w-full h-full '>
          <img src={bgPic} alt="" className='h-full w-full object-cover blur-md' />
        </div>


        <div className='w-[40%] absolute top-[30%] left-[30%] font-bold text-3xl text-white'>
          <Typewriter text="For            
                 The     
                 'ONE AND ONLY'                                       
                 By
                 well, u know who 😉" />
        </div>


      </div>

    </div>
  )
}

export default Credit
