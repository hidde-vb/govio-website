import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import get from 'lodash/get'
import React from 'react'


import Container from '../components/container'
import Layout from '../components/layout'
import Marquee from '../components/marquee'
import MemberButton from '../components/memberButton'
import PersonList from '../components/person-list'
import Seo from '../components/seo'

const TeamIndex = (props) => {
  const people = get(props, 'data.allContentfulPerson.nodes')
  const config = get(props, 'data.contentfulConfiguration')

  const BKs = people.filter((people) => people.title === 'BK')
  const Bestuur = people.filter((people) => people.title === 'Bestuur')

  return (
    <Layout>
      <Seo title="Team" />

      <Marquee content="Vrijwilligers." />
      <Container>
        <p>
          Het jeugdhuis wordt volledig gedragen door vrijwilligers. Is de bar
          open? Kom je naar een event? Zie je reclame op de weg of vind je een
          poster mooi? Dat is allemaal te danken aan het sterk team van
          vrijwilligers. Zij zorgen ervoor dat het steeds aangenaam vertroeven
          is in de Govio. Ieder engagement is zonder verplichtingen en volledig
          vanuit eigen initiatief. Jij bent 1000% welkom om deel uit te maken
          van het team! De <span className="org-blue">blauwe</span>,{' '}
          <span className="org-purple">paarse</span>,{' '}
          <span className="org-orange">oranje</span> en{' '}
          <span className="org-purple-2">donkerpaarse</span> bol op de foto
          hieronder worden uitgevoerd door de leden. Zij zijn dus dé bazen van’t
          jeugdhuis! Voor ieder evenement zijn we steeds opzoek naar:
        </p>

        <div className="two-columns">
          <h3>Inkommedewerkers</h3>
          <div className="two-columns__text">
            Je bent het allereerste contact wanneer een bezoeker langskomt! Je
            ontvangt de bezoekers door hun inkomticket aan te nemen en wijst hen
            de weg.
          </div>
        </div>
        <div className="two-columns">
          <h3>Bonnenmedewerkers</h3>
          <div className="two-columns__text">
            Kom je graag rechtstreeks in contact met de bezoekers, en ben je
            goed met cijfers? Let’s go!
          </div>
        </div>
        <div className="two-columns">
          <h3>Barmedewerkers</h3>
          <div className="two-columns__text">
            Tap je de perfecte pint met je ogen dicht, of wil je dat graag
            leren? Voorzie je graag mensen van lekkere drankjes? Dat kan!!
          </div>
        </div>
        <div className="two-columns">
          <h3>Stagehand</h3>
          <div className="two-columns__text">
            Je helpt de bands, en helpt de geluidstechnieker (o.a. met de
            soundcheck). Je zorgt er ook voor dat de change-overs tussen bands
            vlot verlopen. 4x/jaar tijdens Bandnight, of tijdens een jamsessie.
            Je kan dit ook leren!
          </div>
        </div>
        <div className="two-columns">
          <h3>Opbouwer/Afbreker</h3>
          <div className="two-columns__text">
            Jij richt de zaal in, zet de bar klaar, bouwt het evenement mee op.
            Of andersom: jij ruimt op na het feestje.
          </div>
        </div>
        <div className="two-columns">
          <h3>Promoteam</h3>
          <div className="two-columns__text">
            Geen concerten zonder publiek! Daarom verspreidt ons promoteam
            affiches en flyers op tal van plaatsen (concerten, jeugdhuizen,
            jongerencafés...) in Antwerpen en in de rest van Vlaanderen en
            Brussel. Een shift duurt doorgaans gemiddeld twee uur. In ruil mag
            je gratis het evenement bijwonen én krijg je drie gratis
            consumpties. Je leert functioneren in een team, ontmoet fijne mensen
            en leert organiseren. Daarnaast amuseer je je rot met het team!
          </div>
        </div>
        <MemberButton />
        <GatsbyImage
          style={{ maxWidth: '768px', margin: '2rem auto', border: '0' }}
          className="image"
          alt="Home"
          image={config.organogram.gatsbyImage}
        />
      </Container>

      <Marquee content="Bestuur.Bestuur" />
      <Container>
        De grootste jeugdhuisharten staan letterlijk aan het stuur van de
        vereniging. Ze beheren de vzw (wetgeving), de boekhouding, begroting en
        financiën, personeelsbeheer en (grote) infrastructuurplannen, maar
        zetten voornamelijk de volgende grote lijnen uit en zetten hun breinen
        in op de grootste uitdagingen. Heb je tips of belangrijke opmerkingen?
        Laat het hen weten! Wie zit er eigenlijk in het bestuur?
      </Container>
      <PersonList persons={Bestuur} />

      <Marquee content="Beroepskrachten." />

      {config.vacature && config.vacatureText && (
        <Container>
          <div
            className="news"
            dangerouslySetInnerHTML={{
              __html: config.vacatureText.childMarkdownRemark.html,
            }}
          />
        </Container>
      )}

      <Container>
        Er komt natuurlijk veel kijken bij het reilen en zeilen van het
        jeugdhuis. Naast de algemene werking zijn er ook een aantal bovenlokale
        projecten gaande. Om dit in goede banen te leiden, werken er twee
        voltijdse beroepskrachten voor de Govio. Zij zijn een belangrijk
        aanspreekpunt en bij hen kan je terecht voor al je vragen, raad, ideeën,
        frustraties, of plannen en dromen. Zij helpen je verder! Wie zijn ze?
      </Container>
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
        shortBio {
          childMarkdownRemark {
            html
          }
        }
        image {
          gatsbyImage(layout: FULL_WIDTH, width: 424, height: 318)
        }
      }
    }
    contentfulConfiguration(title: { eq: "Home" }) {
      organogram {
        gatsbyImage(
          layout: FULL_WIDTH
          placeholder: BLURRED
          width: 1024
          height: 576
        )
      }
      vacature
      vacatureText {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
