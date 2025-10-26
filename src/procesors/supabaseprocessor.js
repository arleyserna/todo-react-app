import { supabase } from "../utils/supabase";


export const SupabaseProcessor={

    async createTask(task){
        const { data, error } = await supabase
            .from('task')
            .insert([task]);
        if(error){
            console.error('Error creating task: ', error);
        }
        window.dispatchEvent(new Event('update'));
        return data;
    },

    async getAllTasks(){
        const { data, error } = await supabase
            .from('task')
            .select('*');
            
        if(error){
            console.error('Error fetching tasks: ', error);
            return [];
        }
        return data;
    },

    async deleteTask(index){
        const { data, error } = await supabase
            .from('task')
            .delete()
            .eq('id', index);
        
        if(error){
            console.error('Error deleting task: ', error);
        }
        window.dispatchEvent(new Event('update'));
        return data;
    },

    async updateTaskStatus(index, task, status){

        const { data, error } = await supabase
            .from('task')
            .update({ status: status })
            .eq('id', index);
        if(error){
            console.error('Error while updating task status: ', error);
        }
        window.dispatchEvent(new Event('update'));
        return data;
    },
}