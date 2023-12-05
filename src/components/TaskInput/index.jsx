import styles from './styles.module.css'
import TaskCheck from '../TaskCheck'

export default function TaskInput() {
    return (
        <div className={styles.container}>
            <form className={styles.form}>
                <TaskCheck />
                <input type='text' className={styles.input} placeholder='Create a new todo...' />
            </form>
        </div>
    )
}
