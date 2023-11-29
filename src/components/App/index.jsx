import { useState } from 'react'
import imgDark from '/images/bg-desktop-dark.jpg'

import styles from './styles.module.css'
import Title from '../Title'
import useTodo from '../../hooks/useTodo'
function App() {
  const [todo, todos, error, handleChange, handleAddTodo, handleDelete] = useTodo()

  return (
    <main className={styles.layout}>
      <img className={styles.background} src={imgDark} alt="" />
      <div className={styles.content}>
        <Title />
        <div>
          <input type="text" value={todo} onChange={handleChange} />
          <button onClick={handleAddTodo}>Agregar</button>
          {error && <p>{error}</p>}
          <ul>
            {todos.map((todo, index) => (
              <li key={index}>
                {todo}
                <button onClick={() => handleDelete(index)}>Eliminar</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  )
}

export default App
