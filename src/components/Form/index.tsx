import { PlusCircle } from "lucide-react";
import styles from "./form.module.css";
import { ChangeEvent, FormEvent, useState } from "react";

interface FormTaskProps {
    createTask: (title: string) => void;
}

export function FormTask({ createTask }: FormTaskProps) {
    const [title, setTitle] = useState('');

    function handleTitleChange(event: ChangeEvent<HTMLInputElement>) {
        setTitle(event.target.value);
    }

    function handleCreateTask(event: FormEvent) {
        event.preventDefault();

        if (title == '') {
            return;
        }
        
        createTask(title);
        setTitle('');
    }

    return (
        <form onSubmit={handleCreateTask}>
            <input 
                type="text" 
                placeholder="Adicione uma nova tarefa"
                className={styles.input}
                onChange={handleTitleChange}
                value={title}
            />
            <button 
                type="submit"
                className={styles.button}
            >
                Criar <PlusCircle />
            </button>
        </form>
    )
}