import React from 'react'
import './base.css'
import { Helmet } from 'react-helmet'
import Container from './container'
import Navigation from './navigation'

function Layout({ children, siteTitle }) {

  return (
    <Container>
      <Helmet title={siteTitle}></Helmet>
      <Navigation />
      {children}
      <div style={{ backgroundColor: "black", height: 400 }}>
      {/* Footer */}
      </div>
    </Container>
  )

}

export default Layout
