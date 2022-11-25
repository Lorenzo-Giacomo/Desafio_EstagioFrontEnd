import React, { useEffect, useState } from "react"
import { Header } from "../../components/Header"
import styles from './styles.module.scss'
import { Link } from "react-router-dom"
import api from "../../services/api"
import { config } from "../../services/auth"
import { DynamicFields } from "../../components/MeetingFields"
import { InputText } from "../../components/InputText"
import { InputDate } from "../../components/InputDate" 
import { SelectField } from "../../components/Select"

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
              <InputText
                id={"titulo"}
                label={"Título *"}
                onChange={e => setTitulo(e.target.value)}
              />
              
              <SelectField
                id={"local"}
                label={"Local *"}
                options={placesList}
                onChange={e => setLocalId(e.value)}
              />

              <div className={styles.dateBox}>
                <InputDate
                  id={"dataInicio"}
                  label={"Data e Horário de Início *"}
                  onChange={e => setDataInicio(e.target.value)}
                />
                <InputDate
                  id={"dataFim"}
                  label={"Data e Horário de Fim"}
                  onChange={e => setDataInicio(e.target.value)}
                />
              </div>

              <SelectField
                id={"reuniao"}
                label={"Tipo de Reunião *"}
                options={typesOfMeetingsList}
                onChange={e => setTipoReuniaoId(e.value)}
              />
            </div>

            <div className={styles.meetingContent}>
            <h2>Conteúdo da Reunião</h2> 
              {tipoReuniaoId === 0 ? (
                <div className={styles.empityMeeting}>
                  <span>Selecione o Tipo de Reunião</span>
                </div>
              ) : (
                <DynamicFields 
                  id={tipoReuniaoId}
                />
              )}
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