<template>
  <div>
    <v-list
      v-model:selected="settingsSelection"
      lines="three"
      select-strategy="leaf"
    >
      <v-list-subheader>General</v-list-subheader>
      <v-list-item
        v-for="(task, i) in props.tasks"
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
        <template v-slot:append>
          <v-menu>
            <template v-slot:activator="{ props }">
              <v-btn icon="mdi-dots-vertical" variant="text" v-bind="props" />
            </template>
            <v-list>
              <v-list-item>
                <v-list-item-title @click="toggle(i)">Editar</v-list-item-title>
                <v-list-item-title>Deletar</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </template>
      </v-list-item>
    </v-list>
    <DialogTask
      @toggle="toggle"
      :task="tasks[indexTaskSelected]"
      :dialog="showDialogTask"
    />
  </div>
</template>

<script setup>
import { ref, defineProps } from "vue";
import DialogTask from "@/components/DialogTask.vue";

const props = defineProps({
  tasks: Object,
});
const indexTaskSelected = ref(0);
const showDialogTask = ref(false);

const toggle = (i) => {
  if (i != null) {
    indexTaskSelected.value = i;
  }
  showDialogTask.value = !showDialogTask.value;
};
</script>