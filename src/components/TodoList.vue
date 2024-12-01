<template>
  <div>
    <v-text-field 
    clearable 
    label="Add Task"
    v-model="task.title"
    @keyup.enter="addTask"
    ></v-text-field>
    <ListTasks :tasks="tasks"/>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import ListTasks from './ListTasks.vue';
const tasks = ref([
    {
        title: 'Task 1',
        description: 'Description 1',
    },
    {
        title: 'Task 2',
        description: 'Description 1',
    },
]);
const task = ref({
    title: "",
    description: "",
});
const addTask = () => {
    const title = task.value.title;
    const description = task.value.description;
    tasks.value.push({ title, description });
    task.value = {
        title: "",
        description: "",
    };
}
</script>

<style>

</style>