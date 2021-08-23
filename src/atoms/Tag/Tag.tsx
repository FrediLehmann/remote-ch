import React from "react"

import styles from "./tag.module.css"

interface TagProps {
  children: string
}

const Tag = ({ children, ...bulk }: TagProps): JSX.Element => (
  <button className={styles.button} {...bulk}>
    {children}
  </button>
)

export default Tag
