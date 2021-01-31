<template>
   <v-dialog
      v-model="showDialog"
      width="800"
      persistent
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="blue-grey"
          v-bind="attrs"
          v-on="on"
          class="white--text"
        >
          Create new
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          Create a new Objective
          <v-spacer/>
          <v-icon size="24" @click="showDialog = false">close</v-icon>
        </v-card-title>
        <v-card-text>
          <div>
            <v-text-field
            label="Name"
            clearable
            />
          </div>
          <div>
            <h4 class="py-2"> Choose the desired Data Object States:</h4>
            <v-select
              label="Data Object States"
              outlined
              multiple
              chips
              clearable
              :items="dataObjectStates"
            />
          </div>
          <div>
            <h4 class="py-2"> Choose Tasks that should be enabled:</h4>
            <v-select
            label="Tasks"
              outlined
              multiple
              chips
              clearable
              :items="tasks"
            />
          </div>
          <v-divider class="py-2"/>
          <h3 class="py-2"> The resulting ASK-CTL formula: </h3>
          <v-textarea
          outlined
          :name="`new_formula`"
          :label="newFormula.name"
          :value="newFormula.formula"
        ></v-textarea>
        </v-card-text>
        <v-card-actions>
          <v-btn
            text
            @click="showDialog = false"
          >
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
import { defineComponent } from '@vue/composition-api';

export default defineComponent( {
  name: 'CreateFormulaForm',
  setup() {
    return {
    }
  },
  data() {
    return {
      showDialog: false,
      dataObjectStates: [
        'DO1 [State1]',
        'DO1 [State2]',
        'DO1 [State3]',
        'DO2 [State1]',
        'DO2 [State2]',
        'DO3 [State1]',
      ],
      tasks: [
        'Task 1',
        'Task 2',
        'Task 3',
        'Task 4',
      ],
      newFormula: {
        name: '',
        formula: `The Resulting Formula. It's computation still needs to be implemented`
      }
    }
  }
})
</script>
