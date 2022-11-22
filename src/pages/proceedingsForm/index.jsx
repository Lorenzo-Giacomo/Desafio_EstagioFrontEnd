import React, { useEffect, useState } from "react"
import { Header } from "../../components/Header"
import styles from './styles.module.scss'
import Select from 'react-select'
import { Link } from "react-router-dom"
import api from "../../services/api"
import { config } from "../../services/auth"
import { DynamicFields } from "../../components/MeetingFields"


export function ProceedingsForm() {
  const [titulo, setTitulo] = useState("")
  const [dataInicio, setDataInicio] = useState("")
  const [dataFim, setDataFim] = useState("")
  const [tipoReuniaoId, setTipoReuniaoId] = useState(0)
  const [localId, setLocalId] = useState(0)
  const [camposAtaReuniao, setCamposAtaReuniao] = useState([])

  const [placesList, setPlacesList] = useState([])
  const [typesOfMeetingsList, setTypesOfMeetingsList] = useState([])

  useEffect(() => {
    api.get('/Locais', config).then(response => {
      setPlacesList(
        response.data.map(local => {
          return { value: local.id, label: local.nome}
        })
      )
    })

    api.get('/TiposReuniao', config).then(response => {
      setTypesOfMeetingsList(
        response.data.map(typeOfMeeting => {
          return { value: typeOfMeeting.id, label: typeOfMeeting.nome }
        })
      )
      // console.log(response.data)
    })
  }, [])

  function registerProceeding(e) {
    e.prevent.default()


  }
  return (
    <div>
      <Header/>
      <div className={styles.mainContainer}>

        <header>
          <h1>Nova Ata de Reunião</h1>
          <p>Os campos obrigatórios estão marcados com um asterisco (*)</p>
        </header>

        <div className={styles.formContainer}>
          <form>
            <h2>Identificação</h2>

            <div className={styles.identidyContainer}>

              <div className={styles.input}>
                <input 
                  type="text" 
                  id="titulo" 
                  placeholder=" "
                  onChange={e => setTitulo(e.target.value)}
                />
                <label for="titulo">Título *</label>
              </div>
              
              <div className={styles.select}>
                {/* ver doc: https://react-select.com/styles */}
                <Select 
                  placeholder=" "
                  options={placesList}
                  onChange={e => setLocalId(e.value)}
                />
                <label for="">Local *</label>
              </div>

              <div className={styles.dateBox}>
                <div className={styles.dateTime}>
                  <input 
                    type="datetime-local"  
                    id="dataInicio"
                    placeholder=" " 
                    required
                    onChange={e => setDataInicio(e.target.value)}
                    />
                  <label for="dataInicio">Data e Horário de Início *</label>
                </div>
                <div className={styles.dateTime}>
                  <input 
                    type="datetime-local"  
                    id="dataFim" 
                    placeholder=" " 
                    required
                    onChange={e => setDataFim(e.target.value)}
                    />
                  <label for="dataFim">Data e Horário de Fim </label>
                </div>
              </div>

              <div className={styles.select}>
                {/* ver doc: https://react-select.com/styles */}
                <Select 
                  placeholder=" "
                  options={typesOfMeetingsList}
                  onChange={e => setTipoReuniaoId(e.value)}

                />
                <label for="">Tipo de Reunião *</label>
              </div>

            </div>

            <h2>Conteúdo da Reunião</h2>
            <div className={styles.meetingContent}>
              <DynamicFields 
                id={tipoReuniaoId}
              />
            </div>

            <footer className={styles.buttonsContainer}>
              <Link to="/atas-list">
                <button>Cancelar</button>
              </Link>
              <button onClick={registerProceeding}>Salvar ATA</button>
            </footer>

          </form>
        </div>
      </div>
    </div>
  )
}