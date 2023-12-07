import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import imgDark from '/images/bg-desktop-dark.jpg'
import imgLight from '/images/bg-desktop-light.jpg'

import Title from '../Title'
import TaskInput from '../TaskInput'
import CheckList from '../CheckList'
import TasksLeft from '../TasksLeft'
import Filters from '../Filters'
import styles from './styles.module.css'

function App() {
  const [theme, setTheme] = useState('dark')
  const [task, setTask] = useState('')
  const [tasks, setTasks] = useState([])

  const changeTheme = () => {
    if (theme === 'dark') {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }

  const handleOnChange = (e) => {
    e.preventDefault()
    setTask(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addTask(task)
    setTask('')
  }

  const addTask = (task) => { 
    const newTask = {id: uuidv4(), name: task, completed: false}
    setTasks([newTask, ...tasks]) 
  }

  const deleteTask = (id) => { 
    setTasks([...tasks.filter( t => t.id !== id)])
  }

  const updateTask = (id) => {
    setTasks([...tasks.map( t => {
      if (t.id === id) {
        t.completed = !t.completed
      }
      return t
    })])
  }

  return (
    <main className={`${styles.layout} ${theme == 'dark' ? styles.dark : styles.light}`}>
      <img className={styles.background} src={theme == 'dark' ? imgDark : imgLight} alt="" />
      <div className={styles.content}>
        <Title theme={theme} changeTheme={changeTheme} />
        <TaskInput theme={theme} task={task} handleOnChange={handleOnChange} handleSubmit={handleSubmit} />
        <CheckList theme={theme} tasks={tasks} deleteTask={deleteTask} updateTask={updateTask}/>
        <div className={`${styles.footer} ${theme == 'dark' ? styles.darkFooter : styles.lightFooter}`}>
          <TasksLeft theme={theme} />
          <Filters theme={theme} /> {/* chiquito */}
        </div>
      </div>
    </main>
  )
}

export default App
