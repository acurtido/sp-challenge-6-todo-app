import styles from './styles.module.css'

export default function Filters({theme}) {
  return (
    <div className={`${styles.container} ${theme == 'dark' ? styles.darkFooter : styles.lightFooter}`}>
      <div className={styles.container__AllActiveCompleted}>
          <a href='#' onClick={() => alert("All clickeado")} className={styles.link}>All</a>
          <a href='#' className={styles.link}>Active</a>
          <a href='#' className={styles.link}>Completed</a>
        </div>
        <div className={styles.container__Clear}>
        <a href='#' className={styles.link}>Clear Completed</a>
        </div>
        </div>
  )
}
