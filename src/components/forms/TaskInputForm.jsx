import React from 'react';
import { useState } from 'react';

export function TasksInputForm() {

    const [task, setTask] = useState({ type: 'Task', descripcion: '' });

    const miStorage = window.localStorage;
    

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('New Task:', task.descripcion);
        miStorage.setItem('TaskID_'+Date.now(), JSON.stringify(task));
        window.dispatchEvent(new Event('storage'));
        setTask({ type: 'Task', descripcion: '' });
        console.log(miStorage);
    }


    return(
        <form onSubmit={handleSubmit}>
            <input  type="text" 
                    required 
                    placeholder="Enter a new task" 
                    onChange={(e) => setTask({
                                                type : 'Task',
                                                description : e.target.value
                                            })}
                    value={task.descripcion}
            />
            <button type="submit">Add Task</button>
        </form>
    )
}