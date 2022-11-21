import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import { Header } from "../../components/Header"
import api from "../../services/api"
import styles from './styles.module.scss'

export function ProceedingsList() {

  const tokenAuthorization = localStorage.getItem('@APP-AUTHORIZATION')
  useEffect(() => {
    let config = { headers: { Authorization: `Bearer ${tokenAuthorization}` } }

    api.get('/atas', config).then(response => {
      console.log(response.data)
    })
  })

  return (
    <div>
      <Header/>
      <div className={styles.mainContainer}>
        <section className={styles.topInfos}>
          <div>
            <h1>Atas de Reunião</h1>
            <p>Estas são as atas das últimas reuniões</p>
          </div>
          <Link to="/atas-form">
          <button>+ Nova ATA</button>
          </Link>
        </section>
        <section className={styles.listContainer}>
          {/* // separar em componentes */}
          <div className={styles.OKRsFollowing}>
            <h2>Acompanhamento de OKRs (Objectives and Key Results)</h2>
          </div>
          <div>
            <h2>Daily Scrum</h2>
          </div>
          <div>
            <h2>Resumida</h2>
          </div>
          <div>
            <h2>Sprint Retrospective</h2>
          </div>
        </section>
      </div>
    </div>
  )
}