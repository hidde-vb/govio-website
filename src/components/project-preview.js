import React, { useState } from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import Container from './container'
import * as styles from './project-preview.module.css'

const PreviewElement = ({ project }) => {
  const [hover, setHover] = useState(false)

  const hoverCaptionStyle = { color: project?.color?.value || '#1effc8' }
  const hoverPreviewStyle = { outlineColor: project?.color?.value || '#1effc8' }

  return (
    <li
      key={project.slug}
      className={styles.projectPreview}
      style={hover ? hoverPreviewStyle : null}
      onMouseEnter={() => {
        setHover(true)
      }}
      onMouseLeave={() => {
        setHover(false)
      }}
    >
      <Link to={`/project/${project.slug}`}>
        <GatsbyImage alt={project.title} image={project.heroImage.gatsbyImage} />
        <div className={styles.caption}>
          <h2 className={styles.title} style={hover ? hoverCaptionStyle : null}>
            {project.title}
          </h2>
        </div>
      </Link>
    </li>
  )
}

const ProjectPreview = ({ projects }) => {
  if (!projects) return null
  if (!Array.isArray(projects)) return null

  return (
    <Container>
      <ul className={styles.articleList}>
        {projects.map((project) => {
          return <PreviewElement project={project} />
        })}
      </ul>
    </Container>
  )
}

export default ProjectPreview
