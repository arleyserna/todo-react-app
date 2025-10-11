import React from 'react';
import { useState } from 'react';
import { TaskContext } from '../../contexts/TaskContextProvider';
import { TaskService } from '../../services/taskservice';

export function TasksInputForm() {

    const [task, setTask] = useState({ type: 'Task', description: '', status: 'new' });

    const { tasks, setTasks } = React.useContext(TaskContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        TaskService.createTask(task);
        setTask({ type: 'Task', descripcion: '', status: 'new' });
    }

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
                                                description : e.target.value
                                            })}
                    value={task.description ?? ''}
            />
            <button type="submit" style={{margin: '15px', justifyContent: 'flex-end', background: 'rgba(28, 184, 28, 1)'}}>Add Task</button>
        </form>
        
        
    )
}