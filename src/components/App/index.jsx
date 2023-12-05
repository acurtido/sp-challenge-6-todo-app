import { useState } from 'react'
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

  const changeTheme = () => {
    if(theme === 'dark'){
      setTheme('light')
    }else{
      setTheme('dark')
    }
  }

  return (
    <main className={`${styles.layout} ${theme == 'dark' ? styles.dark : styles.light}`}>
      <img className={styles.background} src={theme == 'dark' ? imgDark : imgLight} alt="" />
      <div className={styles.content}>
        <Title theme={theme} changeTheme={changeTheme}/>
        <TaskInput theme={theme} />
        <CheckList theme={theme} />
        <div className={styles.footer}>
          <TasksLeft theme={theme} />
          <Filters theme={theme} /> {/* chiquito */}
        </div>
      </div>
    </main>
  )
}

export default App
