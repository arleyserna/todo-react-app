import { TaskCard } from "./TaskCard"

export function TaskCardContainer({name, tasks}){

    return(
        <>
            <div className="cardcontainer">
                <h2>{name}</h2>
                {tasks.map( (task) => (
                    <div key={task.id}>
                        <TaskCard 
                            task={task} 
                            index={task.id}/>
                    </div>
                ))}
            </div>
        </>
    )

}