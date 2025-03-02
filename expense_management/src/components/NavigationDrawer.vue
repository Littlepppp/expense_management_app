<template>
  <v-navigation-drawer expand-on-hover rail permanent @click="rail = false">
    <v-list density="compact" nav>
      <v-list-item
        prepend-icon="mdi-table"
        title="Monthly Expense Table"
        @click="goToHome"
        value="table"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-file-chart-outline"
        title="Reports"
        @click="goToReports"
        value="report"
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script setup>
// import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

function goToHome() {
  router.push("/");
}
function goToReports() {
  router.push("/about");
}
</script>
