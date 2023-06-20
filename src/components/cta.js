import * as React from 'react'

import * as styles from './cta.module.css'

const cta = ({ content = '' }) => {
  return (
    <div>
      <div className={styles.list}>
        <a
          href="http://www.govio.be/doc/Technische%20fiche.pdf"
          target="_blank"
        >
          <div className={`${styles.block} ${styles.block__1}`}>
            Technische Fiche
          </div>
        </a>
        <a
          href="http://www.govio.be/doc/Algemene%20voorwaarden.pdf"
          target="_blank"
        >
          <div className={`${styles.block} ${styles.block__2}`}>
            Algemene Voorwaarden
          </div>
        </a>
        <a href="http://www.govio.be/doc/Handleiding.pdf" target="_blank">
          <div className={styles.block}>Volledige Handleiding</div>
        </a>
      </div>
    </div>
  )
}

export default cta
