import styles from './styles.module.css'

export default function TasksLeft({theme, tasks}) {
  return (
    <div className={`${styles.container} ${theme == 'dark' ? styles.darkFooter : styles.lightFooter}`}>
        <p> {tasks.filter(t => t.completed == false).length} items left </p>
    </div>
  )
}
