import React from 'react'
import { Link, graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import get from 'lodash/get'

import Layout from '../components/layout'
import EventPreview from '../components/event-preview'
import Container from '../components/container'
import Seo from '../components/seo'
import Marquee from '../components/marquee'

import * as styles from './index.module.css'

class RootIndex extends React.Component {
  render() {
    const config = get(this, 'props.data.contentfulConfiguration')
    const posts = get(this, 'props.data.allContentfulEvent.nodes')

    return (
      <Layout location={this.props.location}>
        <Seo title="Home" />

        <EventPreview posts={posts} />

        {/* TODO add big more events button*/}
        {posts.length > 5 && (
          <Container>
            <Link to="/agenda" activeClassName="active">
              <div role="button" className="button">
                Bekijk alle events
              </div>
            </Link>
          </Container>
        )}
        <Marquee content="Govio.Govio." />
        <Container>
          <div className="two-columns">
            <GatsbyImage
              className="image"
              alt="Home"
              image={config.heroImage.gatsbyImage}
            />
            <div className="two-columns__text">
              <div
                dangerouslySetInnerHTML={{
                  __html: config.heroText.childMarkdownRemark.html,
                }}
              />
            </div>
          </div>
        </Container>
        <Container type="highlight">
          <div className={styles.linkList}>
            <Link to="/agenda">
              <div role="button" className={styles.linkButton}>
                Agenda
              </div>
            </Link>
            <Link to="/uitlenen">
              <div role="button" className={styles.linkButton}>
                Uitlenen en huren
              </div>
            </Link>
            <Link to="/team">
              <div role="button" className={styles.linkButton}>
                Lid worden
              </div>
            </Link>
          </div>
        </Container>
        <Container />
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulEvent(
      sort: { publishDate: ASC }
      limit: 6
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
    contentfulConfiguration(title: { eq: "Home" }) {
      heroText {
        childMarkdownRemark {
          html
        }
      }
      heroImage {
        gatsbyImage(
          layout: FULL_WIDTH
          placeholder: DOMINANT_COLOR
          width: 400
          height: 300
        )
      }
    }
  }
`
