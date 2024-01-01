import TodoItem from "./TodoItem";
import styles from './Todo.module.css'
import TodoInput from "./TodoInput";
import Error from "./Error";
import TaskContextProvider from "./TodoStore";

const Todo = () => {
    return (
        <div>
            <TaskContextProvider>
                <center className="todo-container">
                    <h1 className={styles.headings}>Todo Context Reducer</h1>
                    <TodoInput></TodoInput>
                    <Error></Error>
                    <TodoItem  ></TodoItem>
                </center>
            </TaskContextProvider>
        </div>
    );
};

export default Todo;