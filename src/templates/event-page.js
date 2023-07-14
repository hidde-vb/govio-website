import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'

import Seo from '../components/seo'
import Layout from '../components/layout'
import Hero from '../components/hero'
import * as styles from './pages.module.css'

const EventPageTemplate = (props) => {
  const event = get(props, 'data.contentfulEvent')
  const previous = get(props, 'data.previous')
  const next = get(props, 'data.next')

  const projectStyle = { backgroundColor: event.project?.color.value }

  return (
    <Layout location={props.location}>
      <Seo title={event.title} image={`http:${event.heroImage.resize.src}`} />
      <Hero image={event.heroImage?.gatsbyImage} title={event.title} />
      <div className={styles.container}>
        <div className={styles.article}>
          <div className={styles.meta}>
            {event.author && <span>door {event.author.name}</span>}
            {event.project && (
              <span className={styles.projectText} style={projectStyle}>
                {event.project.title}
              </span>
            )}
          </div>
          <div
            className={styles.body}
            dangerouslySetInnerHTML={{
              __html: event.body.childMarkdownRemark.html,
            }}
          ></div>
          {(previous || next) && (
            <nav>
              <ul className={styles.articleNavigation}>
                {previous && (
                  <li>
                    <Link to={`/event/${previous.slug}`} rel="prev">
                      ← {previous.title}
                    </Link>
                  </li>
                )}
                {next && (
                  <li>
                    <Link to={`/event/${next.slug}`} rel="next">
                      {next.title} →
                    </Link>
                  </li>
                )}
              </ul>
            </nav>
          )}
        </div>
      </div>
    </Layout>
  )
}

export default EventPageTemplate

export const pageQuery = graphql`
  query EventPageBySlug(
    $slug: String!
    $previousPostSlug: String
    $nextPostSlug: String
  ) {
    contentfulEvent(slug: { eq: $slug }) {
      slug
      title
      author {
        name
      }
      project {
        title
        color {
          value
        }
      }
      body {
        childMarkdownRemark {
          html
        }
      }
      publishDate(formatString: "MMMM Do, YYYY")
      rawDate: publishDate
      heroImage {
        gatsbyImage(layout: FULL_WIDTH, placeholder: BLURRED, width: 1280)
        resize(height: 630, width: 1200) {
          src
        }
      }
    }
    previous: contentfulEvent(slug: { eq: $previousPostSlug }) {
      slug
      title
    }
    next: contentfulEvent(slug: { eq: $nextPostSlug }) {
      slug
      title
    }
  }
`
