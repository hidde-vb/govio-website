import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'gatsby'

import * as styles from './navigation.module.css'
import logoBlack from '../../static/images/logo-black.png'
import logoWhite from '../../static/images/logo-white.png'
import logoTurkwaas from '../../static/images/logo-turkwaas.png'
import logoRouge from '../../static/images/logo-rouge.png'

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
        <img className={styles.logo} alt="Logo" src={logoBlack} />
      </Link>

      {/* overlay Menu */}

      {open && (
        <div className={styles.overlay}>
          <Link to="/">
            <img className={styles.logo} alt="Logo" src={logoWhite} />
          </Link>
          <ul className={styles.menu}>
            <li className={styles.menuItem}>
              <Link to="/agenda" activeClassName="active">
                Agenda
              </Link>
            </li>
            <li className={styles.menuItem}>
              <Link to="/wat-is-govio" activeClassName="active">
                Wat is Govio
              </Link>
            </li>
            <li className={styles.menuItem}>
              <Link to="/team/" activeClassName="active">
                Team
              </Link>
            </li>
            <li className={styles.menuItem}>
              <Link to="/organiseren/" activeClassName="active">
                Organiseren
              </Link>
            </li>
            <li className={styles.menuItem}>
              <Link to="/projecten/" activeClassName="active">
                Projecten
              </Link>
            </li>
            <li className={styles.menuItem}>
              <Link to="/studio/" activeClassName="active">
                BOX Studio
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
          <Link to="/agenda" activeClassName="active">
            Agenda
          </Link>
        </li>
        <li className={styles.navigationBarItem}>
          <Link to="/wat-is-govio" activeClassName="active">
            Wat is Govio
          </Link>
        </li>
        <li className={styles.navigationBarItem}>
          <Link to="/team/" activeClassName="active">
            Team
          </Link>
        </li>
        <li className={styles.navigationBarLogo}>
          <Link to="/">
            <img
              alt="Logo"
              src={logoBlack}
            />
            <img className={styles.logoLeft} alt="" src={logoTurkwaas} />
            <img className={styles.logoRight} alt="" src={logoRouge} />
          </Link>
        </li>
        <li className={styles.navigationBarItem}>
          <Link to="/organiseren/" activeClassName="active">
            Organiseren
          </Link>
        </li>
        <li className={styles.navigationBarItem}>
          <Link to="/projecten/" activeClassName="active">
            Projecten
          </Link>
        </li>
        <li className={`${styles.navigationBarItem} ${styles.button}`}>
          <Link to="/studio/">BOX Studio</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
