import styles from './styles.module.css'
import imgSun from '/images/icon-sun.svg'

export default function Title() {
  return (
    <div className={styles.container}>
        <h1 className={styles.todoText}>TODO</h1>
        <img className={styles.sunImg} src={imgSun} alt="" />
    </div>
  )
}



