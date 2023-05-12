import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Seo from '../components/seo'
import Layout from '../components/layout'
import Hero from '../components/hero'
import ArticlePreview from '../components/article-preview'

class AgendaIndex extends React.Component {
  render() {
    const posts = get(this, 'props.data.allContentfulEvent.nodes')

    return (
      <Layout location={this.props.location}>
        <Seo title="Agenda" />
        <Hero title="Agenda" />
        <ArticlePreview posts={posts} />
      </Layout>
    )
  }
}

export default AgendaIndex

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
