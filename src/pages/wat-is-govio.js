import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import get from 'lodash/get'
import React from 'react'

import Container from '../components/container'
import Layout from '../components/layout'
import Marquee from '../components/marquee'
import MemberButton from '../components/memberButton'
import Seo from '../components/seo'

const WatIsGovioIndex = (props) => {
  const config = get(props, 'data.contentfulConfiguration')
  const BarGoofProject = get(props, 'data.contentfulProject')

  return (
    <Layout>
      <Seo title="Wat is Govio" />

      <Container>
        <div className="two-columns">
          <GatsbyImage
            className="image"
            alt="Home"
            image={config.heroImage.gatsbyImage}
          />
          <div className="two-columns__text">
            Jeugdhuis Govio is een open plaats waar alle jongeren welkom zijn om
            zich te ontwikkelen. We zijn een ontmoetingsplaats waar je even
            helemaal niets kan komen doen, of net een heel project op poten kan
            zetten. Naar jou wordt er geluisterd, er is oor naar je ideeën. Het
            jeugdhuis wordt volledig gedragen door vrijwillig engagement, dus
            alle activiteiten (feestjes, uitstappen, baravonden…) zijn door
            jongeren georganiseerd vanuit een eigen passie voor het onderwerp.
            Alle activiteiten zijn steeds voor mensen tussen 16 en 31 jaar.
            Zowel bezoekers als vrijwilligers zijn welkom zoals ze zijn,
            ongeacht <i>uiterlijk</i>,{' '}
            <span className="org-orange">geaardheid</span>, <b>vorm</b>,{' '}
            <u>religie</u>, of <span className="org-blue">kleur</span>. You do
            you!
          </div>
        </div>
      </Container>

      <Marquee content="Bar.Goof.Bar.Goof" />

      <Container>
        <div className="two-columns">
          <div>
            <div
              dangerouslySetInnerHTML={{
                __html: BarGoofProject.body.childMarkdownRemark.html,
              }}
            />
            <MemberButton />
          </div>
          <GatsbyImage
            className="image"
            alt="Home"
            image={BarGoofProject.heroImage.gatsbyImage}
          />
        </div>
      </Container>
    </Layout>
  )
}

export default WatIsGovioIndex

export const pageQuery = graphql`
  query StudioIndexQuery {
    contentfulProject(title: { eq: "Bar Goof" }) {
      body {
        childMarkdownRemark {
          html
        }
      }
      heroImage {
        gatsbyImage(layout: FULL_WIDTH, placeholder: BLURRED, width: 1280)
        resize(width: 400, height: 300) {
          src
        }
      }
    }
    contentfulConfiguration(title: { eq: "Home" }) {
      heroImage {
        gatsbyImage(
          layout: FULL_WIDTH
          placeholder: DOMINANT_COLOR
          width: 400
          height: 300
        )
      }
    }
  }
`
