import { FaBucket } from "react-icons/fa6";
const TodoItem = ({ tasks, handleDeleteTask }) => {
    return (
        <div>
            <div >
                {
                    tasks.map((task) => (
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