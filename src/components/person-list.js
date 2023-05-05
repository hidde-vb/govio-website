import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'

import Container from './container'
import * as styles from './person-list.module.css'

const PersonList = ({ persons }) => (
  <Container>
    <ul className={styles.personList}>
      {persons.map((person) => {
        return (
          <li key={person.name} className={styles.personPreview}>
            <div>
              <GatsbyImage
                className={styles.image}
                alt={person.title}
                image={person.image.gatsbyImage}
              />
              <div className={styles.caption}>
                <h2>{person.name}</h2>
              </div>
            </div>
          </li>
        )
      })}
    </ul>
  </Container>
)

export default PersonList
