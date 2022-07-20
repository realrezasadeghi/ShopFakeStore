<script setup lang="ts">
import { reactive } from "vue";
import { UserLoginInterface } from "@/core/interfaces/User.interface";

const formLogin = reactive<UserLoginInterface>({ username: "", password: "" });
const handleSubmitLogin = () => {
  console.log("reza");
};
</script>

<template>
  <v-container>
    <v-row justify="center" align="center">
      <v-col col="12" sm="8" md="5">
        <v-card class="rounded" elevation="3">
          <v-card-title>
            <h3 class="text-amber text-center">Login</h3>
          </v-card-title>
          <v-divider />
          <v-card-text>
            <v-form @submit.prevent="handleSubmitLogin">
              <v-text-field
                v-model="formLogin.username"
                label="Username"
                prepend-icon="mdi-account"
              />
              <v-text-field
                v-model="formLogin.password"
                label="Password"
                prepend-icon="mdi-lock"
              />
              <v-row
                justify-md="end"
                justify-sm="end"
                justify="center"
                align="center"
              >
                <v-col cols="12" sm="5" md="4">
                  <v-btn class="bg-amber" block elevation="1">Login</v-btn>
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
