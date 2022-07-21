<script setup lang="ts">
import { reactive } from "vue";
import { UserLoginInterface } from "@/core/interfaces/User.interface";
import { useLogin } from "@/composables/user.composable";
import { decodeToken } from "@/utils/decodeToken";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const { token, loading, submitLogin } = useLogin();

const store = useStore();
const router = useRouter();

const formLogin = reactive<UserLoginInterface>({ username: "", password: "" });
const login = async () => {
  await submitLogin(formLogin);
  store.dispatch("user/addUser", decodeToken(token.value as string));
  localStorage.setItem("token", token.value as string);
  router.replace("/");
};
</script>

<template>
  <v-container>
    <v-row justify="center" align="center">
      <v-col col="12" sm="8" md="5">
        <v-card class="rounded" elevation="3" :loading="loading">
          <v-card-title>
            <h3 class="text-amber text-center">Login</h3>
          </v-card-title>
          <v-divider />
          <v-card-text>
            <v-form @submit.prevent="login">
              <v-text-field
                v-model="formLogin.username"
                label="Username"
                prepend-icon="mdi-account"
              />
              <v-text-field
                v-model="formLogin.password"
                label="Password"
                type="password"
                prepend-icon="mdi-lock"
              />
              <v-row
                justify-md="end"
                justify-sm="end"
                justify="center"
                align="center"
              >
                <v-col cols="12" sm="5" md="4">
                  <v-btn
                    class="bg-amber"
                    :disabled="loading"
                    elevation="1"
                    type="submit"
                    block
                  >
                    Login
                  </v-btn>
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
