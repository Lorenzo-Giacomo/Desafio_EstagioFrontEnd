import React from 'react'
import logoClara from '../../assets/logoClara.png'

import styles from './styles.module.scss'

export function Header() {
  return (
    <div>
      <header className={styles.header}>
      <img src={logoClara} alt="IndustriAll" />

      </header>
    </div>
  )
}