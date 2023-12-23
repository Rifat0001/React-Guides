import TodoItem from "./TodoItem";
import styles from './Todo.module.css'
import TodoInput from "./TodoInput";
import { useState } from "react";
import Error from "./Error";
import { TodoStore } from "./TodoStore";
const Todo = () => {
    const [tasks, setTasks] = useState([]);

    const handleAddTask = (name, date) => {
        console.log(name, date)
        const newTask = {
            name: name, date: date
        }
        const newTasks = [...tasks, newTask];
        setTasks(newTasks);
    }

    const handleDeleteTask = (name) => {
        console.log(` ${name} deleted`)
        const newTask = tasks.filter((task) => task.name !== name);
        setTasks(newTask);
    }

    return (
        <div>
            <TodoStore.Provider value={{tasks,handleAddTask,handleDeleteTask}} >
                <center className="todo-container">
                    <h1 className={styles.headings}>Todo App Context</h1>
                    <TodoInput></TodoInput>
                    <Error></Error>
                    <TodoItem  ></TodoItem>
                </center>
            </TodoStore.Provider>
        </div>
    );
};

export default Todo;