// Utilities
import { defineStore } from 'pinia'

export const useTaskStore = defineStore('task', {
    state: () => ({
        tasks: [],
        titleTaskCreating: '',
        showDialogTask: false,
        showDialogDelete: false,
        indexTaskSelected: 0
    }),
    actions: {
        addTask() {
            if (!this.titleTaskCreating) return;
            const title = this.titleTaskCreating;
            this.tasks.push({ title, done: false });
            this.titleTaskCreating = '';
            this.saveLocalData();
        },
        deleteTask() {
            this.tasks.splice(this.indexTaskSelected, 1);
            this.toggle(null, "delete");
            this.saveLocalData();
        },
        clearAll() {
            this.tasks = [];
            this.saveLocalData();
        },
        toggle(i, type = "edit") {
            if (i != null) {
                this.indexTaskSelected = i;
            }
            switch (type) {
                case "edit":
                    this.showDialogTask = !this.showDialogTask;
                    this.saveLocalData();
                    break;
                case "delete":
                    this.showDialogDelete = !this.showDialogDelete;
                    break;
                default:
                    this.showDialogTask = false;
                    this.showDialogDelete = false;
                    break;
            }
        },
        saveLocalData() {
            localStorage.setItem('tasks', JSON.stringify(this.tasks));
        },
        getTasks() {
            let items = localStorage.getItem('tasks');
            if (items) {
                this.tasks = JSON.parse(items);
            }
        },
        toggleDoneTask(index) {
            this.tasks[index].done = !this.tasks[index].done;
            this.saveLocalData();
        }
    }
})
