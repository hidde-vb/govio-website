import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'

import Container from '../components/container'
import Seo from '../components/seo'
import Layout from '../components/layout'
import Hero from '../components/hero'
import * as styles from './pages.module.css'

const projectPageTemplate = (props) => {
  const project = get(props, 'data.contentfulProject')

  return (
    <Layout location={props.location}>
      <Seo
        title={project.title}
        image={`http:${project.heroImage.resize.src}`}
      />
      <Container>
        <Link to="projecten" rel="prev">
          ← projecten
        </Link>
      </Container>
      <Hero image={project.heroImage?.gatsbyImage} title={project.title} />
      <div className={styles.container}>
        <div className={styles.meta}>
          {project.author && <span>door {project.author.name}</span>}
        </div>
        <div className={styles.article}>
          <div
            className={styles.body}
            dangerouslySetInnerHTML={{
              __html: project.body.childMarkdownRemark.html,
            }}
          />
        </div>
      </div>
    </Layout>
  )
}

export default projectPageTemplate

export const pageQuery = graphql`
  query ProjectPageBySlug($slug: String!) {
    contentfulProject(slug: { eq: $slug }) {
      slug
      title
      body {
        childMarkdownRemark {
          html
        }
      }
      heroImage {
        gatsbyImage(layout: FULL_WIDTH, placeholder: BLURRED, width: 1280)
        resize(height: 630, width: 1200) {
          src
        }
      }
    }
  }
`
