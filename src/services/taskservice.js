import { TaskProcessor } from "../procesors/taskprocesor";

export const TaskService = {

    createTask(task){
        TaskProcessor.createTask(task);
    },

    deleteTask(index){
        TaskProcessor.deleteTask(index);
    },

    getAllTasks(){
        return TaskProcessor.getAllTasks();
    },

    getAllTaskByStatus(status){
        return TaskProcessor.getAllTaskByStatus(status);
    },

    updateTask(index,task,status){
        TaskProcessor.updateTaskStatus(index,task,status);
    },

}