import React from 'react';
import { TasksInputForm } from '../components/forms/TaskInputForm';
import { TaskTable } from '../components/tables/TaskTable';

export function TasksPage() {
    return(
        <main>
            <div>
                <h2>Tasks Page</h2>
                <p>This is where you can manage your tasks.</p>

                <TasksInputForm />
                <TaskTable />
            </div>
        </main>
    )
}