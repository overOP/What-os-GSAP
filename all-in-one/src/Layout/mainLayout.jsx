import React from 'react'
import { Outlet } from 'react-router'//outlet is used to render child routes
import Nav from '../components/Nav'

const MainLayout = () => {
  return (
   <>
    <header>
        <Nav />
    </header>
    <main>
        <Outlet />
    </main>
    <footer>
    </footer>
   </>
  )
}

export default MainLayout
