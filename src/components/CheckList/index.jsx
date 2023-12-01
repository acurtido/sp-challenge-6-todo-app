import styles from './styles.module.css'
import TaskCheck from '../TaskCheck'


import React from 'react'

export default function CheckList() {
    return (
        <div className={styles.container}>
            <form className={styles.form}>
                <TaskCheck/>
                <p className={styles.task}>Hola</p>
            </form>
        </div>
    );
}
