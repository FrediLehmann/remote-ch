import React from 'react'

import styles from './tag.module.css'

interface TagProps {
  children: string
}

const Tag = ({ children }: TagProps): JSX.Element => (
  <button className={styles.button}>{children}</button>
)

export default Tag
