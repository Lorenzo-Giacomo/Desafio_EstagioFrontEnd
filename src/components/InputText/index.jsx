import styles from './styles.module.scss'

export function InputText({ label, name, className, placeholder, type, ...rest }) {
  return (
      <div className={styles.input}>
        <input id={name} type={type} placeholder={placeholder} {...rest} />
        <label for={name}>{label}</label>
      </div>
  )
}