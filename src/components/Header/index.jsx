import React from 'react'
import logoClara from '../../assets/logoClara.png'
import { FiLogOut } from 'react-icons/fi'
import { provider } from '../../services/auth'
import { useNavigate } from 'react-router'


import styles from './styles.module.scss'

export function Header() {
  const history = useNavigate()

  const logout = () => {
    provider.signout()
    history('/')
  }
  return (
    <div>
      <header className={styles.header}>
      <img src={logoClara} alt="IndustriAll" />
      <div className={styles.logout} onClick={logout}>
        <FiLogOut size={25}/>
      </div>
      </header>
    </div>
  )
}