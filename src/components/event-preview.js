import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import Container from './container'
import * as styles from './event-preview.module.css'

const EventPreview = ({ events }) => {
  if (!events || !Array.isArray(events)) return null

  return (
    <Container>
      <ul className={styles.articleList}>
        {events.map((post) => {
          return (
            <li key={post.slug} className={styles.eventPreview}>
              <Link to={`/event/${post.slug}`}>
                <div className={post.isFuture === false && styles.faded}>
                  <GatsbyImage alt={styles.title} image={post.heroImage.gatsbyImage} />
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

export default EventPreview
