<script setup lang="ts">
import { useGetProductByLimit } from "@/composables/product.composable";
import { onMounted } from "@vue/runtime-core";

const { data, loading, fetch } = useGetProductByLimit();

onMounted(() => {
  fetch(5);
});
</script>

<template>
  <v-container>
    <v-carousel
      cycle
      height="400"
      hide-delimiter-background
      show-arrows-on-hover
    >
      <template v-if="data.length">
        <v-carousel-item v-for="item in data" :key="item.title">
          <v-sheet color="dark" height="100%">
            <v-container>
              <v-row justify="center" align="center">
                <v-col cols="12" md="5">
                  <v-img
                    :src="item.image"
                    :alt="item.title"
                    aspect-ratio="1.8"
                  />
                </v-col>
                <v-col
                  cols="12"
                  md="7"
                  :class="[{ 'text-center': $vuetify.display.smAndDown }]"
                >
                  <article>
                    <router-link
                      :to="`/products/${item.id}`"
                      class="text-decoration-none text-amber"
                    >
                      <h3>{{ item.title }}</h3>
                    </router-link>
                    <p v-if="$vuetify.display.mdAndUp">
                      {{ item.description }}
                    </p>
                  </article>
                </v-col>
              </v-row>
            </v-container>
          </v-sheet>
        </v-carousel-item>
      </template>
      <template v-if="loading">
        <v-carousel-item>
          <v-sheet height="100%">
            <v-row class="fill-height" justify="center">
              <v-progress-circular :size="70" color="primary" indeterminate />
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </template>
    </v-carousel>
  </v-container>
</template>

<style></style>
