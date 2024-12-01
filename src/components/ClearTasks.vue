<template>
  <div class="text-center pa-4">
    <v-dialog v-model="dialog" max-width="400" persistent>
      <template v-slot:activator="{ props: activatorProps }">
        <v-btn v-bind="activatorProps">
          <template v-slot:prepend>
            <v-icon color="error">mdi-close</v-icon>
          </template>
          Clear All Tasks
        </v-btn>
      </template>

      <v-card
        prepend-icon="mdi-trash-can"
        title="Do you want clear all tasks?"
      >
        <template v-slot:actions>
          <v-spacer></v-spacer>

          <v-btn @click="dialog = false"> No </v-btn>

          <v-btn @click="clearAllTasks"> Yes </v-btn>
        </template>
      </v-card>
    </v-dialog>
  </div>
</template>

  <script setup>
import { ref } from "vue";
import { useTaskStore } from "@/stores/task";
const taskStore = useTaskStore();
const dialog = ref(false);

const clearAllTasks = () => {
  taskStore.clearAll();
  dialog.value = false;
};
</script>