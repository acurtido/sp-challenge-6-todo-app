import styles from './styles.module.css'
import Task from '../Task'
import PropTypes from 'prop-types'

export default function CheckList({ theme, tasks, deleteTask, updateTask }) {

    return (
        <div className={`${styles.container} ${theme == 'dark' ? styles.dark : styles.light}`}>
            {tasks.map((task) => {
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

CheckList.propTypes = {
    theme: PropTypes.string.isRequired,
    tasks: PropTypes.array.isRequired,
    deleteTask: PropTypes.func.isRequired
}




