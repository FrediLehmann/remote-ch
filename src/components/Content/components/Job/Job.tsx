import React from "react"

import { ApplySection, Image, TitleSection, TagsSection } from "./components"
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
  tags,
  apply_url,
  location
}: //   logo,
//   location,
//   url,
JobProps): JSX.Element => (
  <article className={styles.article}>
    <Image alt={company} src={company_logo} />
    <TitleSection company={company} position={position} location={location} />
    <TagsSection tags={tags} />
    <ApplySection applyUrl={apply_url} />
  </article>
)

export default Job
