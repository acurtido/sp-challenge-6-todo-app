import styles from './styles.module.css'

export default function TaskInput() {
    return (
        <div className={styles.container}>
            <form className={styles.form}>
                <input type='checkbox' className={styles.checkbox} />
                <input type='text' className={styles.input} placeholder='Create a new todo...' />
            </form>
        </div>
    )
}
