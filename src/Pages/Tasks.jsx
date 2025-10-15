import React from 'react';
import { TasksInputForm } from '../components/forms/TaskInputForm';
import { TaskTable } from '../components/tables/TaskTable';

export function TasksPage() {
    return(
        <main>
            <div>
                <TasksInputForm />
                <TaskTable />
            </div>
        </main>
    )
}