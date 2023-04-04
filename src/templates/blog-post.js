import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'

import Seo from '../components/seo'
import Layout from '../components/layout'
import Hero from '../components/hero'
import Tags from '../components/tags'
import * as styles from './blog-post.module.css'

class BlogPostTemplate extends React.Component {
  render() {
    const post = get(this.props, 'data.contentfulEvent')
    const previous = get(this.props, 'data.previous')
    const next = get(this.props, 'data.next')

    return (
      <Layout location={this.props.location}>
        <Seo title={post.title} image={`http:${post.heroImage.resize.src}`} />
        <Hero image={post.heroImage?.gatsbyImage} title={post.title} />
        <div className={styles.container}>
          <span className={styles.meta}>{post.author?.name} &middot; </span>
          <div className={styles.article}>
            <div
              className={styles.body}
              dangerouslySetInnerHTML={{
                __html: post.body.childMarkdownRemark.html,
              }}
            ></div>
            <Tags tags={post.tags} />
            {(previous || next) && (
              <nav>
                <ul className={styles.articleNavigation}>
                  {previous && (
                    <li>
                      <Link to={`/blog/${previous.slug}`} rel="prev">
                        ← {previous.title}
                      </Link>
                    </li>
                  )}
                  {next && (
                    <li>
                      <Link to={`/blog/${next.slug}`} rel="next">
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
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
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
