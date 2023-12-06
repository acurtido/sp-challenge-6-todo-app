import styles from './styles.module.css'
import React from 'react'
import { useState } from 'react'

export default function TaskCheck({checked}) {
    const [isChecked, setIsChecked] = useState(checked)
    const handleOnChange = () => setIsChecked(!isChecked)
    return (
        <div>
            <input type='checkbox' onChange={handleOnChange} checked={isChecked} className={styles.checkbox} />
        </div>
    )
}


