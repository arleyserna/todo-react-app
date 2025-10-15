import { useState, useEffect } from "react";
import { TaskService } from "../services/taskservice";

export function useTasks(){

    const [tasks, setTasks] = useState([]);

    const updateTasks = () => {

        console.log('called update tasks');
        setTasks(TaskService.getAllTasks());

    };

    useEffect(()=>{

        updateTasks();

        window.addEventListener('storage', updateTasks);

        // Cleaning storage Listener

        return () => window.removeEventListener('storage', updateTasks);

    }, []);

    console.log('Tasks in hook:', tasks);
    
    return { tasks, setTasks };

}