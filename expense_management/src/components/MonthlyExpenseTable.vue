<template>
  <v-data-table
    :headers="headers"
    :items="items"
    item-key="name"
    items-per-page="5"
  ></v-data-table>
  <v-fab icon="mdi-plus" location="bottom right" app> </v-fab>
</template>
<script setup>
const headers = [
  { title: "Date", value: "expenseDate" },
  { title: "Description", value: "description" },
  { title: "Amount", value: "amount" },
  { title: "Category", value: "category" },
];
const items = [
  {
    expenseDate: "1/1/2025",
    description: "Costco",
    amount: "146.6",
    category: "Grocery",
  },
  {
    expenseDate: "1/1/2025",
    description: "Shell",
    amount: "33",
    category: "Gas",
  },

  {
    expenseDate: "1/1/2025",
    description: "BK",
    amount: "6.6",
    category: "Food",
  },

  {
    expenseDate: "1/3/2025",
    description: "Safeway",
    amount: "16.2",
    category: "Grocery",
  },
];
</script>
