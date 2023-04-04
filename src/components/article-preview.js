import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { renderRichText } from 'gatsby-source-contentful/rich-text'

import Container from './container'
import Tags from './tags'
import * as styles from './article-preview.module.css'

const ArticlePreview = ({ posts }) => {
  if (!posts) return null
  if (!Array.isArray(posts)) return null

  return (
    <Container>
      <ul className={styles.articleList}>
        {posts.map((post) => {
          return (
            <li key={post.slug} className={styles.articlePreview}>
              <Link to={`/blog/${post.slug}`}>
                <div>
                  <GatsbyImage className={styles.image} alt={styles.title} image={post.heroImage.gatsbyImage} />
                  <div className={styles.caption}>
                    <h2 className={styles.title}>{post.title}</h2>
                    <p className={styles.subtitle}>{post.publishDate}</p>
                  </div>
                </div>
              </Link>
            </li>
          )
        })}
      </ul>
    </Container>
  )
}

export default ArticlePreview
