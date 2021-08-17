import React from 'react'

import styles from './image.module.css'

interface ImageProps {
  alt: string
  src: string
}

const Image = ({ alt, src }: ImageProps): JSX.Element => (
  <picture>
    <img className={styles.img} alt={alt} src={src} loading='lazy' />
  </picture>
)

export default Image
