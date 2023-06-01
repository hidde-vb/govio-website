import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Seo from '../components/seo'
import Layout from '../components/layout'
import Hero from '../components/hero'
import EventPreview from '../components/event-preview'

class AgendaIndex extends React.Component {
  render() {
    const posts = get(this, 'props.data.allContentfulEvent.nodes')

    return (
      <Layout location={this.props.location}>
        <Seo title="Archief" />
        <Hero title="Archief" />
        <EventPreview posts={posts} />
      </Layout>
    )
  }
}

export default AgendaIndex

export const pageQuery = graphql`
  query BlogIndexQuery {
    allContentfulEvent(
      sort: { publishDate: DESC }
      limit: 15
      filter: { isFuture: { eq: false } }
    ) {
      nodes {
        title
        slug
        isFuture
        publishDate(formatString: "MMMM Do, YYYY")
        heroImage {
          gatsbyImage(
            layout: FULL_WIDTH
            placeholder: DOMINANT_COLOR
            width: 424
            height: 318
          )
        }
      }
    }
  }
`
