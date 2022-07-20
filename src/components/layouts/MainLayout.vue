<script setup lang="ts">
import TheHeader from "@/components/app/TheHeader.vue";
import TheFooter from "@/components/app/TheFooter.vue";
</script>

<template>
  <v-app>
    <the-header />
    <v-main>
      <v-container>
        <router-view v-slot="{ Component, route }">
          <transition name="scale" mode="out-in">
            <component :is="Component" :key="route.path" />
          </transition>
        </router-view>
      </v-container>
    </v-main>
    <the-footer />
  </v-app>
</template>

<style>
.scale-enter-active,
.scale-leave-active {
  transition: all 0.5s ease;
}
.scale-enter-from,
.scale-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
</style>
