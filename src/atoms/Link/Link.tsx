import React from 'react'
import { HiExternalLink } from 'react-icons/hi'

import styles from './link.module.css'

interface LinkProps {
  href: string
  hreflang?: string
  rel?: string
  external?: boolean
  target?: string
  children: React.ReactNode
}

const Link = ({
  href,
  hreflang,
  rel,
  external,
  target,
  children
}: LinkProps): JSX.Element => (
  <a
    className={styles.a}
    data-external={external}
    href={href}
    hrefLang={hreflang}
    rel={rel || (external && 'external')}
    target={target}>
    {children}
    {external && <HiExternalLink className={styles.svg} />}
  </a>
)

export default Link
