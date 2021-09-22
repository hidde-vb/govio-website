import React, { useState, useLayoutEffect } from 'react'
import { Link } from 'gatsby'
import styles from './navigation.module.css'

import Govio from '../../images/govio-logo.svg'

export default () => {
  const [open, setOpen] = useState(false);

  return (
    <nav role="navigation">
      <div className={styles.navigation}>
        <div className={styles.navigationBar}>
          <object className={styles.logo} type="image/svg+xml" data={Govio}></object>
          <ul className={styles.rightmenu}>
            <li className={styles.menuItem}>
              <Link className={styles.menuLink} to="/">Home</Link>
            </li>
            <li className={styles.menuItem}>
              <Link className={styles.menuLink} to="/blog/">Blog</Link>
            </li>
          </ul>
          <div className={`${styles.hamburger} ${open && styles.active}`} onClick={() => setOpen(!open)}>
            <div className={`${styles.hamburgerLine} ${styles.line1}`}></div>
            <div className={`${styles.hamburgerLine} ${styles.line2}`}></div>
            <div className={`${styles.hamburgerLine} ${styles.line3}`}></div>
          </div>
        </div>
      </div>
    </nav>
  )
}

