import styles from './styles.module.css'
import Task from '../Task';

export default function CheckList() {
    return (
        <div className={styles.container}>
            <Task/>
            <Task/>
            <Task/>
            <Task/>
        </div>
    );
}
