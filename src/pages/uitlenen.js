import React from 'react'
import { graphql } from 'gatsby'

import Seo from '../components/seo'
import Layout from '../components/layout'

import * as styles from './uitlenen.module.css'

const WatIsGovioIndex = (props) => {
  return (
    <Layout location={props.location}>
      <Seo title="Uitlenen" />
      <div className="two-columns">
        <div className="two-columns__text">
          <h1>Uitleendienst</h1>
          <p>
            Gemeente Kalmthout stelt een volledige licht- en geluidsinstallatie
            ter beschikking voor alle Kalmthoutse verenigingen. Je kan de
            installatie volledig gratis gebruiken (zelf ophalen en
            terugbrengen). Jeugdhuis Govio beheert deze installatie.
          </p>
          <a
            target="_blank"
            href="https://docs.google.com/forms/d/e/1FAIpQLSc-Lf47rTm5NYSVbp7UvuJSqjnjaFI8ZnvJze-ACV1kd9e9Iw/viewform"
          >
            <div className="button">Aanvraag indienen</div>
          </a>
        </div>
        <div>
          <div className={styles.list}>
            <a
              href="http://www.govio.be/doc/Technische%20fiche.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <div className={`${styles.block} ${styles.block__1}`}>
                Technische Fiche
              </div>
            </a>
            <a
              href="http://www.govio.be/doc/Algemene%20voorwaarden.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <div className={`${styles.block} ${styles.block__2}`}>
                Algemene Voorwaarden
              </div>
            </a>
            <a
              href="http://www.govio.be/doc/Handleiding.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <div className={styles.block}>Volledige Handleiding</div>
            </a>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default WatIsGovioIndex

export const pageQuery = graphql`
  query BlogIndexQuery {
    allContentfulEvent(sort: { publishDate: DESC }) {
      nodes {
        title
        slug
        publishDate(formatString: "MMMM Do, YYYY")
        heroImage {
          gatsbyImage(
            layout: FULL_WIDTH
            placeholder: BLURRED
            width: 424
            height: 212
          )
        }
      }
    }
  }
`
