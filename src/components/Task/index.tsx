import styles from './Task.module.css';
import { Trash2 } from 'lucide-react';
import check from '/check.svg';
import checked from '/checked.svg';

interface TaskProps {
    task: {
        id: string,
        title: string,
        isChecked: boolean
    }
    functions: {
        handleCheckTask: (id: string) => void;
        handleUncheckTask: (id: string) => void;
        handleDeleteTask: (id: string) => void;
    },
}

export function Task({ 
    task, 
    functions,
}: TaskProps) {

    return (
        <div className={styles.note}>
            <input type="checkbox" className={styles.check} />
            {task.isChecked 
            ? <img src={checked} 
                onClick={() => 
                    functions.handleUncheckTask(task.id)}  />
            : <img src={check}
                onClick={() => 
                    functions.handleCheckTask(task.id)} />}
              <p className={`${styles.titleTask} 
                ${task.isChecked == true && styles.checkedTask}`}
                >{task.title}</p>
              <div className={styles.trash} 
                onClick={() => functions.handleDeleteTask(task.id)}>
                <Trash2 className={styles.trashIcon}/>
              </div>
        </div>
    )

}