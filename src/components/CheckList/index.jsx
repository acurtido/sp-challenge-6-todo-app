import styles from './styles.module.css'
import Task from '../Task'
import tasks from '../../data/tasks.json'

export default function CheckList() {
    return (
        <div className={styles.container}>
            {tasks.map((task, index) => {
                return <Task key={index} name={task.name} completed={task.completed} />
            })}
        </div>
    );
}
