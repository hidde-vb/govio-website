import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Seo from '../components/seo'
import Layout from '../components/layout'
import Container from '../components/container'
import EventPreview from '../components/event-preview'

import * as styles from './studio.module.css'

const StudioIndex = (props) => {
  const project = get(props, 'data.contentfulProject')

  const posts = get(props, 'data.allContentfulEvent.nodes')

  console.log('events', posts)

  return (
    <Layout location={props.location}>
      <Seo title="Studio" />
      <Container>
        <div className={styles.paragraph}>
          <div
            dangerouslySetInnerHTML={{
              __html: project.body.childMarkdownRemark.html,
            }}
          ></div>
          <a
            className={styles.link}
            target="_blank"
            rel="noreferrer"
            href="https://kalmthout.be/wp-content/uploads/2022/02/Gebruikersovereenkomst-BOX-studio.pdf"
          >
            Download de overeenkomst.
          </a>
        </div>

        {posts?.length > 0 && (
          <>
            <h2>Gerelateerde evenementen</h2>
            <EventPreview posts={posts} />
          </>
        )}
      </Container>
    </Layout>
  )
}

export default StudioIndex

export const pageQuery = graphql`
  query StudioIndexQuery {
    contentfulProject(title: { eq: "BOX Studio" }) {
      title
      slug
      color {
        value
      }
      body {
        childMarkdownRemark {
          html
        }
      }
    }
    allContentfulEvent(
      sort: { publishDate: ASC }
      limit: 15
      filter: {
        isFuture: { eq: true }
        project: { title: { eq: "BOX Studio" } }
      }
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
