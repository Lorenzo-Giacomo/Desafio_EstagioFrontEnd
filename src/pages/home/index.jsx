import React, { useState } from "react"
import styles from './styles.module.scss'
import { useNavigate } from "react-router-dom"
import {provider} from '../../services/auth'
import logoClara from '../../assets/logoClara.png'
import { InputText } from "../../components/InputText"
import api from "../../services/api"


export function Home() {
  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()
  
  async function authorize() {
    try {
      const response = await api.post('/login', {userName, password})
      provider.signin(response.data)
      navigate('/atas-list')
    } catch {
      alert('Login ou Senha Incorretos, digite novamente')
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.loginContainer}>
        <img src={logoClara} alt="IndustriAll" />
        
        <div className={styles.inputsContainer}>
        <p>Preencha os campos com seu login e senha.</p>
          <InputText 
            id={'login'}
            placeholder={" "}
            label={"Login *"}
            value={userName}
            onChange={e => setUserName(e.target.value)}
          />
          <InputText 
            type="password"
            id={'senha'}
            placeholder={" "}
            label={"Senha *"}
            value={password}
            onChange={e=> setPassword(e.target.value)}
            />
        </div>
        <div className={styles.buttonContainer}>
          <button onClick={authorize}>Entrar</button>
        </div>
      </div>
    </div>
  )
}