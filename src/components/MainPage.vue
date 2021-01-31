<template>
  <div>
    <v-card class="ma-4">
    <v-card-title>Model-Input</v-card-title>
    <v-card-text>
      <v-row>
        <v-col>
          <v-file-input accept="*.bpmn" label="fCM-Input"/>
        </v-col>
        <v-col>
          <v-file-input accept="*.uml" label="UML-Input"/>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
  <formula-card/>
  </div>
</template>
<script>
import { defineComponent } from '@vue/composition-api';
import FormulaCard from './FormulaCard.vue'

export default defineComponent( {
  name: 'HelloWorld',
  components: {FormulaCard},
  setup() {
    return {
    }
  }
})
</script>
