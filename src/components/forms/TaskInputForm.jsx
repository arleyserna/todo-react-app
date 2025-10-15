import { useState } from 'react';
import { TaskService } from '../../services/taskservice';
import { TaskModel } from '../../models/TaskModel';

export function TasksInputForm() {

    const [task, setTask] = useState({...TaskModel});

    const handleSubmit = (e) => {
        e.preventDefault();
        TaskService.createTask(task);
        setTask({ ...TaskModel });
    }

    /*

        TODO: Separate CSS Styles
    
    */

    return(
            
        <form onSubmit={handleSubmit} style={{border: '10px', background: 'rgba(154, 177, 154, 1)', borderRadius: '12px', display: 'flex', marginTop: '40px', alignItems: 'center', width: '90vw'}}>
            <img    src="/clipboard2.svg" 
                    style={{width: 50,
                            margin: '10px 20px',
                            borderRadius: '0%',   
                    }}
            
            />
            <input  type="text"
                    style={{height: '40px', borderRadius: '10px', width: '350px', border: '0px'}} 
                    required 
                    placeholder=" Ingrese una nueva tarea" 
                    onChange={(e) => setTask({
                                                ...task,
                                                description : e.target.value,
                                                id: Date.now(),

                                            })}
                    value={task.description ?? ''}
            />
            <button type="submit" style={{ height: '40px', margin: '15px', justifyContent: 'flex-end', background: 'rgba(28, 184, 28, 1)'}}>Add Task</button>
        </form>
        
        
    )
}