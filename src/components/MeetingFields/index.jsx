import React, { useEffect, useState } from "react";
import api from "../../services/api"
import styles from './styles.module.scss'
import { config } from "../../services/auth"
import { InputDate } from "../InputDate";
import { InputText } from "../InputText";
import { TextArea } from "../TextArea";

export function DynamicFields({id}) {
  const [fields, setFields] = useState([])

  useEffect(() => {
    api.get(`/TiposReuniao/${id}`, config).then(response => {
      setFields(response.data.campos)
    })
  }, [id])

  return  (
    <div className={styles.dynamicContent}>
      {fields.map(field => {
        return (
          <div key={field.id}>
            {field.tipo === "textarea" ? (
              <TextArea
                id={"textareaConteudoReuniao"}
                label={field.nome}
              />
            ) : field.tipo === "datetime" ? (
              <InputDate
                id={"datetimeConteudoReuniao"}
                label={field.nome}
              />
              
            ) : field.tipo === "text" ? (
              <InputText
                id={"textConteudoReuniao"}
                label={field.nome}
              />
            ) : null
            }
          </div>
        )
        })}
    </div>
  )
}