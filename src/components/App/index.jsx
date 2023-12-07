import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import imgDark from '/images/bg-desktop-dark.jpg'
import imgLight from '/images/bg-desktop-light.jpg'

import Title from '../Title'
import TaskInput from '../TaskInput'
import CheckList from '../CheckList'
import TasksLeft from '../TasksLeft'
import Filters from '../Filters'
import styles from './styles.module.css'

/**
 * Componente principal de la aplicación.
 * Este componente contiene la lógica principal y renderiza
 * otros componentes para construir la interfaz de la aplicación.
 * @component
 * @returns {JSX.Element} - Elemento React que representa el componente principal.
 */
function App() {
  // Estados para gestionar el tema, nombre de tarea, lista de tareas y filtros
  const [theme, setTheme] = useState('dark'); // Tema principal de la aplicación
  const [taskName, setTaskName] = useState(''); // Nombre de la tarea cargado en el input
  const [tasks, setTasks] = useState([]); // Lista de tareas originales
  const [filters, setFilters] = useState('all'); // Filtros posibles: ['all', 'active', 'completed']
  const [filteredTasks, setFilteredTasks] = useState([]); // Tareas filtradas según el filtro actual

  // Efecto para actualizar las tareas filtradas cuando cambian las tareas o los filtros
  useEffect(() => {
    if (filters === 'all') {
      setFilteredTasks(tasks);
    } else if (filters === 'active') {
      setFilteredTasks(tasks.filter(t => t.completed === false));
    } else if (filters === 'completed') {
      setFilteredTasks(tasks.filter(t => t.completed === true));
    }
  }, [tasks, filters]);

  // Cambiar el tema entre 'dark' y 'light'
  const changeTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }

  // Manejar cambios en el input de la tarea
  const handleOnChange = (e) => setTaskName(e.target.value);

  // Manejar envío de formulario para agregar una nueva tarea
  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(taskName);
    setTaskName('');
  }

  // Agregar una nueva tarea a la lista de tareas
  const addTask = (task) => setTasks([{ id: uuidv4(), name: task, completed: false }, ...tasks]);

  // Eliminar una tarea de la lista
  const deleteTask = (id) => setTasks([...tasks.filter(t => t.id !== id)]);

  // Actualizar el estado de completado de una tarea
  const updateTask = (id) => setTasks([...tasks.map(t => {
    if (t.id === id) {
      t.completed = !t.completed;
    }
    return t;
  })]);

  // Establecer el filtro para mostrar todas las tareas
  const filterAll = () => setFilters('all');

  // Establecer el filtro para mostrar solo tareas activas
  const filterActive = () => setFilters('active');

  // Establecer el filtro para mostrar solo tareas completadas
  const filterCompleted = () => setFilters('completed');

  // Limpiar las tareas completadas
  const clearTasks = () => setTasks([...tasks.filter(t => t.completed === false)]);

  // Renderizar la interfaz de la aplicación
  return (
    <main className={`${styles.layout} ${theme === 'dark' ? styles.dark : styles.light}`}>
      <img className={styles.background} src={theme === 'dark' ? imgDark : imgLight} alt="" />
      <div className={styles.content}>
        <Title theme={theme} changeTheme={changeTheme} />
        <TaskInput theme={theme} taskName={taskName} handleOnChange={handleOnChange} handleSubmit={handleSubmit} />
        <CheckList theme={theme} tasks={filteredTasks} deleteTask={deleteTask} updateTask={updateTask} />
        <div className={`${styles.footer} ${theme === 'dark' ? styles.darkFooter : styles.lightFooter}`}>
          <TasksLeft theme={theme} tasks={tasks} />
          <Filters theme={theme} filterAll={filterAll} filterActive={filterActive}
            filterCompleted={filterCompleted} clearTasks={clearTasks} />
        </div>
      </div>
    </main>
  )
}

export default App;
