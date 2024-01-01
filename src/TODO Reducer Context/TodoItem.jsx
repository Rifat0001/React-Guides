import  { useContext } from 'react';
import { FaBucket } from "react-icons/fa6";
import { TodoStore } from './TodoStore';
const TodoItem = () => {
    const {tasks,handleDeleteTask} = useContext(TodoStore);
    return (
        <div>
            <div >
                {
                    tasks && tasks.map((task) => (
                        <div key={task.name} className="row my-2">
                            <div className="col-6">
                                <p>{task.name}</p>
                            </div>
                            <div className="col-4">
                                <p>{task.date}</p>
                            </div>
                            <div className="col-2">
                                <button onClick={() => handleDeleteTask(task.name)} className="btn btn-danger"><FaBucket /></button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default TodoItem;