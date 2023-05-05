import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Seo from '../components/seo'
import Layout from '../components/layout'
import Marquee from '../components/marquee'
import PersonList from '../components/person-list'

const TeamIndex = (props) => {
  const people = get(props, 'data.allContentfulPerson.nodes')

  const BKs = people.filter((people) => (people.title = 'BK'))

  console.log(BKs)

  return (
    <Layout location={props.location}>
      <Seo title="Team" />
      <Marquee content="Medewerkers" />

      <Marquee content="BestuurBestuur" />
      <PersonList persons={BKs} />
    </Layout>
  )
}

export default TeamIndex

export const pageQuery = graphql`
  query TeamIndexQuery {
    allContentfulPerson {
      nodes {
        title
        name
        active
        image {
          gatsbyImage(
            layout: FULL_WIDTH
            width: 424
            height: 318
          )
        }
      }
    }
  }
`
