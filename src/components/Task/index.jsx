import styles from './styles.module.css'
import TaskCheck from '../TaskCheck'
import imgCross from '/images/icon-cross.svg'

export default function Task({theme, name, completed, deleteTask}) { // eslint-disable-line 
    return (
        <div>
            <form className={styles.form}>
                <TaskCheck checked={completed} />
                <p className={`${styles.task} ${theme == 'dark' ? styles.dark : styles.light}`}>{name}</p>
                <img onClick={() => deleteTask(name)} src={imgCross} alt="" />
            </form>
        </div>
    )
}
