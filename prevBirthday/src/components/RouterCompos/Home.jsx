import React, { useEffect, useRef } from 'react'
import Birthday from './ConfettiCake/Birthday'
import NewBirthday from './ConfettiCake/NewBirthday'
import hbdd from '../../pics/hbd.mp3'

function Home() {

  const audioRef = useRef(null);

  // const [apI, setApI] = useState(false);

  const handleMouseMove = () => {
    audioRef.current.play();
    //document.removeEventListener('mousemove', handleMouseMove);
  };
  const handleClick = () => {
    audioRef.current.play();
    // document.removeEventListener('mousemove', handleMouseMove);
  };

  useEffect(() => {

    // if(!apI){
    //   handleMouseMove();
    //   setApI(true)
    // }
    // handleClick();
    // handleMouseMove();
    document.addEventListener('click', handleMouseMove );
    return () => {
      document.removeEventListener('click', handleMouseMove);
    };

  }, []);

  
  return (
    <div className='h-screen'>
      {/* <Birthday/> */}

      <div onClick={handleMouseMove}>
        <audio src={hbdd} ref={audioRef} autoPlay loop />
        {/* <button onClick={handleClick}>Play Audio</button> */}

      </div>
      <NewBirthday/>
    </div>
  )
}

export default Home
