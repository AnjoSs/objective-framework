<template>
  <v-dialog v-model="showDialog" width="800" persistent>
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="blue-grey" v-bind="attrs" v-on="on" class="white--text">
        Create new
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        Create a new Objective
        <v-spacer />
        <v-icon size="24" @click="showDialog = false">close</v-icon>
      </v-card-title>
      <v-card-text>
        <div>
          <v-text-field label="Name" clearable />
        </div>
        <div>
          <h4 class="py-2">Choose the desired Data Object States:</h4>
          <v-select
            label="Data Object States"
            outlined
            multiple
            chips
            clearable
            :items="dataObjectStateInputs"
          />
        </div>
        <div>
          <h4 class="py-2">Choose Tasks that should be enabled:</h4>
          <v-select
            label="Tasks"
            outlined
            multiple
            chips
            clearable
            :items="taskInputs"
          />
        </div>
        <v-divider class="py-2" />
        <h3 class="py-2">The resulting ASK-CTL formula:</h3>
        <v-textarea
          outlined
          :name="`new_formula`"
          :label="newFormula.name"
          :value="newFormula.formula"
        ></v-textarea>
      </v-card-text>
      <v-card-actions>
        <v-btn text @click="showDialog = false">
          Abort
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn
          color="blue-grey"
          class="white--text"
          min-width="200"
          @click="showDialog = false"
        >
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
import { ref, toRefs, watch } from "@vue/composition-api";
export default {
  name: "CreateFormulaForm",
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
  setup(props) {
    const { dataObjects, tasks } = toRefs(props);

    const dataObjectStateInputs = ref([]);

    watch(
      dataObjects,
      () => {
        dataObjectStateInputs.value = [];
        dataObjects.value.forEach((dataObject) => {
          dataObject.states.forEach((state) => {
            dataObjectStateInputs.value.push(
              `${dataObject.name} [${state.name}]`
            );
          });
        });
      },
      { deep: true }
    );

    const taskInputs = ref([]);

    watch(
      tasks,
      () => {
        taskInputs.value = [];
        tasks.value.forEach((task) => {
          taskInputs.value.push(task.name);
        });
      },
      { deep: true }
    );

    return {
      showDialog: ref(false),
      dataObjectStateInputs,
      taskInputs,
      newFormula: ref({
        name: "",
        formula: `The Resulting Formula. It's computation still needs to be implemented`,
      }),
    };
  },
};
</script>
