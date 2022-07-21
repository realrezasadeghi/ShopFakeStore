<script setup lang="ts">
import { footers } from "@/core/enums/footer.enums";
</script>

<template>
  <v-footer color="grey" padless elevation="2">
    <v-row justify="center" no-gutters>
      <v-btn
        v-for="item in footers"
        :key="item.key"
        class="btn-footer elevation-0"
      >
        <router-link :to="item.to" class="link">{{ item.text }}</router-link>
      </v-btn>
      <v-col class="py-4 text-center text-amber" cols="12">
        {{ new Date().getFullYear() }} — <b>Shopify</b>
      </v-col>
    </v-row>
  </v-footer>
</template>

<style>
.btn-footer {
  background: none;
  margin: 10px;
}
.link {
  text-decoration: none;
  color: white;
}
</style>
