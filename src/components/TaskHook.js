import { useState } from "react";

export function TaskHook(){

    const [tasks, setTasks] = useState([]);

    console.log('TaskHook called');

    const updateTasks = () => {
        setTasks(Object.entries(localStorage));
    };

    window.addEventListener('storage', updateTasks);

    console.log('Tasks in hook:', tasks);
    return tasks;

}