import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import Hero from '../components/hero'
import Navigation from '../components/navigation'
import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')
    const [config] = get(this, 'props.data.allContentfulConfig.edges')

    return (
      <>
        <Helmet title={siteTitle}></Helmet>
        <Navigation />
        <Hero image={config.node} />
        <Layout location={this.props.location}>
          <div className="container">
            <div className="wrapper">
              <h1>Jeugdhuis Govio</h1>
              <p>Jeugdhuis Govio is in de eerste plaats een ontmoetingsplek voor jongeren. Vanaf het jaar dat je 16 wordt, kan je in het café binnenspringen voor een babbeltje of om iets te drinken. Wat je ook gelooft of hoe je er ook uitziet, iedereen is welkom. Het zijn de jongeren zelf die het jeugdhuis draaiende houden. Het zijn zij die bepalen wat er gebeurt. Iedereen die wil, kan meehelpen in het jeugdhuis.</p>
            </div>
            <div className="wrapper">
              <h2 className="section-headline">Updates</h2>
              <ul className="article-list">
                {posts.map(({ node }) => {
                  return (
                    <li key={node.slug}>
                      <ArticlePreview article={node} />
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </Layout>
      </>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {

    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
    allContentfulConfig(
      filter: { contentful_id: { eq: "6bt9soDWHg9WqCOuopsHTs" } }
    ) {
      edges {
        node {
          heroImage {
            fluid(
              maxWidth: 600
              background: "rgb:fff"
            ) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`
