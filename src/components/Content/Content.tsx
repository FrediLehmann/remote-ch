import React, { useState, useEffect } from "react"

import { jobs as jobs_mock } from "./__mock__/data"
import { SourceLink, Job } from "./components"

import styles from "./content.module.css"

const Content = (): JSX.Element => {
  const [jobs, setJobs] = useState([])

  useEffect(() => {
    const fetchJobs = async () => {
      // Request
      // const jobs = await (await fetch("https://remoteok.io/api")).json()
      jobs_mock.shift()
      console.log(jobs_mock)
      setJobs(jobs_mock)
    }

    fetchJobs()
  }, [])

  return (
    <main className={styles.main}>
      <SourceLink />
      {jobs.map(job => (
        <Job key={job.id} {...job} />
      ))}
    </main>
  )
}

export default Content
