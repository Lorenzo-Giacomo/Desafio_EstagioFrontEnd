import styles from './styles.module.scss'

export function InputDate({ label, name, className, placeholder, type, ...rest }) {
  return (
      <div className={styles.dateTime}>
        <input id={name} type={type} placeholder={placeholder} {...rest} />
        <label for={name}>{label}</label>
      </div>
  )
}