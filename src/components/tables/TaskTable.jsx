import { useState, useEffect } from "react"
import React from "react"
import { useTasks } from "../../Hooks/useTasks"
import { TaskCard } from "../TaskCard"
import { TaskContext } from "../../contexts/TaskContextProvider"
import { TaskService } from "../../services/taskservice"

export function TaskTable() {

    const {tasks, doneTasks, activeTasks} = useTasks();

    if(tasks.length || doneTasks.length || activeTasks.length){
        return(<>
        <h2>Task Table</h2>

        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'start', border: '0', gap: '2rem'}}>
            
            <div className="cardcontainer">
                <h2>New</h2>
                <image src="./clipboard2.svg0"/>
                {tasks.map( (task) => (
                <div key={task[0]}>
                    <TaskCard 
                        task={JSON.parse(task[1])} 
                        index={task[0]}
                        deleteTask={ TaskService.deleteTask }
                    />
                </div>
                ))}
            </div>

            <div className="cardcontainer">
                <h2>Active</h2>
                <image src="./clipboard2.svg0"/>
                {activeTasks.map( (task) => (
                <div key={task[0]}>
                    <TaskCard 
                        task={JSON.parse(task[1])} 
                        index={task[0]}
                        deleteTask={ TaskService.deleteTask }
                    />
                </div>
                ))}
            </div>

            <div className="cardcontainer">
                <h2>Done</h2>
                <image src="./clipboard2.svg0"/>
                {doneTasks.map( (task) => (
                <div key={task[0]}>
                    <TaskCard 
                        task={JSON.parse(task[1])} 
                        index={task[0]}
                        deleteTask={ TaskService.deleteTask }
                    />
                </div>
                ))}
            </div>
        </div>
        </>
    )
    }
    return(<>
            <h2>Task Table</h2>
            <h3>Wow!, Looks like there are not pending tasks!.</h3>
            <img src="./bubble-tea.svg" height={120}/>
        </>
    )
}