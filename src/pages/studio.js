import { graphql } from 'gatsby'
import get from 'lodash/get'
import React from 'react'

import Container from '../components/container'
import EventPreview from '../components/event-preview'
import Layout from '../components/layout'
import Seo from '../components/seo'

import * as styles from './studio.module.css'

const StudioIndex = (props) => {
  const studioProject = get(props, 'data.contentfulProject')
  const studioEvents = get(props, 'data.allContentfulEvent.nodes')

  return (
    <Layout location={props.location}>
      <Seo title="Studio" />
      <Container>
        <div className="paragraph">
          <div
            dangerouslySetInnerHTML={{
              __html: studioProject.body.childMarkdownRemark.html,
            }}
          ></div>
          <a
            className={styles.link}
            href="http://www.govio.be/doc/gebruikersovereenkomst-box.pdf"
            target="_blank"
          >
            Download de overeenkomst.
          </a>
        </div>

        {studioEvents?.length > 0 && (
          <>
            <h2>Gerelateerde evenementen</h2>
            <EventPreview events={studioEvents} />
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
