import styles from './styles.module.css'
import TaskCheck from '../TaskCheck'
import imgCross from '/images/icon-cross.svg'

export default function Task({theme, id, name, completed, deleteTask, updateTask}) { // eslint-disable-line 
    return (
        <div>
            <form className={styles.form}>
                <TaskCheck updateTask={updateTask} checked={completed} id={id} />
                <p className={`${styles.task} ${theme == 'dark' ? styles.dark : styles.light}`}>{name}</p>
                <img onClick={() => deleteTask(id)} src={imgCross} alt="" />
            </form>
        </div>
    )
}
