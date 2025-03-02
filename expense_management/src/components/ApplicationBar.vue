<template>
  <v-app-bar density="compact">
    <template v-slot:prepend>
      <v-app-bar-nav-icon
        icon="mdi-currency-usd"
        @click="goToHome"
      ></v-app-bar-nav-icon>
    </template>

    <v-app-bar-title>Expense</v-app-bar-title>

    <v-btn @click="goToHome"> Monthly Expense </v-btn>
    <v-btn @click="goToReports"> Reports </v-btn>
    <template v-slot:append>
      <v-btn icon="mdi-dots-vertical"></v-btn>
    </template>
  </v-app-bar>
</template>
<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
function goToHome() {
  router.push("/");
}
function goToReports() {
  router.push("/about");
}
</script>
