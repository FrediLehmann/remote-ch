import React from 'react'

import styles from './titleSection.module.css'

interface TitleSectionProps {
  company: string
  position: string
}

const TitleSection = ({
  company,
  position
}: TitleSectionProps): JSX.Element => (
  <div>
    <h3 className={styles.h2}>{company}</h3>
    <h2 className={styles.h2}>{position}</h2>
  </div>
)

export default TitleSection
