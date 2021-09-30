import React, { useState } from 'react'
import { Link } from 'gatsby'
import styles from './navigation.module.css'

import facebookIcon from '../../images/facebook-icon.png'
import instagramIcon from '../../images/instagram-icon.png'
import discordIcon from '../../images/discord-icon.png'

import Govio from '../../images/govio-logo.svg'

export default () => {
  const [open, setOpen] = useState(false);

  return (
    <nav role="navigation" className={styles.navigation}>
      <ul className={styles.menu}>
        <li className={styles.menuItem}>
          <a className={styles.menuLink} href="https://www.facebook.com/jhgovio" rel="noreferrer" target="_blank" >
            <img className={styles.menuIcon} src={facebookIcon} alt="F" />
          </a>
        </li>
        <li className={styles.menuItem}>
          <a className={styles.menuLink} href="https://www.instagram.com/jeugdhuis.govio/" rel="noreferrer" target="_blank" >
            <img className={styles.menuIcon} src={instagramIcon} alt="I" />
          </a>
        </li>
        <li className={styles.menuItem}>
          <a className={styles.menuLink} href="https://www.facebook.com/haverklap.bloemen/" rel="noreferrer" target="_blank" >
            <img className={styles.menuIcon} src={discordIcon} alt="D" />
          </a>
        </li>
      </ul>
      <object className={styles.logo} type="image/svg+xml" data={Govio}></object>

      <ul className={styles.menu}>
        <li className={styles.menuItem}>
          <Link className={styles.menuLink} to="/">Word lid</Link>
        </li>
        <li className={styles.menuItem}>
          <Link className={styles.menuLink} to="/blog/">Projecten</Link>
        </li>
        <li className={styles.menuItem}>
          <Link className={styles.menuLink} to="/blog/">Praktisch</Link>
        </li>
        <li className={styles.menuItem}>
          <div className={`${styles.hamburger} ${open && styles.active}`} onClick={() => setOpen(!open)}>
            <div className={`${styles.hamburgerLine} ${styles.line1}`}></div>
            <div className={`${styles.hamburgerLine} ${styles.line2}`}></div>
            <div className={`${styles.hamburgerLine} ${styles.line3}`}></div>
          </div>
        </li>
      </ul>
    </nav>
  )
}

