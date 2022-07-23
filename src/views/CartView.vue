<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const cart = computed(() => store.getters["cart/getCart"]);

const cartTotalPrice = computed(() => store.getters["cart/getCartTotalPrice"]);
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card v-for="item in cart" :key="item.id" elevation="1" class="my-2">
          <v-card-item>
            <v-row justify="center" align="center">
              <v-col cols="12" md="4">
                <v-img :src="item.image" :alt="item.title" :height="200" />
              </v-col>
              <v-col cols="12" md="8">
                <v-card-title>{{ item.title }}</v-card-title>
                <p>${{ item.price }}</p>
                <p>count : {{ item.quantity }}</p>
                <v-btn color="red" class="my-2"> Delete </v-btn>
              </v-col>
            </v-row>
          </v-card-item>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style>
.cart-title {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 400;
  width: 300px;
}
</style>
