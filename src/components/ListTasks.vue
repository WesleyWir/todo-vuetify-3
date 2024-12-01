<template>
  <div>
    <v-list
      v-model:selected="settingsSelection"
      lines="three"
      select-strategy="leaf"
    >
      <v-list-subheader><v-icon icon="mdi-playlist-check"></v-icon>Tasks List</v-list-subheader>
      <v-list-item
        v-for="(task, i) in taskStore.tasks"
        :key="i"
        :subtitle="task.description"
        :title="task.title"
        :value="i"
        @click="taskStore.toggleDoneTask(i)"
      >
        <template v-slot:prepend="{ }">
          <v-list-item-action start>
            <v-checkbox-btn :model-value="task.done"></v-checkbox-btn>
          </v-list-item-action>
        </template>
        <template v-slot:append>
          <v-menu>
            <template v-slot:activator="{ props }">
              <v-btn icon="mdi-dots-vertical" variant="text" v-bind="props" />
            </template>
            <v-list>
              <v-list-item>
                <v-list-item-title @click="taskStore.toggle(i)">Editar</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title @click="taskStore.toggle(i, 'delete')"
                  >Deletar</v-list-item-title
                >
              </v-list-item>
            </v-list>
          </v-menu>
        </template>
      </v-list-item>
    </v-list>
    <DialogTask
      @toggle="taskStore.toggle(null)"
      :task="taskStore.tasks[indexTaskSelected]"
      :dialog="taskStore.showDialogTask"
    />
    <DialogDelete
      @toggle="taskStore.toggle(null, 'delete')"
      @delete="taskStore.deleteTask"
      :dialog="taskStore.showDialogDelete"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import DialogTask from "@/components/DialogTask.vue";
import DialogDelete from "@/components/DialogDelete.vue";
import { useTaskStore } from '@/stores/task';
const taskStore = useTaskStore();
const indexTaskSelected = ref(0);
const showDialogTask = ref(false);
</script>