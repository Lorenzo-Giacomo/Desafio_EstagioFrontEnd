import { Header } from "../../components/Header"
import styles from './styles.module.scss'
import Select from 'react-select'
import { Link } from "react-router-dom"


export function ProceedingsForm() {
  // const initialValues = {
  //   titulo: "",
  //   dataInicio: "",
  //   dataFim: "",
  //   tipoReuniaoId: 0,
  //   localId: 0,
  //   camposAtaReuniao : [
  //     {
  //       campoId: 0,
  //       valor: ""
  //     }
  //   ]
  // }

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
                <input type="text" id="titulo" placeholder=" " />
                <label for="titulo">Título *</label>
              </div>
              
              <Select
                placeholder="Local *"
              />
              <div className={styles.dateBox}>
                <input type="datetime" />
              </div>
              
            </div>
            <h2>Conteúdo da Reunião</h2>
            <div className={styles.meetingContent}>

            </div>
            <footer className={styles.buttonsContainer}>
              <Link to="/atas-list">
                <button>Cancelar</button>
              </Link>
              <button>Salvar ATA</button>
            </footer>
          </form>
        </div>
      </div>
    </div>
  )
}