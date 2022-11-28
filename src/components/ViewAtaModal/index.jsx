import React, {useEffect, useMemo, useState} from "react";
import Popup from "reactjs-popup";
import styles from './styles.module.scss'
import { config } from "../../services/auth"
import api from "../../services/api";

export function ViewAtas(props) {
  const [statePopup, setStatePopup] = useState(false)
  const [ataInfos, setAtaInfos] = useState({})
  const [dataLoaded, setDataLoaded] = useState(false)

  useEffect(() => {
    if (statePopup === true) {
      api.get(`/Atas/${props.ata}`, config).then(response => {
        setAtaInfos(response.data)
        setDataLoaded(true)
      })
    }
  }, [props.ata, statePopup])
  
  return props.trigger ? (
    <Popup
      trigger={props.trigger}
      onOpen={() => {
        setStatePopup(true)
      }}
      open={statePopup}
      onClose={() => {
        setStatePopup(false)
      }}
    >
      <div className={styles.viewAtaContainer}>
        { dataLoaded ? (
          <>
            <h2 style={{textAlign : "center"}}>Dados da Ata:</h2>
            <div className={styles.field}>
              <span>Título</span>
              <h4>{ataInfos.titulo}</h4>
            </div>
            <div className={styles.field}>
              <span>Local</span>
              <h4>{ataInfos.local}</h4>
            </div>
            <div className={styles.dataFields}>
              <div className={styles.field}>
                <span>Data de Início</span>
                <h4>{ataInfos.dataInicio}</h4>
              </div>
              
              {!ataInfos.dataFim.startsWith('0') ? (
                <div className={styles.field}>
                  <span>Data de Fim</span>
                  <h4>{ataInfos.dataFim}</h4>
                </div>
              ) : null}
            </div>
            <div className={styles.field}>
              <span>Tipo de Reunião</span>
              <h4>{ataInfos.tipoReuniao}</h4>
            </div>

            {ataInfos.camposAtaReuniao.length !== 0 ? ( 
              <div className={styles.camposContainer}>
                {ataInfos.camposAtaReuniao.map(campo => {
                  return (
                    <div key={campo.campoId} className={styles.field}>
                      <span>{campo.nome}</span>
                      <h4>{campo.valor}</h4>
                    </div>
                  )
                })}
              </div>
            ) : null}

            <div className={styles.btnContainer}>
              <button onClick={() => setStatePopup(false)}>Fechar</button>
            </div>
        </>
        ) : null}
      </div>
    </Popup>
  ) : null
}