import React from 'react'
import Layout from '../components/layout'
import Container from '../components/container'

const privacyPage = () => (
  <Layout>
    <Container>
      <div className="paragraph">
        <h1>Privacy & Cookies</h1>
        <p>
          Om het kort te houden: we slaan uw data <b>nooit</b> op.
        </p>
        <p>
          We bezitten dan ook geen database om informatie van u op te slaan. We
          plaatsen geen cookies in uw browser en gebruiken geen third parties
          cookies. Uw data blijven bij u, en gaan niet verder, daarom tonen we
          ook geen cookie banner.
        </p>
      </div>
    </Container>
  </Layout>
)

export default privacyPage
