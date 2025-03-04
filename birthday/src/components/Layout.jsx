import React, { useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
// import Navbar from "./Navbar/Navbar.jsx";
// import Navbar3 from "./Navbar/Navbar3.jsx";
import Navbar4 from "./Navbar/NavBar4.jsx";
import MousePointer from "./MousePointer/MousePointer.jsx";
import aud1 from '../assets/hbd.mp3'

const Layout = () => {
  const location = useLocation();
  const hideNavbarRoutes = ["/egg"];
  const audioRef = useRef(null);
  const handlePlayAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <div onClick={handlePlayAudio}>
      <audio ref={audioRef} loop>
        <source src={aud1} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <Outlet />
      {/* <MousePointer/> */}
      {/* <Navbar /> */}
      <Navbar4 />
      {/* {!hideNavbarRoutes.includes(location.pathname) && } */}
    </div>
  );
};

export default Layout;
