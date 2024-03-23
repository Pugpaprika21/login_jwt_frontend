<script setup>
import { ref } from "vue";
import axios from "axios";
import Swal from "sweetalert2";

const username = ref("");
const password = ref("");
const email = ref("");

const onRegister = () => {
  const params = {
    username: username.value.trim(),
    password: password.value.trim(),
    email: email.value.trim(),
  };
  axios
    .post(import.meta.env.VITE_API_ENDPOINT + "register", params)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.error(err);
    });
};
</script>

<template>
  <div class="container-fluid">
    <div class="card-main-register" style="margin-top: 100px">
      <div class="d-flex justify-content-center">
        <div class="card shadow-sm" style="width: 30rem">
          <div class="card-body">
            <p
              class="card-text text-center"
              style="text-align: center; font-size: 30px"
            >
              Register
            </p>
            <form id="register-main" @submit.prevent="onRegister()">
              <div class="form-floating mb-4 mt-4">
                <input
                  type="text"
                  class="form-control"
                  v-model="username"
                  placeholder="Username"
                />
                <label for="username">username</label>
              </div>
              <div class="form-floating mb-4 mt-4">
                <input
                  type="password"
                  class="form-control"
                  v-model="password"
                  placeholder="Password"
                />
                <label for="password">password</label>
              </div>
              <div class="form-floating mb-4 mt-4">
                <input
                  type="text"
                  class="form-control"
                  v-model="email"
                  placeholder="Email"
                />
                <label for="email">email</label>
              </div>
              <button
                type="submit"
                class="button btn-register-main btn-register"
              >
                register
              </button>
              <br />
              <p class="lh-base text-center" style="margin-top: 30px">
                <router-link to="/login" class="text-decoration-none"
                  >back to login</router-link
                >
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.btn-register-main {
  background-color: #c31c4e;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  -webkit-transition-duration: 0.4s;
  transition-duration: 0.4s;
  width: 100%;
}

.btn-register:hover {
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
}
</style>