import PropTypes from 'prop-types'

import styles from './styles.module.css'
import imgSun from '/images/icon-sun.svg'
import imgMoon from '/images/icon-moon.svg'

export default function Title({toggleColor, color}) {
  return (
    <div className={styles.container}>
        <h1 className={styles.todoText}>TODO</h1>
        <img className={styles.sunImg} src={color == 'light' ? imgMoon : imgSun} onClick={toggleColor}  alt="" />
    </div>
  )
}

Title.propTypes = {
  toggleColor: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired
}



