import styles from './styles.module.css'
import Task from '../Task'

export default function CheckList({ theme, tasks }) {

    return (
        <div className={`${styles.container} ${theme == 'dark' ? styles.dark : styles.light}`}>
            {tasks.map((task, index) => {
                return <Task theme={theme} key={index} name={task.name} completed={task.completed} />
            })}
        </div>
    );
}
