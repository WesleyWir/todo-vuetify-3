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
              </v-list-item>
              <v-list-item>
                <v-list-item-title @click="toggle(i, 'delete')"
                  >Deletar</v-list-item-title
                >
              </v-list-item>
            </v-list>
          </v-menu>
        </template>
      </v-list-item>
    </v-list>
    <DialogTask
      @toggle="toggle(null)"
      :task="tasks[indexTaskSelected]"
      :dialog="showDialogTask"
    />
    <DialogDelete
      @toggle="toggle(null, 'delete')"
      @deleteTask="deleteTask"
      :dialog="showDialogDelete"
    />
  </div>
</template>

<script setup>
import { ref, defineProps } from "vue";
import DialogTask from "@/components/DialogTask.vue";
import DialogDelete from "@/components/DialogDelete.vue";

const props = defineProps({
  tasks: Object,
});
const indexTaskSelected = ref(0);
const showDialogTask = ref(false);
const showDialogDelete = ref(false);

const toggle = (i, type = "edit") => {
  if (i != null) {
    indexTaskSelected.value = i;
  }
  switch (type) {
    case "edit":
      showDialogTask.value = !showDialogTask.value;
      break;
    case "delete":
      showDialogDelete.value = !showDialogDelete.value;
      break;
    default:
      showDialogTask.value = false;
      showDialogDelete.value = false;
      break;
  }
};

const deleteTask = () => {
  props.tasks.splice(indexTaskSelected.value, 1);
  toggle(null, "delete");
};
</script>