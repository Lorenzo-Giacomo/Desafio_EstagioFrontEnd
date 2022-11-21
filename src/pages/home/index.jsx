import React from "react"
import { useNavigate } from "react-router-dom"
import {provider} from '../../services/auth'

export function Home() {
  const navigate = useNavigate()
  
  async function authorize() {
    provider.authorize()
    navigate('/atas-list')
  }

  return (
      <button onClick={authorize}>Página de login</button>
  )
}