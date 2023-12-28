import { createContext } from "react";

export const TodoStore = createContext({
    tasks:[],
    handleDeleteTask : () =>{},
    handleAddTask : () =>{}
});