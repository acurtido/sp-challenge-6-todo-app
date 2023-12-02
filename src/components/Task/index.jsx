import styles from './styles.module.css'
import TaskCheck from '../TaskCheck'

export default function Task({name, completed}) { // eslint-disable-line 
    return (
        <div>
            <form className={styles.form}>
                <TaskCheck checked={completed} />
                <p className={styles.task}>{name}</p>
            </form>
        </div>
    )
}
