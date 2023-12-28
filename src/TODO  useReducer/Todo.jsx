import TodoItem from "./TodoItem";
import styles from './Todo.module.css'
import TodoInput from "./TodoInput";
import { useReducer} from "react";
import Error from "./Error";

const reducerApp = (currentTasks,action)=>{
    let newTasks = currentTasks;
    if(action.type === "NEW"){
        newTasks=[...currentTasks,
        {
            name:action.payload.name,date:action.payload.date
        }
        ]
    }
    else if(action.type ==='DELETE'){
        newTasks = currentTasks.filter((item)=>item.name!==action.payload.name)
    }
    return newTasks;
}
const Todo = () => {
    const [tasks,dispatch] = useReducer(reducerApp,[]);
    const handleAddTask = (name, date) => {
        const newTasks = {
            type:"NEW",
            payload:{
                name,date
            }
        }
        dispatch(newTasks);
    }

    const handleDeleteTask = (todoItem) => {
        const newTasks = {
            type:'DELETE',
            payload:{
                name:todoItem
            }
        }
        dispatch(newTasks)
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