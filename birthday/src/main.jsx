import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  Route,
  Router,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./components/Home.jsx";
import MessageCard from "./components/MessageCard.jsx";
import Video from "./components/Video.jsx";
import Timeline from "./components/Timeline.jsx";
import Message from "./components/Message/Message.jsx";
import Balloons from "./components/SphereBalloons/Balloons.jsx";
// import Cake from "./components/Static cake/Cake.jsx";
import BalloonCanvas from "./components/SphereBalloons/FlyingBalloons.jsx";
import HappyBirthdayCanvas from "./components/HBD with Balloons/HbdWballoon.jsx";
import Typewriter from "./components/Typewriter/TypewriterAmimation.jsx";
import Carousel from "./components/Carousel/Template1.jsx";
import ScrollingText from "./components/ScrollingText/Text1.jsx";
import ScrollerImagePage from "./components/ScrollingText/ScrollerImagePage.jsx";
import BirthdayCard from "./components/Card/BirthdayCard.jsx";
import CardMessage from "./components/Message/CardMessage.jsx";
import Andaa from "./components/EggCrack/Andaa.jsx";
import Cake from "./components/Animated Cake /Cake.jsx";
import Shikayat from "./components/Complaints/Shikaayat.jsx";
import TextAnim3 from "./components/Utilities/TextAnimation3.jsx";
import TestAnimation6 from "./components/Utilities/TestAnimation6.jsx";
import RotatingCube from "./components/Timeline screen/Together.jsx";
// import Cake from "./components/Static cake /Cake.jsx";
// import Message from "./components/Message/Message.js";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      {/* <Route path="/card" element={<Message />} /> */}
      {/* <Route path="/card" element={<Balloons />} />  */}
      <Route path="/card" element={<HappyBirthdayCanvas />} />
      <Route path="/video" element={<Carousel />} />
      <Route path="/testing" element={<ScrollerImagePage />} />
      <Route path="/timeline" element={<BalloonCanvas />} />
      <Route path="/birthdayCard" element={<BirthdayCard />} />
      <Route path="/cardMsg" element={<CardMessage />} />
      <Route path="/egg" element={<Andaa />} />
      <Route path="/cake" element={<Cake />} />
      <Route path="/complain" element={<Shikayat />} />
      <Route path="/anim" element={<TestAnimation6 />} />
      <Route path="/ourMemories" element={<RotatingCube />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
