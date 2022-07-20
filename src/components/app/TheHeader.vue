<script setup lang="ts">
import { links } from "@/core/enums/links.enums";
</script>
<template>
  <v-app-bar elevation="2" app inverted-scroll>
    <v-app-bar-title> <strong>Shopify</strong> </v-app-bar-title>
    <v-spacer />
    <template v-for="link in links">
      <template v-if="link.text">
        <v-btn :key="link.key" text>
          <router-link :to="link.to" class="text-decoration-none text-black">
            {{ link.text }}
          </router-link>
        </v-btn>
      </template>
      <template v-if="link.icon">
        <v-btn :key="link.key" icon>
          <router-link :to="link.to" class="text-black">
            <v-icon>{{ link.icon }}</v-icon>
          </router-link>
        </v-btn>
      </template>
    </template>
  </v-app-bar>
</template>

<style></style>
