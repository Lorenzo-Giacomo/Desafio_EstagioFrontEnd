import Select from 'react-select'
import styles from './styles.module.scss'

export function SelectField({id, label, options, errorMessage, valid, ...rest}) {
  
  const colourStyles = {
    control: (baseStyles, { isFocused } ) => {
      return {
        ...baseStyles,
        font: " 400 16px Calibri, sans-serif;",
        color: '#312F2F',
        border : isFocused
        ? "1px solid #00D5F2"
        : 0,
        boxShadow: isFocused
          ? 'none'
          : 'none',
        backgroundColor: "transparent",

        borderColor : isFocused 
        ? '#00D5F2'
        : 'transparent',
        
        "&:hover": {
          borderColor: "#00D5F2",
        }

      }
    }
  };
  
  // identificar quando tem um valor ou está em branco
  return (
    <div className={styles.selectContainer}>
      <div className={styles.select}>
        <Select
          className={styles.selectSelf}
          id={id}
          placeholder=" "
          styles={ colourStyles }
          options={options}
          {...rest}
        />
      </div>
      <label htmlFor={id}>{label}</label>
      <span>{errorMessage}</span> 

    </div>

  )
}