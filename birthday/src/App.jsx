import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex items-center justify-center">
        <h1 className="text-7xl text-red-600 font-bold underline">Hello world!</h1>
        <Navbar/>
      </div>
    </>
  );
}

export default App;
