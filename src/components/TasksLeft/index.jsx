import styles from './styles.module.css'

export default function TasksLeft({theme}) {
  return (
    <div className={`${styles.container} ${theme == 'dark' ? styles.darkFooter : styles.lightFooter}`}>
        <p> 5 items left </p>
    </div>
  )
}
