import { useState } from "react";
import { createContext } from "react";

export const TaskContext = createContext(null);

export function TaskContextProvider({ children }) {

    const [tasks, setTasks] = useState(['***Context Provider Task***']);



    return (
        <TaskContext.Provider value={{ tasks, setTasks }}>
            {children}
        </TaskContext.Provider>
    )
}