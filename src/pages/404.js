import React from 'react'
import Layout from '../components/layout'

const NotFoundPage = () => (
  <Layout>
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h1>404</h1>
      <p>Deze pagina bestaat niet :((</p>
    </div>
  </Layout>
)

export default NotFoundPage
