import styles from './styles.module.css'
import Task from '../Task'
import tasks from '../../data/tasks.json'

export default function CheckList({theme}) {
    return (
        <div className={`${styles.container} ${theme == 'dark' ? styles.dark : styles.light}`}>
            {tasks.map((task, index) => {
                return <Task theme={theme} key={index} name={task.name} completed={task.completed} />
            })}
        </div>
    );
}
