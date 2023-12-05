import styles from './styles.module.css'
import TaskCheck from '../TaskCheck'

export default function Task({theme, name, completed}) { // eslint-disable-line 
    return (
        <div>
            <form className={styles.form}>
                <TaskCheck checked={completed} />
                <p className={`${styles.task} ${theme == 'dark' ? styles.dark : styles.light}`}>{name}</p>
            </form>
        </div>
    )
}
