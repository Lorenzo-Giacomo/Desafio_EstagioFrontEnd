import React, { useEffect, useState } from "react";
import api from "../../services/api"
import { config } from "../../services/auth"


export function DynamicFields(props) {
  const [fields, setFields] = useState(null)

  useEffect(() => {
    api.get(`/TiposReuniao/${props.id}`, config).then(response => {
      setFields(response.data)
    })
  }, [])
  console.log(fields)
  return (
    <div>
      <h2>po</h2>
    </div>
  )
}