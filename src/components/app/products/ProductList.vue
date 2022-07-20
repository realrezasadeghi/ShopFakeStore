<script setup lang="ts">
import { defineProps } from "vue";
import { ProductInterface } from "@/core/interfaces/Product.interface";
import SingleProduct from "./SingleProduct.vue";

interface PropsInterface {
  products: ProductInterface[];
  loading: boolean;
}

defineProps<PropsInterface>();
</script>
<template>
  <v-container>
    <v-row justify="center" align="center">
      <template v-if="products.length">
        <v-col
          v-for="item in products"
          :key="item.title"
          cols="12"
          sm="6"
          md="4"
          lg="3"
        >
          <single-product :product="item" />
        </v-col>
      </template>
      <template v-else-if="loading">
        <v-progress-circular :size="70" color="primary" indeterminate />
      </template>
    </v-row>
  </v-container>
</template>
<style></style>
