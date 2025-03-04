import React, { useEffect, useState } from 'react'

function Colorchanger() {

    const [color, setColor] = useState('pink')

    useEffect(()=>{
        document.body.style.backgroundColor=color;
    },[color]);

    const changeColor = (col)=>{
        setColor(col)
    };
  return (
    <div>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex gap-x-3 justify-center bg-white px-3 py-2 rounded-full'>
            <button onClick={(e)=>changeColor(e.target.style.backgroundColor)} className='px-2 py-1 rounded-xl' style={{backgroundColor:'red'}}>RED</button>
            <button onClick={(e)=>changeColor(e.target.style.backgroundColor)} className='px-2 py-1 rounded-xl'style={{backgroundColor:'green'}} >GREEN</button>
            <button onClick={(e)=>changeColor(e.target.style.backgroundColor)} className='px-2 py-1 rounded-xl' style={{backgroundColor:'blue'}}>BLUE</button>
            {/* <button onClick={()=> setColor('red')} className='px-2 py-1 rounded-xl' style={{backgroundColor:'red'}}>RED</button>
            <button onClick={()=> setColor('green')} className='px-2 py-1 rounded-xl'style={{backgroundColor:'green'}} >GREEN</button>
            <button onClick={()=> setColor('blue')} className='px-2 py-1 rounded-xl' style={{backgroundColor:'blue'}}>BLUE</button> */}
        </div>
      </div>
    </div>
  )
}

export default Colorchanger



{/* <button onClick={()=>changeColor(this.style.backgroundColor)} style={{backgroundColor:'red'}}>RED</button> */}