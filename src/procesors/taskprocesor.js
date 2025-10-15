import { getTaskList } from "../utils/utils";

export const TaskProcessor={

    createTask(task){
        localStorage.setItem(task.id, JSON.stringify(task));
        window.dispatchEvent(new Event('storage'));
    },
    
    updateTaskStatus(index,task,status){

        const taskCache = task;

        try {

            taskCache.status = status;
            localStorage.setItem(index, JSON.stringify(taskCache));
            window.dispatchEvent(new Event('storage'));

        } catch (error) {
            console.error('Error while updating task: ', task)
        }

    },

    updateTaskDescription(index, task, newDescription){

        const taskCache = task;

        try {
            
            taskCache.description = newDescription;
            localStorage.setItem(index, JSON.stringify(taskCache));
            window.dispatchEvent(new Event('storage'));

        } catch (error) {
            
            console.error('Error while updating task description', task);
        }
    },

    getAllTasks(){
        return getTaskList();
    },

    getAllTaskByStatus(status){

        return getTaskList().filter(task => task.status === status);
    },
    

    deleteTask(index){

        try {
            localStorage.removeItem(index);
            window.dispatchEvent(new Event('storage'));
        } catch (error) {
            console.error('Error while deleting tasks: ', index, ' Error: ', error)
        }

    }

}