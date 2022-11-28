import React, {useState} from "react";
import Popup from "reactjs-popup";
import styles from './styles.module.scss'
import { config } from "../../services/auth"
import api from "../../services/api";
import { AiOutlineClose } from 'react-icons/ai'

export function DeleteAta(props) {
  const [statePopup, setStatePopup] = useState(false)
  
  function deleteAta() {
    api.delete(`/Atas/${props.ata}`, config).then(response => {
      if (response.status === 200) {
        setStatePopup(false)
        props.setDeleted(true)
      }
    })
  }

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
      <div className={styles.deleteAtaContainer}>
        <div className={styles.confirmDeleteText}>
          <h3>Deseja realmente excluir a Ata?</h3>
          <p>A ação é irreversível.</p>
        </div>
        <div className={styles.deleteBtn}>
          
          <AiOutlineClose
            className={styles.closeBtn}
            onClick={() => setStatePopup(false)}
          />
          <button onClick={deleteAta}>Excluir</button>

        </div>
      </div>
    </Popup>
  ) : null
}