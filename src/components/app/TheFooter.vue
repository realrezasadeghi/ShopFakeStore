<script setup lang="ts">
import { footers } from "@/core/enums/footer.enums";
</script>

<template>
  <v-footer color="grey" padless elevation="2">
    <v-row justify="center" no-gutters>
      <v-btn
        v-for="item in footers"
        :key="item.key"
        :to="item.to"
        elevation="0"
        color="grey"
        link
      >
        {{ item.text }}
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
</style>
