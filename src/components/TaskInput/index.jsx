import styles from './styles.module.css'
import TaskCheck from '../TaskCheck'

export default function TaskInput({theme, task, handleSubmit, handleOnChange}) { 
    return (
        <div className={`${styles.container} ${theme == 'dark' ? styles.dark : styles.light}`}>
            <form onSubmit={handleSubmit} className={styles.form}>
                <TaskCheck />
                <input type='text' value={task} onChange={handleOnChange} className={styles.input} placeholder='Create a new todo...' />
            </form>
        </div>
    )
}
