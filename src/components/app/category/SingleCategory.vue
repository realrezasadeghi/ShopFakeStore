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
      src="@/assets/images/electronics.jpg"
      class="white--text align-end"
      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
    >
      <v-card-title class="text-white"> {{ category.title }}</v-card-title>
    </v-img>
  </v-card>
</template>

<style></style>
