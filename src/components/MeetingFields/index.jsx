import React, { useEffect, useState } from "react";
import api from "../../services/api"
import styles from './styles.module.scss'
import { config } from "../../services/auth"
import { InputDate } from "../InputDate";
import { InputText } from "../InputText";
import { TextArea } from "../TextArea";

export function DynamicFields({id, setCamposAtaReuniao}) {
  const [fields, setFields] = useState([])
  const [textAreaField, setTextareaField] = useState(null)
  const [dateTimeField, setDateTimeField] = useState(null)
  const [textField, setTextField] = useState(null)

  const camposAtas = []

  function handleAddFieldsValues(e, field) {

    if(field.tipo === "textarea") {
      e.target.value !== '' ? setTextareaField({ campoId : field.id , valor: e.target.value}) : setTextareaField(null) 
    } 
    if (field.tipo === "datetime") {
      e.target.value !== '' ? setDateTimeField({ campoId : field.id , valor: e.target.value}) : setDateTimeField(null) 
    }
    if (field.tipo === "text") {
      e.target.value !== '' ? setTextField({ campoId : field.id , valor: e.target.value}) : setTextField(null) 
    }

    if (textAreaField) {
      camposAtas.push(textAreaField)
    } 
    if (dateTimeField) {
      camposAtas.push(dateTimeField)
    }

    if (textField) {
      camposAtas.push(textField)
    }

    return setCamposAtaReuniao(camposAtas)
  }

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
                onChange={e => handleAddFieldsValues(e, field)}
              />
            ) : field.tipo === "datetime" ? (
              <InputDate
                id={"datetimeConteudoReuniao"}
                label={field.nome}
                required
                ismandatory={"false"}
                onChange={e => handleAddFieldsValues(e, field)}
              />
              
            ) : field.tipo === "text" ? (
              <InputText
                id={"textConteudoReuniao"}
                label={field.nome}
                required
                ismandatory={"false"}
                onChange={e => handleAddFieldsValues(e, field)}
              />
            ) : null
            }
          </div>
        )
        })}
    </div>
  )
}