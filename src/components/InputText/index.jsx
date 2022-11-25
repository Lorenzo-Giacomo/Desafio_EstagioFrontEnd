import styles from './styles.module.scss'

export function InputText({ label, id, ...rest }) {
  return (
      <div className={styles.input}>
        <input id={id} type="text" placeholder=" " {...rest} />
        <label for={id}>{label}</label>
      </div>
  )
}