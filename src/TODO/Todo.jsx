import TodoItem from "./TodoItem";
import styles from './Todo.module.css'
const Todo = () => {
    return (
        <div>
            <center className="todo-container">
                <h1 className={styles.headings}>Todo App</h1>
                <div className="row">
                    <div className="col-6">
                        <input type="text" placeholder="Enter todo here" />
                    </div>
                    <div className="col-4">
                        <input type="date" name="" id="" />
                    </div>
                    <div className="col-2">
                        <button className="btn btn-success">Add</button>
                    </div>
                </div>
                <TodoItem item='Milk' date='23/12/23'></TodoItem>
                <TodoItem item='Egg' date='5/02/23' ></TodoItem>
            </center>
        </div>
    );
};

export default Todo;