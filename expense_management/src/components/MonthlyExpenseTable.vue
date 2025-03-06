<template>
  <v-data-table
    :headers="headers"
    :items="items"
    item-key="name"
    items-per-page="5"
  ></v-data-table>
  <v-fab
    icon="mdi-plus"
    location="bottom right"
    app
    @click="addExpenseDialog = true"
  >
  </v-fab>
  <v-dialog v-model="addExpenseDialog" width="auto">
    <v-card title="Add Expense" min-width="500">
      <v-card-text class="pa-3">
        <v-text-field
          label="Date"
          model-value="1/1/2025"
          type="date"
          v-model="addExpenseDate"
        ></v-text-field>
        <v-text-field
          label="Description"
          type="input"
          v-model="addExpenseDescription"
        ></v-text-field>
        <v-text-field
          label="Amount"
          prefix="$"
          type="number"
          v-model="addExpenseAmount"
        ></v-text-field>
        <v-autocomplete
          v-model="addExpenseCatogry"
          label="Select Catogry"
          :items="monthlyExpenseStore.monthlyExpenseCatogries"
        ></v-autocomplete>
      </v-card-text>
      <v-card-actions>
        <v-btn
          variant="tonal"
          @click="addExpenseDialog = false"
          text="Cancel"
        ></v-btn>
        <v-btn
          variant="elevated"
          color="primary"
          @click="addExpense()"
          text="Add"
        ></v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script setup>
import { computed, ref } from "vue";
import { useMonthlyExpenseStore } from "@/stores/monthlyExpense";

const monthlyExpenseStore = useMonthlyExpenseStore();
const addExpenseDialog = ref(false);
const addExpenseDate = ref(null);
const addExpenseDescription = ref("");
const addExpenseAmount = ref(null);
const addExpenseCatogry = ref("");

const headers = computed(() => {
  return monthlyExpenseStore.monthlyExpenseHeaders;
});
const items = computed(() => {
  return monthlyExpenseStore.monthlyExpenseItems;
});

function addExpense() {
  monthlyExpenseStore.addMonthlyExpense(
    addExpenseDate.value,
    addExpenseDescription.value,
    addExpenseAmount.value,
    addExpenseCatogry.value
  );
  addExpenseDialog.value = false;
}
</script>
