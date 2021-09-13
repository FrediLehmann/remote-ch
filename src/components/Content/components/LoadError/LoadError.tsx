import React from "react"

import styles from "./loadError.module.css"

const LoadError = (): JSX.Element => (
  <section className={styles.section}>
    <p className={styles.p1}>
      Ups... It seems we have trouble loading the data!
    </p>
    <p className={styles.p2}>Try to reload the page or come back later.</p>
  </section>
)

export default LoadError
