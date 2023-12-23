import TodoItem from "./TodoItem";
import styles from './Todo.module.css'
import TodoInput from "./TodoInput";
import { useState } from "react";
import Error from "./Error";
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
        const newTask = tasks.filter((task) => task.name !== name);
        setTasks(newTask);
    }

    return (
        <div>
            <center className="todo-container">
                <h1 className={styles.headings}>Todo App useRef</h1>
                <TodoInput handleAddTask={handleAddTask} ></TodoInput>
                <Error tasks={tasks}></Error>
                <TodoItem handleDeleteTask={handleDeleteTask} tasks={tasks}></TodoItem>
            </center>
        </div>
    );
};

export default Todo;