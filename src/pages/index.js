import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'

import Layout from '../components/layout'
import Hero from '../components/hero'
import EventPreview from '../components/event-preview'
import Container from '../components/container'
import Seo from '../components/seo'

class RootIndex extends React.Component {
  render() {
    const posts = get(this, 'props.data.allContentfulEvent.nodes')

    return (
      <Layout location={this.props.location}>
        <Seo title="Home" />
        
        <EventPreview posts={posts} />

        <Container>
          <Link to="/agenda" activeClassName="active">
            <div role="button" className="button">
              Bekijk alle events
            </div>
          </Link>
        </Container>
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
query HomeQuery {
  allContentfulEvent(
      sort: { publishDate: ASC }, 
      limit: 6,
      filter: { isFuture: { eq: true } }) {
    nodes {
      title
      slug
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
