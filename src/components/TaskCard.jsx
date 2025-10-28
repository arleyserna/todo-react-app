import { TaskService } from "../services/taskservice";


export function TaskCard({task, index}) {

    
    return( <div className="card" id={index}>
                <h4 className= {task.status === 'completed' ? 'taskrdy' : 'taskicp'}>{task.description}</h4>

                <div>
                    <button onClick={() => TaskService.deleteTask(index)} style={{marginRight: '5px'}}>Delete</button>
                    <select onChange={(e) => TaskService.updateTask(index,task, e.target.value)} value={task.status}>
                        <option value='new'>New</option>
                        <option value='active'>Active</option>
                        <option value='completed'>Completed</option>
                    </select>
                </div>
        </div>

    )

}
