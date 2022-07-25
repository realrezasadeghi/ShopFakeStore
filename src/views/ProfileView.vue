<script setup lang="ts">
import { computed, onMounted, reactive, ref, watch } from "vue";
import { useStore } from "vuex";
import { useGetAllUser } from "@/composables/user.composable";
import { UserInterface } from "@/core/interfaces/User.interface";
import { useRouter } from "vue-router";

const { data, loading, fetch } = useGetAllUser();

const store = useStore();
const router = useRouter();
const user = ref<UserInterface>();
const userInfo = computed(() => store.getters["user/getUser"]);
const fullname = computed(
  () => user.value?.name.firstname + " " + user.value?.name.lastname
);
const show = ref<boolean>(false);

onMounted(() => {
  fetch();
});

const getUserByUsername = (username: string): UserInterface => {
  return data.value.find((item) => item.username === username) as UserInterface;
};

const handleLogout = () => {
  store.dispatch("user/clearUser");
  localStorage.removeItem("token");
  router.push("/");
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
              <v-btn icon @click="show = !show">
                <v-icon>mdi-map</v-icon>
              </v-btn>
            </div>
            <p>phone : {{ user?.phone }}</p>
          </v-card-text>
          <v-card-actions>
            <v-btn @click="handleLogout" color="red">
              Logout
              <v-icon>mdi-logout</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-dialog v-model="show" width="500">
        <v-card min-width="500">
          <v-card-title>Google Map</v-card-title>
          <GMapMap
            :center="{ lat: 51.093048, lng: 6.84212 }"
            :zoom="7"
            map-type-id="terrain"
            style="width: 100%; height: 500px"
          >
          </GMapMap>
        </v-card>
      </v-dialog>
    </v-row>
  </v-container>
</template>

<style></style>
