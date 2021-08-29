import React from "react"

import { Link } from "atoms"

import styles from "./sourceLink.module.css"

const SourceLink = (): JSX.Element => (
  <span className={styles.span}>
    Data source{" "}
    <Link href="https://remoteok.io/" external target="_blank" rel="noopener">
      remoteok.io
    </Link>
  </span>
)

export default SourceLink
