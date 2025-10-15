import { useTasks } from "../../Hooks/useTasks"
import { TaskCardContainer } from "../TaskCardContainer";

export function TaskTable() {

    const {tasks} = useTasks();

    if(tasks.length){
        
        return(
            <>
              <h2>Task Table</h2>
                <div className="tasktable">
                    
                    <TaskCardContainer name='New' tasks={tasks.filter(task => task.status === 'new')} />
                    <TaskCardContainer name='Active' tasks={tasks.filter(task => task.status === 'active')} />
                    <TaskCardContainer name='Completed' tasks={tasks.filter(task => task.status === 'completed')} />
                    
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