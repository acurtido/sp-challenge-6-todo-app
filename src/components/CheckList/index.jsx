import styles from './styles.module.css'
import Task from '../Task'

export default function CheckList({ theme, tasks, deleteTask, updateTask }) {

    return (
        <div className={`${styles.container} ${theme == 'dark' ? styles.dark : styles.light}`}>
            {tasks.map((task, index) => {
                return <Task
                    theme={theme}
                    key={task.id}
                    id={task.id}
                    name={task.name}
                    completed={task.completed}
                    deleteTask={deleteTask}
                    updateTask={updateTask} />
            })}
        </div>
    );
}
