import React from "react"

import styles from "./titleSection.module.css"

interface TitleSectionProps {
  company: string
  position: string
  location: string
}

const TitleSection = ({
  company,
  position,
  location
}: TitleSectionProps): JSX.Element => (
  <div className={styles.div}>
    <h2 className={styles.h2}>{company}</h2>
    <h3 className={styles.h3}>{position}</h3>
    {location && <p className={styles.p}>{location}</p>}
  </div>
)

export default TitleSection
