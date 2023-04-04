import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'gatsby'

import * as styles from './navigation.module.css'
import logo from '../../static/images/logo-black.png'
import inverseLogo from '../../static/images/logo-white.png'

const Navigation = () => {
  const [open, setOpen] = useState(false)

  const handleKeyPress = (e) => {
    if (e.keyCode === 20) setOpen(!open)
  }

  useEffect(() => {
    if (open) {
      document.body.classList.add('overlayOpen')
    }
    return () => {
      document.body.classList.remove('overlayOpen')
    }
  }, [open])

  return (
    <nav role="navigation" aria-label="Main">
      <Link to="/">
        <img className={styles.logo} alt="Logo" src={logo} />
      </Link>

      {/* overlay Menu */}

      {open && (
        <div className={styles.overlay}>
          <Link to="/">
            <img className={styles.logo} alt="Logo" src={inverseLogo} />
          </Link>
          <ul className={styles.menu}>
            <li className={styles.menuItem}>
              <Link to="/" activeClassName="active">
                Home
              </Link>
            </li>
            <li className={styles.menuItem}>
              <Link to="/1" activeClassName="active">
                Andere
              </Link>
            </li>
            <li className={styles.menuItem}>
              <Link to="/2" activeClassName="active">
                Placeholder
              </Link>
            </li>
          </ul>
        </div>
      )}

      {/* Burger */}
      <div
        className={`${styles.hamburger} ${open && styles.active}`}
        tabIndex="0"
        role="button"
        onKeyDown={(e) => handleKeyPress(e)}
        onClick={() => setOpen(!open)}
      >
        <div className={styles.hamburgerLine} />
        <div className={styles.hamburgerLine} />
        <div className={styles.hamburgerLine} />
      </div>

      {/* Navigation Bar */}
      <ul className={styles.navigationBar}>
        <li className={styles.navigationBarItem}>
          <Link to="/" activeClassName="active">
            Home
          </Link>
        </li>
        <li className={styles.navigationBarItem}>
          <Link to="/1" activeClassName="active">
            Andere
          </Link>
        </li>
        <li className={styles.navigationBarItem}>
          <Link to="/2" activeClassName="active">
            Placeholder
          </Link>
        </li>
        <li>
          <Link to="/">
            <img className={styles.navigationBarLogo} alt="Logo" src={logo} />
          </Link>
        </li>
        <li className={styles.navigationBarItem}>
          <Link to="/blog/" activeClassName="active">
            Blog
          </Link>
        </li>
        <li className={styles.navigationBarItem}>
          <Link to="/3/" activeClassName="active">
            team
          </Link>
        </li>
        <li className={styles.navigationBarItem}>
          <Link to="/4/" activeClassName="active">
            en meer
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
