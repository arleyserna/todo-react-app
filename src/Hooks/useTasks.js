import { useState, useEffect } from "react";
import { TaskService } from "../services/taskservice";

export function useTasks(){

    const [tasks, setTasks] = useState([]);
    const [doneTasks, setDoneTasks] = useState([]);
    const [activeTasks, setActiveTasks] = useState([]);

    console.log('TaskHook called');

    const updateTasks = () => {
        setTasks(TaskService.getAllTaskByStatus('new'));
        setActiveTasks(TaskService.getAllTaskByStatus('active'));
        setDoneTasks(TaskService.getAllTaskByStatus('completed'));
    };

    useEffect(()=>{

        updateTasks();
        
    }, []);

    window.addEventListener('storage', updateTasks);

    console.log('Tasks in hook:', tasks);
    
    return {

            tasks, 
            setTasks, 
            activeTasks,
            setActiveTasks,
            doneTasks, 
            setDoneTasks
    };

}