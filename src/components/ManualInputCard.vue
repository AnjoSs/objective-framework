<template>
  <v-card class="ma-4">
    <v-card-title>Data Object Input</v-card-title>
    <v-card-text>
      <v-row justify="start">
        <v-col v-for="(dataObject, doIdx) in dataObjects" :key="doIdx">
          <data-object-input
            :data-object="dataObject"
            @addState="$emit('addState', doIdx)"
            @variablesChanged="
              (newVars) => $emit('dataObjectChanged', doIdx, newVars)
            "
          />
        </v-col>
        <v-col>
          <v-card
            class="ma-4"
            height="250"
            width="200"
            flat
            color="grey lighten-4"
            justify="center"
            align="center"
            @click="$emit('addDataObject')"
          >
            <div>
              <v-btn icon color="blue-grey">
                <v-icon>add_box</v-icon>
              </v-btn>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-card-text>
    <v-card-title>Task Input</v-card-title>
    <v-card-text>
      <v-row justify="start">
        <v-col v-for="(task, tIdx) in tasks" :key="tIdx">
          <task-input :task="task" />
        </v-col>
        <v-col>
          <v-card
            class="ma-4"
            height="120"
            width="200"
            flat
            color="grey lighten-4"
            justify="center"
            align="center"
            @click="$emit('addTask')"
            @variablesChanged="
              (newVars) => $emit('taskChanged', doIdx, newVars)
            "
          >
            <div>
              <v-btn icon color="blue-grey">
                <v-icon>add_box</v-icon>
              </v-btn>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>
<script>
import DataObjectInput from "./DataObjectInput.vue";
import TaskInput from "./TaskInput.vue";

export default {
  components: { DataObjectInput, TaskInput },
  props: {
    dataObjects: {
      type: Array,
      required: true,
    },
    tasks: {
      type: Array,
      required: true,
    },
  },
};
</script>
