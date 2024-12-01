<template>
  <div class="text-center pa-4">
    <v-dialog v-model="taskStore.showDialogTask" max-width="400" persistent>
      <v-card>
        <v-card-text>
          <v-text-field v-model="props.task.title" label="Title" />
          <v-text-field v-model="props.task.description" label="Description" />
        </v-card-text>
        <template v-slot:actions>
          <v-spacer></v-spacer>
          <v-btn @click="$emit('toggle')"> Confirmar </v-btn>
        </template>
      </v-card>
    </v-dialog>
  </div>
</template>
  

<script setup>
import { defineProps } from "vue";
import { useTaskStore } from "@/stores/task";
const taskStore = useTaskStore();
const props = defineProps({
  task: Object,
});
</script>