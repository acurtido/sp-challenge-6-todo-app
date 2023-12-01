import { useState } from 'react'
import imgDark from '/images/bg-desktop-dark.jpg'

import styles from './styles.module.css'
import Title from '../Title'
import TaskInput from '../TaskInput'
import CheckList from '../CheckList'
function App() {

  return (
    <main className={styles.layout}>
      <img className={styles.background} src={imgDark} alt="" />
      <div className={styles.content}>
        <Title />
        <TaskInput />
        <CheckList />
      </div>
    </main>
  )
}

export default App
