import { createContext, useReducer } from "react";

export const TodoStore = createContext({
    tasks:[],
    handleDeleteTask : () =>{},
    handleAddTask : () =>{}
});

const reducerApp = (current, action) => {
    let newTasks = current;
    if (action.type === 'NEW') {
        newTasks = [
            ...current,
            {
                name: action.payload.name, date: action.payload.date
            }
        ]
    }
    else if(action.type === 'DELETE'){
        newTasks = current.filter((item)=>item.name !== action.payload.name)
    }
    return newTasks
}

const TaskContextProvider = ({children})=>{
    const [tasks, dispatch] = useReducer(reducerApp, [])

    const handleAddTask = (name, date) => {
        const newTask = {
            type: 'NEW',
            payload: { name, date }
        }
        dispatch(newTask)
    }

    const handleDeleteTask = (name) => {
        const deleteTask = {
            type: 'DELETE',
            payload: { name: name }
        }
        dispatch(deleteTask)
    }
    return (
    <TodoStore.Provider value={{ tasks, handleAddTask, handleDeleteTask }} >
        {children}
    </TodoStore.Provider>)
}

export default TaskContextProvider;