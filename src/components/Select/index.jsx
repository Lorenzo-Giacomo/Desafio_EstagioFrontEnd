import Select from 'react-select'
import styles from './styles.module.scss'

export function SelectField({id, label, options, ...rest}) {
  
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
  return (
    <div className={styles.select}>
      <Select
        className={styles.reactSelect}
        id={id}
        placeholder=" "
        styles={ colourStyles }
        options={options}
        {...rest}
      />
      <label htmlFor={id}>{label}</label>
    </div>

  )
}