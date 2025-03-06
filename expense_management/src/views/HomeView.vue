<template>
  <v-row>
    <v-col>
      <v-autocomplete
        v-model="month"
        label="Select Month"
        :items="Array.from({ length: 12 }, (_, index) => 1 + index)"
        @update:model-value="fetchMonthlyExpense()"
      ></v-autocomplete>
    </v-col>
    <v-col>
      <v-autocomplete
        v-model="year"
        label="Select Year"
        :items="Array.from({ length: 11 }, (_, index) => 2024 + index)"
        @update:model-value="fetchMonthlyExpense()"
      ></v-autocomplete>
    </v-col>
  </v-row>
  <MonthlyExpenseTable />
</template>

<script setup>
import { ref } from "vue";
import MonthlyExpenseTable from "@/components/MonthlyExpenseTable.vue";

const currentDate = new Date();
const month = ref(currentDate.getMonth() + 1);
const year = ref(currentDate.getFullYear());

function fetchMonthlyExpense() {
  console.log(month.value, year.value);
}
</script>
