import React from 'react'

import Container from '../components/container'
import Layout from '../components/layout'
import Seo from '../components/seo'

import * as styles from './organiseren.module.css'

const OrganiserenIndex = (props) => {
  return (
    <Layout location={props.location}>
      <Seo title="Organiseren" />
      <Container>
        <div className="two-columns">
          <h2>Govio organiseert</h2>
          <div className="two-columns__text">
            <p>
              Als vereniging organiseert Govio eigen events, zoals bijvoorbeeld
              Double Invasion, BandNight, Unloaded, Dubville, Teknoscope.... Met
              heel de bende spelen we in op een behoefte, lanceren we het event
              dat nog keihard mist in de regio, regelen we een unieke
              programmatie of starten we een nieuw concept. Maf, toch?!
            </p>
          </div>
        </div>
        <div className="two-columns">
          <h2>Govio ’s got your back</h2>
          <div className="two-columns__text">
            <p>
              Wil je een nieuw eventconcept opstarten, je eigen label lanceren,
              heb je een stevige crew dat wilt (leren) organiseren…? Laat iets
              weten! Govio biedt ondersteuning aan startende organisatoren. Je
              krijgt al doende tips, tools en good practices meegegeven. Zo sta
              je sterker in je schoenen bij je eerste editie, en beperk je jouw
              (persoonlijke) (financiële) risico’s.
            </p>
          </div>
        </div>
        <div className="two-columns">
          <h2>Verhuur</h2>
          <div className="two-columns__text">
            <p>
              Als erkende vereniging kan je de zaal van de Govio ‘afhuren’. Je
              kan dit doen voor een feestje, een netwerkmoment… enzovoort. Ben
              je een particulier (privépersoon) of een bedrijf? Helaas
              pindakaas! Dat is niet mogelijk. Het jeugdhuis is écht voor
              jongereninitiatieven. Ben je dus een scouts, chiro, middelbare
              school, turnclub, erkende vzw? Je kan gebruikmaken van de zaal aan
              een democratische prijs, en je kan ook steeds terecht bij de
              beroepskrachten voor tips en tricks.
            </p>
            <p>
              Wil je meer info? Mail naar
              <a className="link" href="mailto:info@govio.be">
                {' '}
                info@govio.be
              </a>
              .
            </p>
          </div>
        </div>
        <div className="two-columns">
          <h2>Sweet 16–18–21–25... Kortom, je bdayparty!</h2>
          <div className="two-columns__text">
            <p>
              Je bent jarig en wil dat vieren met ieeedereen die je liefhebt.
              Yes, dat kan! Iedere vrijdag is onze bar open. Bar Goof heet het.
              Vrijwilligers houden de bar open en iedereen op zoek naar
              gezelligheid, leeftijdsgenoten of een lekker fris drankje is
              welkom. Tijdens BarGoof kan je je verjaardagsfeest organiseren:
              jij kiest de muziek (afspeellijst/dj), de decoratie, en als je je
              vrienden wil trakteren kan je dat op voorhand afspreken met de
              beroepskracht. Zie “contact”.
            </p>
          </div>
        </div>
      </Container>
      <Container>
        <div className="two-columns">
          <div className="two-columns__text">
            <h1>Uitleendienst</h1>
            <p>
              Gemeente Kalmthout stelt een volledige licht- en
              geluidsinstallatie ter beschikking voor alle Kalmthoutse
              verenigingen. Je kan de installatie volledig gratis gebruiken
              (zelf ophalen en terugbrengen). Jeugdhuis Govio beheert deze
              installatie.
            </p>
            <a
              target="_blank"
              href="https://docs.google.com/forms/d/e/1FAIpQLSc-Lf47rTm5NYSVbp7UvuJSqjnjaFI8ZnvJze-ACV1kd9e9Iw/viewform"
            >
              <div className="button">Aanvraag indienen</div>
            </a>
          </div>
          <div>
            <div className={styles.list}>
              <a
                href="http://www.govio.be/doc/technische-fiche.pdf"
                target="_blank"
                rel="noreferrer"
              >
                <div className={`${styles.block} ${styles.block__1}`}>
                  Technische Fiche
                </div>
              </a>
              <a
                href="http://www.govio.be/doc/algemene-voorwaarden.pdf"
                target="_blank"
                rel="noreferrer"
              >
                <div className={`${styles.block} ${styles.block__2}`}>
                  Algemene Voorwaarden
                </div>
              </a>
              <a
                href="http://www.govio.be/doc/handleiding.pdf"
                target="_blank"
                rel="noreferrer"
              >
                <div className={styles.block}>Volledige Handleiding</div>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  )
}

export default OrganiserenIndex
