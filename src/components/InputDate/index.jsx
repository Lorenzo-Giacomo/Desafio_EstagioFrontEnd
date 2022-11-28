import React, { useState } from 'react'
import styles from './styles.module.scss'

export function InputDate({ label, id , value, errorMessage,  ismandatory, ...rest}) {

  const [focused, setFocused] = useState(false)

  return (
      <div className={styles.dateTime}>
        <input 
          id={id} 
          type="datetime-local" 
          placeholder=" " 
          value={value} 
          onFocus={() => setFocused(false)} 
          onBlur={()=> setFocused(true)} 
          focused={focused.toString()} 
          ismandatory={ismandatory}
          {...rest}
          />
        <label htmlFor={id}>{label}</label>
        <span>{errorMessage}</span> 
      </div>
  )
}