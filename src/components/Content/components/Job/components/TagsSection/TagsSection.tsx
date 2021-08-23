import React from "react"

import { Tag } from "atoms"

import styles from "./tagsSection.module.css"

interface TagsSectionProps {
  tags: string[]
}

const TagsSection = ({ tags }: TagsSectionProps): JSX.Element => (
  <div className={styles.div}>
    {tags.map(tag => (
      <Tag key={tag}>{tag}</Tag>
    ))}
  </div>
)

export default TagsSection
