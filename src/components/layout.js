import React from 'react'

import Footer from './footer'
import './global.css'
import Navigation from './navigation'
import './variables.css'

const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
