import React, { useState } from 'react'
import styles from './styles.module.scss'

export function InputText({ label, id, value, errorMessage, isMandatory, ...rest }) {

  const [focused, setFocused] = useState(false)
  return (
        <div className={styles.input}>
          <input 
            id={id} 
            type="text" 
            placeholder=" " 
            value={value} 
            onFocus={() => setFocused(false)} 
            onBlur={()=> setFocused(true)} 
            focused={focused.toString()} 
            ismandatory={isMandatory}
            {...rest}  
            />
          <label htmlFor={id}>{label}</label>
          <span>{errorMessage}</span> 
        </div>
  )
}