import { TaskService } from "../services/taskservice";

export function TaskCard({ task, index, deleteTask }) {
    
    return(
        <div className="card"
            key={index}>
            <h4 style={{padding: '5px 10px', margin: '5px', background: task.status === 'completed' ? '#0bd6d6ff': 'orange', borderRadius: '1rem', fontWeight: '400', textAlign: 'left'}}>{task.description}</h4>
            <div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-end'}}>
                <button onClick={() => deleteTask(index)} style={{marginRight: '5px'}}>Delete</button>
                <select onChange={(e) => TaskService.updateTask(index,task, e.target.value)} value={task.status}>
                    <option value='new'>New</option>
                    <option value='active'>Active</option>
                    <option value='completed'>Completed</option>
                </select>
            </div>
        </div>
    )
}