import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Seo from '../components/seo'
import Layout from '../components/layout'
import Marquee from '../components/marquee'
import EventPreview from '../components/event-preview'

class ArchiefIndex extends React.Component {
  render() {
    const events = get(this, 'props.data.allContentfulEvent.nodes')

    return (
      <Layout location={this.props.location}>
        <Seo title="Archief" />
        <Marquee content="Archief.Archief." />
        <EventPreview events={events} />
      </Layout>
    )
  }
}

export default ArchiefIndex

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
