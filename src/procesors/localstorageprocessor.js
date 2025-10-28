import { getTaskList } from "../utils/utils";

export const LocalStorageProcessor={

    createTask(task){
        localStorage.setItem(task.id, JSON.stringify(task));
        window.dispatchEvent(new Event('update'));
    },
    
    updateTaskStatus(index,task,status){

        const taskCache = task;

        try {

            taskCache.status = status;
            localStorage.setItem(index, JSON.stringify(taskCache));
            window.dispatchEvent(new Event('update'));

        } catch (error) {
            console.error('Error while updating task: ', error)
        }

    },

    updateTaskDescription(index, task, newDescription){

        const taskCache = task;

        try {
            
            taskCache.description = newDescription;
            localStorage.setItem(index, JSON.stringify(taskCache));
            window.dispatchEvent(new Event('update'));

        } catch (error) {
            
            console.error('Error while updating task description', error);
        }
    },

    getAllTasks(){
        
        return Promise.resolve(getTaskList());
    },

    getAllTaskByStatus(status){

        return getTaskList().filter(task => task.status === status);
    },
    

    deleteTask(index){

        try {
            localStorage.removeItem(index);
            window.dispatchEvent(new Event('update'));
        } catch (error) {
            console.error('Error while deleting tasks: ', index, ' Error: ', error)
        }

    }

}