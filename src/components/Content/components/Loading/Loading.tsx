import React from "react"

import { Skeleton } from "./components"

import styles from "./loading.module.css"

const Loading = (): JSX.Element => (
  <div className={styles.div}>
    {[...Array(7).keys()].map(i => (
      <Skeleton key={i} />
    ))}
  </div>
)

export default Loading
