import React, { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { config } from "../../services/auth"
import { Header } from "../../components/Header"
import { DynamicFields } from "../../components/MeetingFields"
import { InputText } from "../../components/InputText"
import { InputDate } from "../../components/InputDate" 
import { SelectField } from "../../components/Select"
import styles from './styles.module.scss'
import api from "../../services/api"

export function ProceedingsForm() {
  const [titulo, setTitulo] = useState("")
  const [dataInicio, setDataInicio] = useState("")
  const [dataFim, setDataFim] = useState("")
  const [localId, setLocalId] = useState(0)
  const [tipoReuniaoId, setTipoReuniaoId] = useState(0)
  const [placesList, setPlacesList] = useState([])
  const [typesOfMeetingsList, setTypesOfMeetingsList] = useState([])
  const [camposAtaReuniao, setCamposAtaReuniao] = useState([])

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

  const history = useNavigate()
  function registerProceeding(e) {
    e.preventDefault()
    
    const ata = {
      titulo : titulo,
      dataInicio : dataInicio,
      tipoReuniaoId : tipoReuniaoId,
      localId : localId,
      camposAtaReuniao : camposAtaReuniao,
      ...(dataFim !== "" ? {dataFim : dataFim} : null  )
    }
    
    api.post('/Atas', ata, config ).then(response => {
        if (response.status === 200) {
          history('/atas-list')
        } else {
          alert('Erro no cadastro da Ata, verifique se os dados estão preenchidos corretamente.')
        }
    })
    
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
                ismandatory={"true"}
              />

              <SelectField
                errorMessage={"Selecione o local da ATA."}
                id={"local"}
                label={"Local *"}
                options={placesList}
                onChange={e => setLocalId(e.target.value)}
                required
              />

              <div className={styles.dateBox}>
                <InputDate
                  value={dataInicio}
                  errorMessage={"Escolha a data de início da ATA."}
                  id={"dataInicio"}
                  label={"Data e Horário de Início *"}
                  onChange={e => setDataInicio(e.target.value)}
                  required
                  ismandatory={"true"}
                />
                <InputDate
                  value={dataFim}
                  id={"dataFim"}
                  label={"Data e Horário de Fim"}
                  onChange={e => setDataFim(e.target.value)}
                  required
                  ismandatory={"false"}
                />
              </div>

              <SelectField
                errorMessage={"Selecione o tipo de reunião da ATA."}
                id={"reuniao"}
                label={"Tipo de Reunião *"}
                options={typesOfMeetingsList}
                onChange={e => setTipoReuniaoId(e.target.value)}
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
                  setCamposAtaReuniao={setCamposAtaReuniao}
                />
              )}
            </div>

            <footer className={styles.buttonsContainer}>
              <Link to="/atas-list">
                <button>Cancelar</button>
              </Link>
              <button disabled={isSubmitDisabled} onClick={registerProceeding}>Salvar ATA</button>
            </footer>
          </form>
        </div>
      </div>
    </div>
  )
}