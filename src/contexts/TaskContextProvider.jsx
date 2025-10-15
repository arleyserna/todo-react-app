import { useState } from "react";
import { createContext } from "react";

export const TaskContext = createContext(null);

export function TaskContextProvider({ children }) {

    // This is just a testing related to useContext, please ignore

    const [tasks, setTasks] = useState(['***Context Provider Task***']);

    return (
        <TaskContext.Provider value={{ tasks, setTasks }}>
            {children}
        </TaskContext.Provider>
    )
}