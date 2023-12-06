import styles from './styles.module.css'

export default function Filters({theme, filterAll, filterCompleted, filterActive, clearCompleted}) {
  return (
    <div className={`${styles.container} ${theme == 'dark' ? styles.darkFooter : styles.lightFooter}`}>
      <div className={styles.container__AllActiveCompleted}>
          <a href='#' onClick={() => filterAll()} className={styles.link}>All</a>
          <a href='#' onClick={() => filterActive()} className={styles.link}>Active</a>
          <a href='#' onClick={() => filterCompleted()} className={styles.link}>Completed</a>
        </div>
        <div className={styles.container__Clear}>
        <a href='#' onClick={() => clearCompleted()} className={styles.link}>Clear Completed</a>
        </div>
        </div>
  )
}
