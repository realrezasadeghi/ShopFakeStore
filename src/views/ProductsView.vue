<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import { useGetAllCategory } from "@/composables/category.composable";
import { useGetAllProduct } from "@/composables/product.composable";
import { ProductInterface } from "@/core/interfaces/Product.interface";
import ProductList from "@/components/app/products/ProductList.vue";

const { data: categories, fetch: fetchCategories } = useGetAllCategory();
const { data, loading, fetch: fetchProducts } = useGetAllProduct();

const products = ref<ProductInterface[]>([]);

const categoryModel = ref<number>();

const handleDeleteFilter = () => {
  products.value = data.value;
};

const filterProduct = () => {
  let newProducts: ProductInterface[] = [];
  if (data.value.length) {
    newProducts = data.value.filter(
      (item: ProductInterface) =>
        item.category === categories.value[categoryModel.value as number]
    );
  }
  return newProducts;
};

watch(categoryModel, () => {
  products.value = filterProduct();
});

watch(data, () => {
  products.value = data.value;
});

onMounted(() => {
  fetchCategories();
  fetchProducts();
});
</script>

<template>
  <v-container fluid>
    <v-row justify="between" align="center">
      <v-col cols="12" sm="8" md="8">
        <v-btn-toggle v-model="categoryModel" mandatory>
          <template v-if="categories.length">
            <v-btn v-for="item in categories" :key="item"> {{ item }}</v-btn>
          </template>
        </v-btn-toggle>
      </v-col>
      <v-col cols="12" sm="" md="4">
        <v-btn
          elevation="0"
          color="red"
          class="text-white"
          block
          @click="handleDeleteFilter"
        >
          Delete Filter
        </v-btn>
      </v-col>
      <v-col cols="12">
        <product-list :products="products" :loading="loading" />
      </v-col>
    </v-row>
  </v-container>
</template>

<style></style>
