import React from 'react'

import * as styles from './footer.module.css'

import wavesImage from '../../static/images/waves.png'
import facebookGlyph from '../../static/images/facebook-glyph.png'
import instagramGlyph from '../../static/images/instagram-glyph.png'

const Footer = () => (
  <div className={styles.footer} as="footer">
    <img className={styles.wave} alt="Logo" src={wavesImage} />
    <div className={styles.textContainer}>
      <div className={styles.columnsContainer}>
        <div className={styles.column}>
          <h3>GOVIO</h3>
          <ul className={styles.list}>
            <li>tel. 03 666 22 24</li>
            <li>
              <a href="mailto:info@govio.be">info@govio.be</a>
            </li>
          </ul>
          <ul className={styles.list}>
            <li>Dorpsstraat 1</li>
            <li>2920 Kalmthout</li>
          </ul>
        </div>
        <div className={styles.column}>
          <p>Kantooruren:</p>
          <ul className={styles.list}>
            <li>
              <b>Di</b> 10 - 17
            </li>
            <li>
              <b>Wo</b> 13 - 17
            </li>
            <li>
              <b>Do</b> 10 - 17
            </li>
            <li>
              <b>Vr</b> 13 - 17, Bar 20 - ??
            </li>
            <li>
              <b>Za</b> afhankelijk van evenementen
            </li>
            <li>Maandag en zondag gesloten</li>
          </ul>
        </div>
        <div className={styles.column}>
          <div className={styles.socials}>
            <a
              href="https://www.facebook.com/jhgovio/"
              rel="noreferrer"
              target="_blank"
            >
              <img className={styles.glyph} src={facebookGlyph} alt="F" />
            </a>
            <a
              href="https://www.instagram.com/jeugdhuis.govio/"
              rel="noreferrer"
              target="_blank"
            >
              <img className={styles.glyph} src={instagramGlyph} alt="I" />
            </a>
          </div>
        </div>
      </div>
      <div>
        <a className={styles.link} href="/help">
          Cookies and Privacy
        </a>{' '}
        &middot; Built by{' '}
        <a className={styles.link} href="https://hidde.cc/">
          Hidde
        </a>{' '}
        &middot; © 2023 Govio
      </div>
    </div>
  </div>
)

export default Footer
