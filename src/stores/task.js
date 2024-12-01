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
        titleTaskCreating: '',
        showDialogTask: false,
        showDialogDelete: false,
        indexTaskSelected: 0
    }),
    actions: {
        addTask() {
            const title = this.titleTaskCreating;
            this.tasks.push({ title });
            this.titleTaskCreating = '';
        },
        deleteTask(){
            this.tasks.splice(this.indexTaskSelected, 1);
            this.toggle(null, "delete");
        },
        toggle(i, type = "edit") {
            if (i != null) {
                this.indexTaskSelected = i;
            }
            switch (type) {
                case "edit":
                    this.showDialogTask = !this.showDialogTask;
                    break;
                case "delete":
                    this.showDialogDelete = !this.showDialogDelete;
                    break;
                default:
                    this.showDialogTask = false;
                    this.showDialogDelete = false;
                    break;
            }
        }
    }
})
