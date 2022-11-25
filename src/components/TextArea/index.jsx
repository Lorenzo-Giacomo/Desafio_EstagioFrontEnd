import styles from './styles.module.scss'

export function TextArea({id, label}) {
  return (
    <div className={styles.textarea}>
      <label htmlFor={id}>{label}</label>
      <textarea id={id} cols="30" rows="10" fixed></textarea>
    </div>
  )
}