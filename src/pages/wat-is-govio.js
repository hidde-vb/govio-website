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
      <Seo title="Wat is Govio" />
      
      <Hero title="Govio" />

      {/* Somethin about Bar Goof */}
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
