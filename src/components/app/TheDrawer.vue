<script setup lang="ts">
import { computed, defineProps, ref, watch } from "vue";
import { useStore } from "vuex";
import { links } from "@/core/enums/links.enums";

const store = useStore();
const info = computed(() => store.getters["user/getUser"]);
const isAuthenticated = computed(
  () => store.getters["user/getIsAuthenticated"]
);

interface Props {
  drawerValue: boolean;
}

const props = defineProps<Props>();

const drawer = ref(props.drawerValue);

watch(
  props,
  () => {
    drawer.value = props.drawerValue;
  },
  { deep: true }
);
</script>

<template>
  <v-navigation-drawer v-model="drawer" floating>
    <v-list nav dense>
      <template v-if="isAuthenticated">
        <v-list-item link to="/profile">
          <v-list-item-title>
            <v-icon color="amber">mdi-account</v-icon>
            <span class="text-amber">{{ info.user }}</span>
          </v-list-item-title>
        </v-list-item>
      </template>
      <v-list-item v-for="link in links" :key="link.key" link :to="link.to">
        <template v-if="link.icon">
          <v-icon>{{ link.icon }}</v-icon>
        </template>

        <template v-if="link.text">
          <v-list-item-title>{{ link.text }}</v-list-item-title>
        </template>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<style></style>
