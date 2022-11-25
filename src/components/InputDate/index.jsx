import styles from './styles.module.scss'

export function InputDate({ label, id}) {
  return (
      <div className={styles.dateTime}>
        <input id={id} type="datetime-local" placeholder=" " required />
        <label for={id}>{label}</label>
      </div>
  )
}