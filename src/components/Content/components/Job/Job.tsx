import React from "react"
import { animated, config, useTransition } from "@react-spring/web"

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
  id,
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
JobProps): JSX.Element => {
  const transitions = useTransition(null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    config: config.gentle
  })

  return transitions(animation => (
    <animated.article key={id} style={animation} className={styles.article}>
      <Image alt={company} src={company_logo} />
      <TitleSection company={company} position={position} location={location} />
      <TagsSection tags={tags} />
      <ApplySection applyUrl={apply_url} />
    </animated.article>
  ))
}

export default Job
