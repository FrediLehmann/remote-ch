import React from "react"

import styles from "./applySection.module.css"

interface ApplySectionProps {
  applyUrl: string
}

const ApplySection = ({ applyUrl }: ApplySectionProps): JSX.Element => (
  <a
    className={styles.a}
    href={applyUrl}
    hrefLang="en"
    rel="external noreferrer"
    target="_blank">
    Apply
  </a>
)

export default ApplySection
