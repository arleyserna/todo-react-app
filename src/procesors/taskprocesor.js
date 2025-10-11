export const TaskProcessor={

    createTask(task){
        localStorage.setItem('TaskID_'+Date.now(), JSON.stringify(task));
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

    getAllTasks(){
        return Object.entries(localStorage);
    },

    getAllTaskByStatus(status){
        return Object.entries(localStorage).filter(task => JSON.parse(task[1]).status === status);
    },

    getAllActiveAndNewTask(){
        return Object.entries(localStorage).filter(task => (JSON.parse(task[1]).status === 'new' ||  JSON.parse(task[1]).status ==='active'));
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