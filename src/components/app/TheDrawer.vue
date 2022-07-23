<script setup lang="ts">
import { computed, defineProps, defineEmits, Ref, ref, watch } from "vue";
import { useStore } from "vuex";
import { useModelWrapper } from "@/composables/vmodel.composable";
import { links } from "@/core/enums/links.enums";

const store = useStore();
const info = computed(() => store.getters["user/getUser"]);

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
  <v-navigation-drawer v-model="drawer">
    <v-list nav dense>
      <v-list-item v-for="link in links" :key="link.key">
        <template v-if="link.text">
          <v-list-item-title>
            <router-link :to="link.to" class="text-decoration-none text-black">
              {{ link.text }}
            </router-link>
          </v-list-item-title>
        </template>
        <template v-else-if="link.icon">
          <v-list-item-icon>
            <!-- <router-link :to="link.to"></router-link> -->
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-item-icon>
        </template>
      </v-list-item>
      <template v-if="info">
        <v-list-item>
          <v-list-item-title>
            <router-link to="profile" class="text-decoration-none">
              <div class="d-flex">
                <v-icon color="amber">mdi-account</v-icon>
                <p class="text-amber">{{ info.user }}</p>
              </div>
            </router-link>
          </v-list-item-title>
        </v-list-item>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<style></style>
