import { graphql } from 'gatsby'
import get from 'lodash/get'
import React from 'react'

import Container from '../components/container'
import Layout from '../components/layout'
import Marquee from '../components/marquee'
import ProjectPreview from '../components/project-preview'
import Seo from '../components/seo'

const ProjectsIndex = (props) => {
  const projects = get(props, 'data.allContentfulProject.nodes')
  
  return (
    <Layout>
      <Seo title="Projecten" />
      <Marquee content=".Projects" />
      <Container>
        <p>
          Het jeugdhuis is zooooveel meer dan tooghangen en feesten! Hier word
          je geprikkeld om te experimenteren met wat jou interesseert. Hier heb
          je de ruimte en mogelijkheden om zoveel uit te proberen, op je bek te
          gaan en weer verder te wandelen! In functie daarvan zijn er een aantal
          projecten gaande.
        </p>
      </Container>
      <ProjectPreview projects={projects}/>
    </Layout>
  )
}

export default ProjectsIndex

export const pageQuery = graphql`
  query TeamIndexQuery {
    allContentfulProject(
      limit: 15
    ) {
      nodes {
        title
        slug
        color {
          value
        }
        heroImage {
          gatsbyImage(
            layout: FULL_WIDTH
            placeholder: DOMINANT_COLOR
            width: 400
            height: 225
          )
        }
      }
    }
  }
`
