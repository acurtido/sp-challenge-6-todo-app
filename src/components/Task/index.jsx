import styles from './styles.module.css'
import TaskCheck from '../TaskCheck'

export default function Task() {
    return (
        <div>
            <form className={styles.form}>
                <TaskCheck />
                <p className={styles.task}>Hola</p>
            </form>
        </div>
    )
}
