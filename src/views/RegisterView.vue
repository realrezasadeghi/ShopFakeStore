<script setup lang="ts">
import { UserRegisterInterfaceModel } from "@/api/models/User.interface";
import { useAddUser } from "@/composables/user.composable";
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { useToast } from "vue-toastification";

const router = useRouter();
const toast = useToast();

const formRegister = reactive<UserRegisterInterfaceModel>({
  email: "",
  username: "",
  password: "",
  name: {
    firstname: "",
    lastname: "",
  },
  address: {
    city: "kilcoole",
    street: "7835 new road",
    number: 3,
    zipcode: "12926-3874",
    geolocation: {
      lat: "-37.3159",
      long: "81.1496",
    },
  },
  phone: "1-570-236-7033",
});
const { loading, submitAddUser } = useAddUser();

const register = async () => {
  await submitAddUser(formRegister);
  if (loading.value) {
    router.replace({
      path: "/login",
    });
    toast.success("Successfull Register");
  }
};
</script>

<template>
  <v-container>
    <v-row justify="center" align="center">
      <v-col col="12" sm="8" md="5">
        <v-card class="rounded" elevation="3" :loading="loading">
          <v-card-title>
            <h3 class="text-amber text-center">Register</h3>
          </v-card-title>
          <v-divider />
          <v-card-text>
            <v-form @submit.prevent="register">
              <v-text-field
                v-model="formRegister.name.firstname"
                label="Firstname"
              />
              <v-text-field
                v-model="formRegister.name.lastname"
                label="Lastname"
                required
              />
              <v-text-field
                v-model="formRegister.username"
                label="Username"
                prepend-icon="mdi-account"
                required
              />
              <v-text-field
                v-model="formRegister.email"
                label="Email"
                prepend-icon="mdi-email"
              />
              <v-text-field
                v-model="formRegister.password"
                label="Password"
                type="password"
                prepend-icon="mdi-lock"
              />
              <v-row>
                <v-col cols="12" md="6" sm="6">
                  <v-btn link to="/login" elevation="0" color="gray" outlined>
                    Enter Account
                  </v-btn>
                </v-col>
                <v-col cols="12" md="6" sm="6">
                  <v-btn type="submit" color="amber" block> Register </v-btn>
                </v-col>
              </v-row>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style></style>
