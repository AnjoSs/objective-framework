<template>
  <v-card class="ma-4">
    <v-card-title>Data Object Input</v-card-title>
    <v-card-text>
      <v-row justify="start">
        <v-col v-for="(dataObject, doIdx) in dataObjects" :key="doIdx" cols="3">
          <data-object-input
            :data-object="dataObject"
            @addState="$emit('addState', doIdx)"
            @variablesChanged="
              (newVars) => $emit('dataObjectChanged', doIdx, newVars)
            "
          />
        </v-col>
        <v-col class="d-flex" cols="3">
          <v-card
            class="ma-4"
            height="250"
            width="200"
            flat
            align="center"
            color="grey lighten-4"
            @click="$emit('addDataObject')"
          >
            <v-container fill-height fluid>
              <v-row>
                <v-col>
                  <v-btn icon color="blue-grey">
                    <v-icon>add_box</v-icon>
                  </v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-col>
      </v-row>
    </v-card-text>
    <v-card-title>Task Input</v-card-title>
    <v-card-text>
      <v-row justify="start">
        <v-col v-for="(task, tIdx) in tasks" :key="tIdx" cols="3">
          <task-input
            :task="task"
            @variablesChanged="
              (newVars) => $emit('taskChanged', tIdx, newVars)
            "
          />
        </v-col>
        <v-col cols="3">
          <v-card
            class="ma-4"
            height="120"
            width="200"
            flat
            color="grey lighten-4"
            align="center"
            @click="$emit('addTask')"
          >
            <v-container fill-height fluid>
              <v-row>
                <v-col>
                  <v-btn icon color="blue-grey">
                    <v-icon>add_box</v-icon>
                  </v-btn>
                </v-col>
              </v-row>
            </v-container>
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
      required: true
    },
    tasks: {
      type: Array,
      required: true
    }
  }
};
</script>
