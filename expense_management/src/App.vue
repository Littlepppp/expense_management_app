<template>
  <v-responsive>
    <v-app>
      <ApplicationBar></ApplicationBar>
      <NavigationDrawer></NavigationDrawer>
      <v-main>
        <v-container style="max-width: 100%">
          <RouterView />
        </v-container>
      </v-main>
    </v-app>
  </v-responsive>
</template>

<script setup>
import ApplicationBar from "./components/ApplicationBar.vue";
import NavigationDrawer from "./components/NavigationDrawer.vue";
import { RouterView } from "vue-router";
</script>

<style scoped></style>
