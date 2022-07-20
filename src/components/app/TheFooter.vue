<script setup lang="ts">
import { ref } from "vue";

const links = ref([
  "Home",
  "About Us",
  "Team",
  "Services",
  "Blog",
  "Contact Us",
]);
</script>

<template>
  <v-footer color="white" padless elevation="2">
    <v-row justify="center" no-gutters>
      <v-btn v-for="link in links" :key="link" class="ma-2" elevation="1">
        {{ link }}
      </v-btn>
      <v-col class="primary lighten-2 py-4 text-center white--text" cols="12">
        {{ new Date().getFullYear() }} — <b>Shopify</b>
      </v-col>
    </v-row>
  </v-footer>
</template>
