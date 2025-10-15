import { useState } from "react";
import { TaskService } from "../services/taskservice";


export function TaskCard({task, index}) {

    const [showDialog, setShowDialog] = useState(false);
    
    return( <div className="card" id={index}>
            <h4 className= {task.status === 'completed' ? 'taskrdy' : 'taskicp'}
                onDoubleClick={() => setShowDialog(!showDialog)}>{task.description}</h4>

                    {/*showDialog && (
                        <div style={{position: 'fixed'}}>
                            <h1 onClick={() => setShowDialog(!showDialog)}>Hola Mundo</h1>
                        </div>
                        
                    )*/}

            <div>
                <button onClick={() => TaskService.deleteTask(index)} style={{marginRight: '5px'}}>Delete</button>
                {console.log('Rastreando el valor del índice: ', index)}
                <select onChange={(e) => TaskService.updateTask(index,task, e.target.value)} value={task.status}>
                    <option value='new'>New</option>
                    <option value='active'>Active</option>
                    <option value='completed'>Completed</option>
                </select>
            </div>
        </div>

    )

}

//(e) => console.log(e.currentTarget.parentElement.getAttribute('itemID'))