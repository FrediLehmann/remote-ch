import React from "react"

import { Image, TitleSection, TagsSection } from "./components"
import styles from "./job.module.css"

interface JobProps {
  id: string
  slug: string
  epoch: string
  date: string
  company: string
  company_logo: string
  position: string
  description: string
  tags: string[]
  logo: string
  location: string
  url: string
  apply_url: string
}

const Job = ({
  //   id,
  //   slug,
  //   epoch,
  //   date,
  company,
  company_logo,
  position,
  //   description,
  tags
}: //   logo,
//   location,
//   url,
//   apply_url
JobProps): JSX.Element => (
  <article className={styles.article}>
    <Image alt={company} src={company_logo} />
    <TitleSection company={company} position={position} />
    <TagsSection tags={tags} />
  </article>
)

export default Job
