import React, { useState } from 'react'
import styles from './styles.module.scss'

export function SelectField({id, label, options, errorMessage, ...rest}) {
  const [focused, setFocused] = useState(false)

  return (
    <div className={styles.select}>
      <select
        id={id}
        placeholder=" "
        options={options}
        onFocus={() => setFocused(false)} 
        onBlur={()=> setFocused(true)} 
        focused={focused.toString()} 
        {...rest}
      >
        <option value="" selected disabled></option>
          {options.map(option =>(
            <option value={option.value}>{option.label}</option>
          ))}
      </select>  
      <label htmlFor={id}>{label}</label>
      <span>{errorMessage}</span> 
    </div>

  )
}