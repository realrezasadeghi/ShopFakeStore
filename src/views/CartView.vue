<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "vuex";
import { useToast } from "vue-toastification";
import { useRouter } from "vue-router";

const store = useStore();
const toast = useToast();
const router = useRouter();
const cart = computed(() => store.getters["cart/getCart"]);

const cartTotalPrice = computed(() => store.getters["cart/getCartTotalPrice"]);

const checkout = () => {
  store.dispatch("cart/checkout");
  toast.success("Checkout successfull");
  router.replace("/");
};

const deleteItemCart = (product) => {
  store.dispatch("cart/deleteItemCart", product);
};
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <template v-if="cart.length">
          <v-card
            v-for="item in cart"
            :key="item.id"
            elevation="1"
            class="my-2"
          >
            <v-card-item>
              <v-row justify="center" align="center">
                <v-col cols="12" md="4">
                  <v-img :src="item.image" :alt="item.title" :height="200" />
                </v-col>
                <v-col cols="12" md="8">
                  <v-card-title>{{ item.title }}</v-card-title>
                  <p>${{ item.price }}</p>
                  <p>count : {{ item.quantity }}</p>
                  <v-btn color="red" class="my-2" @click="deleteItemCart(item)">
                    Delete
                  </v-btn>
                </v-col>
              </v-row>
            </v-card-item>
          </v-card>
          <v-btn @click="checkout" color="amber">
            Checkout ${{ cartTotalPrice }}
          </v-btn>
        </template>
        <template v-else> No Data </template>
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
