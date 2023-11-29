import {useState, useEffect} from 'react'

export default function useTodo() {
    const [todo, setTodo] = useState('');
    const [todos, setTodos] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const storedTodos = localStorage.getItem('todos');
        if (storedTodos) {
            setTodos(JSON.parse(storedTodos));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    function handleChange(event) {
        setTodo(event.target.value);
    }

    function handleAddTodo() {
        if (todo === '') {
            setError('No puedes agregar una tarea vacía');
            return;
        }

        setTodos([...todos, todo]);
        setTodo('');
        setError(null);
    }

    function handleDelete(index) {
        setTodos(todos.filter((_, i) => i !== index));
    }

    return [todo, todos, error, handleChange, handleAddTodo, handleDelete];
}