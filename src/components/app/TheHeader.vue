<script setup lang="ts">
import { links } from "@/core/enums/links.enums";
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";
import { ref, defineEmits } from "vue";
const store = useStore();

const drawer = ref<boolean>(false);

const info = computed(() => store.getters["user/getUser"]);

const isAuthenticated = computed(
  () => store.getters["user/getIsAuthenticated"]
);

const emit = defineEmits(["drawer"]);

const toggleDrawer = () => {
  drawer.value = !drawer.value;
  emit("drawer", drawer.value);
};
</script>
<template>
  <v-app-bar elevation="2" app inverted-scroll>
    <v-app-bar-title> <strong>Shopify</strong> </v-app-bar-title>
    <v-spacer />
    <template v-if="$vuetify.display.smAndUp">
      <template v-for="link in links">
        <template v-if="link.text">
          <v-btn :key="link.key" link :to="link.to" elevation="0" color="gray">
            {{ link.text }}
          </v-btn>
        </template>
        <template v-if="link.icon">
          <v-btn :key="link.key" :to="link.to" link icon>
            <v-icon>{{ link.icon }}</v-icon>
          </v-btn>
        </template>
      </template>
      <template v-if="isAuthenticated">
        <router-link to="profile" class="text-decoration-none">
          <div class="d-flex">
            <v-icon color="amber">mdi-account</v-icon>
            <p class="text-amber">{{ info.user }}</p>
          </div>
        </router-link>
      </template>
    </template>
    <template v-else>
      <v-app-bar-nav-icon @click.stop="toggleDrawer" />
    </template>
  </v-app-bar>
</template>

<style></style>
