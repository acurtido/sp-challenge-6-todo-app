import React from 'react'

import styles from './styles.module.css'
import imgSun from '/images/icon-sun.svg'
import imgMoon from '/images/icon-moon.svg'

export default function Title() {
  const [tema, setTema] = React.useState('dark') 

  const cambiarTema = () => {
    if(tema === 'dark'){
      setTema('light')
    }else{
      setTema('dark')
    }
  }

  return (
    <div className={styles.container}>
        <h1 className={styles.todoText}>TODO</h1>
        <img onClick={cambiarTema}  className={styles.sunImg} src={tema == 'dark' ? imgSun : imgMoon } alt="" />
    </div>
  )
}



