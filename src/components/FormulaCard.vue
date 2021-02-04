<template>
  <v-card class="ma-4">
    <v-card-title>
      Your Objectives
      <v-spacer />
      <create-formula-form :data-objects="dataObjects" :tasks="tasks" />
    </v-card-title>
    <v-card-text>
      <v-row>
        <v-col
          v-for="(formula, fIdx) in askCTLformulas"
          :key="fIdx"
          flat
          cols="4"
        >
          <v-textarea
            outlined
            :name="`formula_${fIdx}`"
            :label="formula.name"
            :value="formula.formula"
          ></v-textarea>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>
<script>
import CreateFormulaForm from "./CreateFormulaForm.vue";
import { ref } from "@vue/composition-api";

export default {
  components: { CreateFormulaForm },
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
  setup() {
    return {
      askCTLformulas: ref([
        { name: "Formula 1", formula: "Example CTL Formula " },
        { name: "Formula 2", formula: "Example CTL Formula " },
        { name: "Formula 3", formula: "Example CTL Formula " },
        { name: "Formula 4", formula: "Example CTL Formula " },
      ]),
    };
  },
};
</script>
