import imgDark from '/images/bg-desktop-dark.jpg'

import Title from '../Title'
import TaskInput from '../TaskInput'
import CheckList from '../CheckList'
import TasksLeft from '../TasksLeft'
import Filters from '../Filters'
import styles from './styles.module.css'

function App() {

  return (
    <main className={styles.layout}>
      <img className={styles.background} src={imgDark} alt="" />
      <div className={styles.content}>
        <Title />
        <TaskInput />
        <CheckList />
        <div className={styles.footer}>
          <TasksLeft />
          <Filters />
        </div>
      </div>
    </main>
  )
}

export default App
