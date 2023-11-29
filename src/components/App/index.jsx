import imgDark from '/images/bg-desktop-dark.jpg'
import imgLight from '/images/bg-desktop-light.jpg'

import styles from './styles.module.css'
import Title from '../Title'
import { useColorSelector } from '../../hooks/useColorSelector'

function App() {
  const [color, toggleColor] = useColorSelector()

  return (
    <main className={`${styles.layout} ${color == 'light' ? styles.light : styles.dark}`}>

      <img className={styles.background} src={color == 'light' ? imgLight : imgDark} alt="" />
      <div className={styles.content}>
        <Title color={color} toggleColor={toggleColor}/>
      </div>

    </main>
  )
}

export default App
