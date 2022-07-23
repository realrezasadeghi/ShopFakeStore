<script setup lang="ts">
import { computed, onMounted, ref, watch } from "vue";
import { useStore } from "vuex";
import { useGetAllUser } from "@/composables/user.composable";
import { UserInterface } from "@/core/interfaces/User.interface";
const { data, loading, fetch } = useGetAllUser();

const store = useStore();
const user = ref<UserInterface>();
const userInfo = computed(() => store.getters["user/getUser"]);
const fullname = computed(
  () => user.value?.name.firstname + " " + user.value?.name.lastname
);

onMounted(() => {
  fetch();
});

const getUserByUsername = (username: string): UserInterface => {
  return data.value.find((item) => item.username === username) as UserInterface;
};

watch(data, () => {
  if (userInfo.value) {
    user.value = getUserByUsername(userInfo.value.user);
  }
});
</script>

<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="10" md="6">
        <v-card :loading="loading">
          <v-img
            src="https://b2n.ir/k59071"
            :alt="user?.username"
            class="v-img__img--cover"
          />
          <v-card-title class="text-amber">
            {{ fullname.toUpperCase() }}
          </v-card-title>
          <v-card-subtitle>{{ user?.email }}</v-card-subtitle>
          <v-card-text>
            <p class="text-grey">info</p>
            <div class="d-flex justify-space-between align-center">
              <p>city : {{ user?.address.city }}</p>
              <v-btn icon>
                <v-icon>mdi-map</v-icon>
              </v-btn>
            </div>
            <p>phone : {{ user?.phone }}</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style></style>
