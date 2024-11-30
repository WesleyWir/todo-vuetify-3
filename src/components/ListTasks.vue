<template>
  <div>
    <v-text-field 
    clearable 
    label="Add Task"
    v-model="task.title"
    @keyup.enter="addTask"
    ></v-text-field>
    <v-list
      v-model:selected="settingsSelection"
      lines="three"
      select-strategy="leaf"
    >
      <v-list-subheader>General</v-list-subheader>
      <v-list-item
        v-for="task, i in tasks"
        :key="i"
        :subtitle="task.description"
        :title="task.title"
        :value="i"
      >
        <template v-slot:prepend="{ isSelected }">
          <v-list-item-action start>
            <v-checkbox-btn :model-value="isSelected"></v-checkbox-btn>
          </v-list-item-action>
        </template>
      </v-list-item>
    </v-list>
  </div>
</template>

<script setup>
import { ref } from 'vue';
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