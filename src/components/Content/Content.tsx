import React, { useState, useEffect } from "react"

import { SourceLink, Job, Loading } from "./components"

import styles from "./content.module.css"

const Content = (): JSX.Element => {
  const [jobs, setJobs] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await (await fetch("/jobs.json")).json()
      setJobs(data)
    }

    fetchData()
  }, [])

  return (
    <main className={styles.main}>
      <SourceLink />
      {jobs.map(job => (
        <Job key={job.id} {...job} />
      ))}
      {jobs.length === 0 && <Loading />}
    </main>
  )
}

export default Content
