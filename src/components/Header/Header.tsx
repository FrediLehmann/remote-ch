import React from "react"

import { Logo } from "./Logo"
import styles from "./header.module.css"

const Header = (): JSX.Element => (
  <header className={styles.header}>
    <Logo />
    <h1 className={styles.h1}>remote-ch</h1>
  </header>
)

export default Header
