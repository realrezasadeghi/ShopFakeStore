<script setup lang="ts">
import { defineProps } from "vue";
import { CategoryInterface } from "@/core/interfaces/Category.interface";

interface PropsInterface {
  category: CategoryInterface;
}

defineProps<PropsInterface>();
</script>

<template>
  <v-card>
    <v-img
      :src="require(`@/assets/images/${category.image}.jpg`)"
      class="fill-height white--text align-end"
      max-height="150"
      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
      cover
    >
      <v-card-title class="text-white"> {{ category.title }}</v-card-title>
    </v-img>
  </v-card>
</template>

<style></style>
