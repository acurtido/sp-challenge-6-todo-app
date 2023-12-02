import styles from './styles.module.css'
import React from 'react'

export default function TaskCheck() {
    return (
        <div>
            <input type='checkbox'  className={styles.checkbox} />
        </div>
    )
}


