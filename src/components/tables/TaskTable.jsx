import { useState, useEffect } from "react"
import React from "react"
import { TaskHook } from "../TaskHook"
import { TaskCard } from "../TaskCard"

export function TaskTable() {

    const [tasks, setTasks] = useState([]);

    const tasks2 = TaskHook();

    useEffect( () => {
        setTasks(Object.entries(localStorage));
        console.log('Tasks updated:', tasks);
    }, [tasks2] );

    const deleteTask = (index) => {
        localStorage.removeItem(index);
        window.dispatchEvent(new Event('storage'));
    }


    return(<>
        <h2>Task Table</h2>
        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
            
            <div className="cardcontainer">
                {tasks.map( (task) => (
                <div key={task[0]}>
                    <TaskCard 
                        task={JSON.parse(task[1])} 
                        index={task[0]}
                        deleteTask={ deleteTask }
                    />

                </div>
                ))}
            </div>

             <div className="cardcontainer">
                {tasks.map( (task) => (
                <div key={task[0]}>
                    <TaskCard 
                        task={JSON.parse(task[1])} 
                        index={task[0]}
                        deleteTask={ deleteTask }
                    />

                </div>
                ))}
            </div>


        </div>
        </>
    ) 
}