<template>
  <div class="text-center pa-4">
    <v-dialog v-model="props.dialog" max-width="400" persistent>
      <v-card
        prepend-icon="mdi-delete-alert"
        text='Click on "Yes" if you want delete task.'
        title="Delete Task?"
      >
        <template v-slot:actions>
          <v-spacer></v-spacer>
          <v-btn @click="$emit('toggle')"> No </v-btn>
          <v-btn @click="$emit('deleteTask')"> Yes </v-btn>
        </template>
      </v-card>
    </v-dialog>
  </div>
</template>

  <script setup>
import { defineProps } from "vue";
const props = defineProps({
  dialog: Boolean,
});
</script>