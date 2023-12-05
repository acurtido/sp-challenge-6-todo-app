import React from 'react'

import styles from './styles.module.css'
import imgSun from '/images/icon-sun.svg'
import imgMoon from '/images/icon-moon.svg'

export default function Title({theme, changeTheme}) {
  
  return (
    <div className={styles.container}>
        <h1 className={styles.todoText}>TODO</h1>
        <img onClick={changeTheme}  className={styles.sunImg} src={theme == 'dark' ? imgSun : imgMoon } alt="" />
    </div>
  )
}



