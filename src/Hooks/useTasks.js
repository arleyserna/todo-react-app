import { useState, useEffect } from "react";
import { TaskService } from "../services/taskservice";

export function useTasks(){

    const [tasks, setTasks] = useState([]);

    const updateTasks = () => {

        TaskService.getAllTasks().then(data => {
            setTasks(data);
        });

    };

    useEffect(()=>{

        updateTasks();

        window.addEventListener('update', updateTasks);

        return () => window.removeEventListener('update', updateTasks);

    }, []);
    
    return { tasks, setTasks };

}