import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import NewFooter from './NewFooter/NewFooter'


function Layout() {
    return (<>
        <Header />
        <Outlet/>
        {/* <Footer /> */}
        <NewFooter/>
    </>
    )
}

export default Layout
