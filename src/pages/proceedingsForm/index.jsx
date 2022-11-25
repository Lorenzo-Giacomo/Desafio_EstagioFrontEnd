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
// import { useForm } from 'react-hook-form'


export function ProceedingsForm() {
  const [titulo, setTitulo] = useState("")
  // console.log(titulo)
  const [dataInicio, setDataInicio] = useState("")
  console.log(dataInicio)
  const [dataFim, setDataFim] = useState("")
  const [localId, setLocalId] = useState(0)
  // console.log(localId)
  const [tipoReuniaoId, setTipoReuniaoId] = useState(0)
  // console.log(tipoReuniaoId)

  const [camposAtaReuniao, setCamposAtaReuniao] = useState([])

  const [placesList, setPlacesList] = useState([])
  console.log(placesList)
  const [typesOfMeetingsList, setTypesOfMeetingsList] = useState([])

  // const { watch } = useForm()
  // const title = watch('titulo')
  

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

  const dataValid = dataInicio === ""
  const titleValid = titulo === ""
  const localValid = localId === 0
  const typeOfMeetingValid = tipoReuniaoId === 0

  const isSubmitDisabled = !dataValid && !titleValid && !localValid && !typeOfMeetingValid ? false : true


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
                errorMessage={"Preencha o título da ATA."}
                value={titulo}
                id={"titulo"}
                label={"Título *"}
                onChange={e => setTitulo(e.target.value)}
                required
              />


              <select>
                <option selected disabled>Local</option>
              {placesList.map(option =>(
                <option value={option.value}>{option.label}</option>))}
              </select>
              <SelectField
                errorMessage={"Selecione o local da ATA."}
                id={"local"}
                label={"Local *"}
                options={placesList}
                onChange={e => setLocalId(e.value)}
                required
              />

              <div className={styles.dateBox}>
                <InputDate
                  errorMessage={"Escolha a data de início da ATA."}
                  id={"dataInicio"}
                  label={"Data e Horário de Início *"}
                  onChange={e => setDataInicio(e.target.value)}
                  required
                  isMandatory={"true"}
                />
                <InputDate
                  id={"dataFim"}
                  label={"Data e Horário de Fim"}
                  onChange={e => setDataFim(e.target.value)}
                  required
                  isMandatory={"false"}
                />
              </div>

              <SelectField
                errorMessage={"Selecione o tipo de reunião da ATA."}
                id={"reuniao"}
                label={"Tipo de Reunião *"}
                options={typesOfMeetingsList}
                onChange={e => setTipoReuniaoId(e.value)}
                required
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
              {/* // colocar uma span indicando para preencher os dados obrigatórios */}
              <button disabled={isSubmitDisabled} onClick={registerProceeding}>Salvar ATA</button>
            </footer>
          </form>
        </div>
      </div>
    </div>
  )
}