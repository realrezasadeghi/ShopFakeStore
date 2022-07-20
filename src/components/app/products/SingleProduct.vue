<script setup lang="ts">
import { computed, defineProps } from "vue";
import { ProductInterface } from "@/core/interfaces/Product.interface";

interface PropsInterface {
  product: ProductInterface;
}

const props = defineProps<PropsInterface>();

const getRating = computed(
  () => `(${props.product.rating.rate}) ${props.product.rating.count}`
);
</script>
<template>
  <v-card class="mx-auto my-12" max-height="500">
    <v-img :src="product.image" :alt="product.title" height="250" />
    <v-card-title>
      <router-link
        :to="`/products/${product.id}`"
        class="text-black text-decoration-none"
      >
        {{ product.title }}
      </router-link>
    </v-card-title>
    <v-card-text>
      <v-row align="center" class="my-1 mx-0">
        <v-rating
          :value="product.rating.rate"
          color="warning"
          dense
          half-increments
          readonly
          length="5"
          size="14"
        />
        <div class="grey--text ms-4">{{ getRating }}</div>
      </v-row>
      <v-chip class="mt-1" label color="green">
        <v-icon left> mdi-label </v-icon>
        {{ product.category }}
      </v-chip>
      <div class="text-subtitle-1 mt-2">
        $<strong>{{ product.price }}</strong>
      </div>
    </v-card-text>
    <v-divider class="mx-4"></v-divider>
    <v-card-actions>
      <v-btn icon color="red">
        <v-icon>mdi-heart</v-icon>
      </v-btn>
      <v-spacer />
      <v-btn icon color="primary">
        <v-icon>mdi-cart</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<style></style>
