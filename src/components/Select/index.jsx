import React, { useState } from 'react'
import styles from './styles.module.scss'

export function SelectField({id, label, options, errorMessage, ...rest}) {
  const [focused, setFocused] = useState(false)

  return (
    <div className={styles.select}>
      <select
        defaultValue=""
        id={id}
        placeholder=" "
        options={options}
        onFocus={() => setFocused(false)} 
        onBlur={()=> setFocused(true)} 
        focused={focused.toString()} 
        {...rest}
      >
        <option value=""  disabled></option>
          {options.map((option, index) =>(
            <option key={index} value={option.value}>{option.label}</option>
          ))}
      </select>  
      <label htmlFor={id}>{label}</label>
      <span>{errorMessage}</span> 
    </div>

  )
}