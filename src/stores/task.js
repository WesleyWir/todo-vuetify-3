// Utilities
import { defineStore } from 'pinia'

export const useTaskStore = defineStore('task', {
    state: () => ({
        tasks: [
            {
                title: 'Task 1',
                description: 'Description 1',
            },
            {
                title: 'Task 2',
                description: 'Description 1',
            },
        ],
        titleTaskCreating: ''
    }),
    actions: {
        addTask() {
            const title = this.titleTaskCreating;
            this.tasks.push({ title });
            this.titleTaskCreating = '';
        }
    }
})
