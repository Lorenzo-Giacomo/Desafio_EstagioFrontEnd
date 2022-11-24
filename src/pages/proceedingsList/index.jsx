import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Header } from "../../components/Header"
import api from "../../services/api"
import styles from './styles.module.scss'
import { config } from "../../services/auth"
import viewIcon from '../../assets/viewIcon.png'
import exclude from '../../assets/exclude.png'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

const _ = require("lodash"); 

export function ProceedingsList() {
  const [atas, setAtas] = useState([])

  useEffect(() => {
    api.get('/Atas', config).then(response => {
      setAtas(response.data)
    })
  }, [])
 
   const groups = _.chain(atas).groupBy('tipoReuniao').map((value, key) => ({
    tipoReuniao: key,
    value: value
    
  })).value()

  function formatData(datatime) {
    const newData = format(datatime, 'dd/MM/y', { locale: ptBR })
    return newData
  }

  function formatTime(datatime) {
    const newTime = format(datatime, 'kk:mm', { locale: ptBR })
    return newTime
  }

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
          {groups.map(ata => {
            console.log(ata)
            return (
              <div key={ata.id}>
                <h2>{ata.tipoReuniao}</h2>
                
                <div className={styles.atasList}>
                  {ata.value.map(value => {
                    return (
                      <div key={value.id} className={styles.ataCard} >
                        <div className={styles.ataInfos}>
                          <h4>{value.titulo}</h4>
                          <p> {formatData(new Date(value.dataInicio))} às {formatTime(new Date(value.dataInicio))}, na {value.local}</p>
                        </div>
                        <div className={styles.ataIcons}>
                          <span >
                            <img src={viewIcon} alt="Ver ata"/>
                          </span>
                          <span >
                            <img src={exclude} alt="Excluir ata"/>
                          </span>
                        </div>
                      </div>
                    )
                  })}

                </div>
              
              </div>
            )
          })}
        </section>
      </div>
    </div>
  )
}