import React, { useState, useLayoutEffect } from 'react'
import { Link } from 'gatsby'
import styles from './navigation.module.css'

import Govio from '../../images/govio-logo.svg'

export default () => {
  const [open, setOpen] = useState(false);
  const [showLogo, setShowLogo] = useState(false);

  useLayoutEffect(() => {
    document.addEventListener('scroll', () => {
      setShowLogo(window.scrollY > window.innerHeight - 50);
    })
  })

  return (
    <nav role="navigation">
      <div className={styles.navigation}>
        {open &&
          <div className={styles.verticalMenu}>
            <div className={styles.verticalMenuItem}>
              <Link className={styles.menuLink} to="/">Home</Link>
            </div>
            <div className={styles.verticalMenuItem}>
              <Link className={styles.menuLink} to="/blog/">Blog</Link>
            </div>
          </div>
        }
        <div className={styles.navigationBar}>
          <object className={styles.logo} style={showLogo ? { opacity: 1 } : { opacity: 0 }} type="image/svg+xml" data={Govio}></object>
          <div className={`${styles.hamburger} ${open && styles.active}`} onClick={() => setOpen(!open)}>
            <div className={`${styles.hamburgerLine} ${styles.line1}`}></div>
            <div className={`${styles.hamburgerLine} ${styles.line2}`}></div>
            <div className={`${styles.hamburgerLine} ${styles.line3}`}></div>
          </div>
          <ul className={styles.menu}>
            <li className={styles.menuItem}>
              <Link className={styles.menuLink} to="/">Home</Link>
            </li>
            <li className={styles.menuItem}>
              <Link className={styles.menuLink} to="/blog/">Blog</Link>
            </li>
          </ul>
        </div>
      </div>

    </nav >
  )
}

