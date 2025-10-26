import { LocalStorageProcessor } from "../procesors/localstorageprocessor";
import { SupabaseProcessor } from "../procesors/supabaseprocessor";

const TaskProcessor = LocalStorageProcessor;

export const TaskService = {



    createTask(task){
        TaskProcessor.createTask(task);
        //SupabaseProcessor.createTask(task);
    },

    deleteTask(index){
        TaskProcessor.deleteTask(index);
        //SupabaseProcessor.deleteTask(index);
    },

    getAllTasks(){
        return TaskProcessor.getAllTasks();
        //return SupabaseProcessor.getAllTasks();
    },

    getAllTaskByStatus(status){
        return TaskProcessor.getAllTaskByStatus(status);
    },

    updateTask(index,task,status){
        TaskProcessor.updateTaskStatus(index,task,status);
        //SupabaseProcessor.updateTaskStatus(index,task,status);
    },

}