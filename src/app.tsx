import { NotepadText } from "lucide-react";
import { useState } from "react";
import { Header } from "./components/Header";
import { FormTask } from "./components/Form";
import styles from './app.module.css';
import { Task } from "./components/Task";

interface Task {
  id: string;
  title: string;
  isChecked: boolean;
}

export function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const createdTasksLength = tasks.length;
  const finishTasksLength = tasks.filter(task => task.isChecked === true).length;

  const sortTasks = tasks.sort((a, b) => {
    return Number(a.isChecked) - Number(b.isChecked)
  });

  function handleCreateTask(title: string): void { 
    const newTask =  { 
      id: crypto.randomUUID(), 
      title: title, 
      isChecked: false
    }
    
    setTasks(state => [newTask, ...state]);

  }

  function handleCheckTask(id: string) {
    const tasksArray = tasks.filter(task => task.id !== id);
    const taskToCheck = tasks.filter(task => task.id === id);
    taskToCheck[0].isChecked = true;

    tasksArray.push(taskToCheck[0]);
    setTasks(tasksArray);

  }

  function handleUncheckTask(id: string) {
    const tasksArray = tasks.filter(task => task.id !== id);
    const taskToCheck = tasks.filter(task => task.id === id);
    taskToCheck[0].isChecked = false;

    tasksArray.push(taskToCheck[0]);
    setTasks(tasksArray);
  }

  function handleDeleteTask(id: string) {
    const taskArray = tasks.filter(task => task.id !== id);
    setTasks(taskArray);
  }

  return (
    <>
     <Header />

      <FormTask createTask={handleCreateTask} />
      
      <main className={styles.main}>

      <div className={styles.description}>
        <p className={styles.creates}>Tarefas criadas <span className={styles.count}>{createdTasksLength}</span></p>
        <p className={styles.finish}>Concluidas <span className={styles.count}>{finishTasksLength} de {createdTasksLength}</span></p>
      </div>

      <div className={styles.line}/>

      <div className={styles.notes}>
        { sortTasks.length > 0
        ?
        sortTasks.map((task) => {
          return  (
              <Task 
                key={task.id}
                task={task} 
                functions={{handleCheckTask, handleUncheckTask, handleDeleteTask}} 
                />
            )
          })
          : 
          <div className={styles.emptyNotes}>
            <NotepadText className={styles.notepadIcon}/>
            <p className={styles.message}>Você ainda não tem tarefas cadastradas</p>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
      }
      </div>

      </main>
    </>
    );
}