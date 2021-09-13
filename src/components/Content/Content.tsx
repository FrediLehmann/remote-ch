import React, { useState, useEffect } from "react"

import { SourceLink, Job, Loading, LoadError } from "./components"

import styles from "./content.module.css"

const Content = (): JSX.Element => {
  const [jobs, setJobs] = useState([])
  const [loadError, setLoadError] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await (await fetch("/jobs.json")).json()
        setJobs(data)
      } catch (e) {
        setLoadError(true)
      }
    }

    fetchData()
  }, [])

  return (
    <main className={styles.main}>
      <SourceLink />
      {loadError && <LoadError />}
      {!loadError && jobs.length === 0 && <Loading />}
      {!loadError && jobs.map(job => <Job key={job.id} {...job} />)}
    </main>
  )
}

export default Content
