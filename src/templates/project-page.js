import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'

import Container from '../components/container'
import Seo from '../components/seo'
import Layout from '../components/layout'
import Hero from '../components/hero'
import * as styles from './pages.module.css'

class projectPageTemplate extends React.Component {
  render() {
    const post = get(this.props, 'data.contentfulProject')

    return (
      <Layout location={this.props.location}>
        <Seo title={post.title} image={`http:${post.heroImage.resize.src}`} />
        <Container>
          <Link to="projecten" rel="prev">
            ← projecten
          </Link>
        </Container>
        <Hero image={post.heroImage?.gatsbyImage} title={post.title} />
        <div className={styles.container}>
          <span className={styles.meta}>{post.author?.name} &middot; </span>
          <div className={styles.article}>
            <div
              className={styles.body}
              dangerouslySetInnerHTML={{
                __html: post.body.childMarkdownRemark.html,
              }}
            />
          </div>
        </div>
      </Layout>
    )
  }
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
