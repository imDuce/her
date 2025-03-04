import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, Router, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './components/RouterCompos/Layout.jsx'
import Home from './components/RouterCompos/Home.jsx'
import About from './components/RouterCompos/About.jsx'
import Contact from './components/RouterCompos/Gallery.jsx'
import Smile from './components/RouterCompos/SmileDisplay/Smile.jsx'
import PoetryComponent from './components/RouterCompos/SmileDisplay/PoetryComponent.jsx'
import DisabledTwittter from './components/RouterCompos/TwitterDisabled/DisabledTwittter.jsx'
import Credit from './components/RouterCompos/NewFooter/Credits/Credit.jsx'
import Message from './components/RouterCompos/NewFooter/Message/Message.jsx'
import Discclaimer from './components/RouterCompos/NewFooter/Diaclaimer/Discclaimer.jsx'
// import Smile from './components/RouterCompos/Smile.jsx'


const router = createBrowserRouter(

  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='card' element={<About/>}/>
      <Route path='carousel' element={<Contact/>}/>
      <Route path='smile' element={<Smile/>}/>
      <Route path='twitter' element={<DisabledTwittter/>}/>
      <Route path='credits' element={<Credit/>}/>
      <Route path='message' element={<Message/>}/>
      <Route path='disclaimer' element={<Discclaimer/>}/>
    </Route>
    )

);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
  
 

)
