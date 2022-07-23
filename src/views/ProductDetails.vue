<script setup lang="ts">
import { computed, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import {
  useGetProductByCategory,
  useGetProductById,
} from "@/composables/product.composable";
import ProductList from "@/components/app/products/ProductList.vue";
import { useStore } from "vuex";
const { params } = useRoute();
const { data, loading, fetch } = useGetProductById();
const {
  data: products,
  loading: loadingProducts,
  fetch: fetchProducts,
} = useGetProductByCategory();

const store = useStore();

const checkFavoriteItem = computed(() =>
  store.getters["favorites/checkIsFavorite"](data.value)
);

const addToFavorites = () => {
  store.dispatch("favorites/addToFavorites", data.value);
};

onMounted(() => {
  const id = params.id as unknown as number;
  fetch(id);
});

watch(data, () => {
  if (data.value?.category) fetchProducts(data.value?.category);
});
</script>

<template>
  <v-container fluid>
    <v-card>
      <v-row color="red" align="center" justify="center">
        <v-col cols="12">
          <v-card class="pa-2" elevation="0" :loading="loading">
            <v-row>
              <v-col cols="12" sm="12" md="6" lg="5">
                <v-img
                  :src="data?.image"
                  :alt="data?.title"
                  class="rounded"
                  cover
                />
              </v-col>
              <v-col cols="12" sm="12" md="6" lg="7">
                <v-chip color="warning" label text-color="white">
                  <v-icon left> mdi-label </v-icon>
                  {{ data?.category }}
                </v-chip>
                <v-card-title class="px-0">{{ data?.title }}</v-card-title>
                <v-rating
                  :value="3.2"
                  color="warning"
                  half-increments
                  readonly
                  length="5"
                  size="14"
                />
                <div class="my-4 text-subtitle-1">
                  $<b>{{ data?.price }}</b>
                </div>
                <article>
                  <h4>Description</h4>
                  <p>
                    {{ data?.description }}
                  </p>
                </article>
                <v-row dense class="mt-3">
                  <v-col cols="6">
                    <v-btn block elevation="0" color="warning">
                      Add to cart
                    </v-btn>
                  </v-col>
                  <v-col cols="6">
                    <v-btn
                      block
                      elevation="0"
                      color="red"
                      @click.stop="addToFavorites"
                    >
                      {{
                        checkFavoriteItem
                          ? "Added to favorite"
                          : "Add to favorite"
                      }}
                    </v-btn>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
        <v-divider class="my-5" />

        <v-col cols="12">
          <h1 class="text-center">Products Related</h1>
          <product-list :products="products" :loading="loadingProducts" />
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<style></style>
