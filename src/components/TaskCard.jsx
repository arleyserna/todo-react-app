export function TaskCard({ task, index, deleteTask }) {
    return(
        <div className="card"
            key={index}>
            <p>{task.description}</p>
            <button onClick={() => deleteTask(index)}>Delete</button>
        </div>
    )
}