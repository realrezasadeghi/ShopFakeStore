<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "vuex";
import ProductList from "@/components/app/products/ProductList.vue";

const store = useStore();
const favorites = computed(() => store.getters["favorites/getFavorites"]);
</script>

<template>
  <v-container>
    <v-row dense>
      <v-col cols="12">
        <h1 class="text-center text-amber">Favorites</h1>
        <product-list :products="favorites" :loading="false" />
      </v-col>
    </v-row>
  </v-container>
</template>

<style></style>
