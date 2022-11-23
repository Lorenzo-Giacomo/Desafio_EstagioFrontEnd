import Select from 'react-select'
import styles from './styles.module.scss'

export function SelectField({id, name, label, ...rest}) {
  
  const colourStyles = {
    control: (baseStyles, { isFocused } ) => {
      return {
        ...baseStyles,
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
        id={id}
        placeholder=" "
        styles={ colourStyles }
        {...rest}
      />
      <label htmlFor={name}>{label}</label>
    </div>

  )
}