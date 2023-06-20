import * as React from 'react'

import * as styles from './marquee.module.css'

const Marquee = ({ content = '' }) => {
  return (
    <div className={styles.marquee}>
      <div className={styles.marqueeScroll}>
        <span aria-hidden="true">
          {content}
          {content}
          {content}
        </span>
      </div>
      <div className={styles.marqueeScroll}>
        <span aria-hidden="true">
          {content}
          {content}
          {content}
        </span>
      </div>
    </div>
  )
}

export default Marquee
