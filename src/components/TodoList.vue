<template>
  <v-container>
    <ClearTasks />
    <form @submit.prevent="taskStore.addTask">
      <v-text-field
        required
        clearable
        label="Add Task"
        v-model="taskStore.titleTaskCreating"
      />
    </form>
    <ListTasks />
  </v-container>
</template>

<script setup>
import { onMounted } from "vue";
import ListTasks from "./ListTasks.vue";
import ClearTasks from "./ClearTasks.vue";
import { useTaskStore } from "@/stores/task";

const taskStore = useTaskStore();
onMounted(() => {
  taskStore.getTasks();
});
</script>

<style>
</style>