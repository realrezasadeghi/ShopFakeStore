<script setup lang="ts">
import { ref } from "vue";
import { CategoryInterface } from "@/core/interfaces/Category.interface";
import SingleCategory from "./SingleCategory.vue";

const categories = ref<CategoryInterface[]>([
  { title: "Electronics", image: "electronics" },
  { title: "Jewelery", image: "jewelery" },
  { title: "Men", image: "men" },
  { title: "Women", image: "women" },
]);
</script>

<template>
  <v-container>
    <v-row>
      <v-col
        v-for="item in categories"
        :key="item.title"
        cols="12"
        sm="6"
        md="3"
      >
        <single-category :category="item" />
      </v-col>
    </v-row>
  </v-container>
</template>

<style></style>
