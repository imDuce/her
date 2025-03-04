import React, { useEffect, useState } from 'react'
import imgMsg from '../../../../pics/cutout02.png'
import '../../../RouterCompos/style.css'

function Message() {

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

    return <div className='msgText'>{displayText}</div>
  }

  return (
    <div>






      <div className='justify-center items-center relative'>
        <div className='w-full h-full '>
          <img src={imgMsg} className='opacity-50 h-full w-full object-cover' alt="MessagePng" />
          {/* <img src={bgPic} alt="" className='h-full w-full object-cover blur-md' /> */}
        </div>


        <div className='w-[40%] absolute top-[1%] left-[30%] font-bold text-2xl text-black'>
          <Typewriter text="So, it's fianlly the day.                             
                 Once again,    wishing you all th joy, the universe has to offer.
                 There might be few things that I want u to know,     
                  and what fitting moment could present itself than this ...    
                 No words can aptly portray your importance in my life.  
                 You shine like that one bright light at the end of a very, very dark tunnel. 
                 You make everything seem so beautiful;   
                 The other day when U asked me ' What IF ? we never met...'
                 I'll be honest; Neither did I have an answer to this back then, nor, do I have it now ...     
                 I gave it a thought, a really deep thought;      it made me anxious and I couldn't come up with an answer, so rehne diyaaaa 😌 

                 I can only say this ....

                 ' Meeting you was fate; I count it amongst the treasures that have enriched my life'


                Always be the way U R;          
                Lively, Spontaneous, Spirited, Charming , Captivating with that radiant smile of yours.
                                 
                  --- Yours Truly😉" />
        </div>
        {/* Vocabulary alone cannot do justice */}

      </div>

    </div>
  )
}

export default Message
