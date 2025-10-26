import { useState, useEffect } from "react";
import { TaskService } from "../services/taskservice";

export function useTasks(){

    const [tasks, setTasks] = useState([]);

    const updateTasks = () => {

        console.log('called update tasks');
        TaskService.getAllTasks().then(data => {
            setTasks(data);
        });

       // setTasks(TaskService.getAllTasks());
    };

    useEffect(()=>{

        updateTasks();

        window.addEventListener('update', updateTasks);

        // Cleaning storage Listener

        return () => window.removeEventListener('update', updateTasks);

    }, []);

    console.log('Tasks in hook:', tasks);
    
    return { tasks, setTasks };

}