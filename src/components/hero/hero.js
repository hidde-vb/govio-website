import React, { useLayoutEffect, useState } from 'react'
import Img from 'gatsby-image'

import styles from './hero.module.css'
import Govio from '../../images/govio-white.svg'

export default ({ data }) => {
  const [offset, setOffset] = useState('30vh');

  useLayoutEffect(() => {
    document.addEventListener('scroll', () => {
      const desktopQuery = window.matchMedia("(min-width: 1024px)");
      if (desktopQuery.matches) {
        setOffset('30vh')
      } else {
        const offset = 20 + Math.round(window.pageYOffset / window.innerHeight * 80)
        setOffset((offset < 85 ? offset : 85) + 'vh');
      }
    })
  })

  return (
    <div className={styles.hero}>
      <div className={styles.heroContainer}>
        <object className={styles.heroTitle} type="image/svg+xml" data={Govio} style={{ top: offset }}>
          Govio
          </object>
        <Img className={styles.heroImage} fluid={data.heroImage.fluid} style={{ position: "relative" }} />
      </div>
    </div>
  )
}