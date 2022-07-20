<script setup lang="ts">
import { onMounted } from "vue";
import { useGetProductByLimit } from "@/composables/product.composable";

import ProductList from "@/components/app/products/ProductList.vue";
import CategoryList from "@/components/app/category/CategoryList.vue";
import TheBanner from "@/components/app/TheBanner.vue";

const { data, loading, fetch } = useGetProductByLimit();

onMounted(() => {
  fetch(4);
});
</script>

<template>
  <v-container fluid>
    <the-banner />
    <category-list />
    <product-list :products="data" :loading="loading" />
  </v-container>
</template>

<style></style>
