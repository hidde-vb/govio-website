import React from 'react'

import Container from './container'
import * as styles from './footer.module.css'

const Footer = () => (
  <Container as="footer">
    <div className={styles.container}>
      <a href="/help">Cookies and Privacy</a> &middot;{' '}
      Built by <a href="https://hidde.cc/">Hidde</a> &middot;{' '}
      © 2023 Govio 
    </div>
  </Container>
)

export default Footer
