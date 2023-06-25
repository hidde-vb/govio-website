import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'

import Seo from '../components/seo'
import Layout from '../components/layout'
import Hero from '../components/hero'
import EventPreview from '../components/event-preview'
import Container from '../components/container'

class AgendaIndex extends React.Component {
  render() {
    const posts = get(this, 'props.data.allContentfulEvent.nodes')

    return (
      <Layout location={this.props.location}>
        <Seo title="Agenda" />
        <Hero title="Agenda" />

        <EventPreview posts={posts} />

        <Container>
          <Link to="/archief" activeClassName="active">
            <div role="button" className="button">
              Bekijk archief
            </div>
          </Link>
        </Container>
      </Layout>
    )
  }
}

export default AgendaIndex

export const pageQuery = graphql`
  query BlogIndexQuery {
    allContentfulEvent(
      sort: { publishDate: ASC }
      limit: 15
      filter: { isFuture: { eq: true } }
    ) {
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
