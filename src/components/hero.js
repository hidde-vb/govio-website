import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'

import * as styles from './hero.module.css'

const Hero = ({ image, title }) => (
  <div className={styles.hero}>
    {image && (
      <GatsbyImage className={styles.image} alt={title} image={image} />
    )}
    <div className={styles.details}>
      <h1 className={styles.title}>{title}</h1>
    </div>
  </div>
)

export default Hero
