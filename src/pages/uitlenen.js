import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Seo from '../components/seo'
import Layout from '../components/layout'
import Hero from '../components/hero'
import ArticlePreview from '../components/article-preview'

const WatIsGovioIndex = (props) => {
  return (
    <Layout location={props.location}>
      <Seo title="Uitlenen" />
      <Hero title="uitlenen" />

      <p>
        Gemeente Kalmthout stelt een volledige licht- en geluidsinstallatie ter
        beschikking voor alle Kalmthoutse verenigingen. Je kan de installatie
        volledig gratis gebruiken (zelf ophalen en terugbrengen). Jeugdhuis
        Govio beheert deze installatie
      </p>
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
