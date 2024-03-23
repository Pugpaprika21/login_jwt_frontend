<script setup>
import { onMounted, ref } from "vue";
import axios from "axios";
import Swal from "sweetalert2";
import router from "@/router";

const username = ref("");
const password = ref("");

const onLogin = () => {
  axios
    .post(import.meta.env.VITE_API_ENDPOINT + "login", {
      username: username.value.trim(),
      password: password.value.trim(),
    })
    .then((res) => {
      if (res.status == 200) {
        username.value = "";
        password.value = "";
        
        localStorage.setItem("authorization", JSON.stringify(res.data.data));
        router.push("/welcome")
      }
    })
    .catch((err) => {
      if (err.response.status == 400) {
        Swal.fire({
          title: err.response.data.message,
          text: "",
          icon: "error",
          confirmButtonText: "yes",
        });
        username.value = "";
        password.value = "";
      }
    });
};

onMounted(() => {
  localStorage.clear();
});
</script>

<template>
  <div class="container-fluid">
    <div class="card-main-login" style="margin-top: 120px">
      <div class="d-flex justify-content-center">
        <div class="card shadow-sm" style="width: 30rem">
          <div class="card-body">
            <p
              class="card-text text-center"
              style="text-align: center; font-size: 30px"
            >
              Login
            </p>
            <form id="login-main" @submit.prevent="onLogin()">
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
                <label for="userpass">password</label>
              </div>

              <button type="submit" class="button btn-login btn-singin">
                sign in
              </button>
              <br />
              <p class="lh-base text-center" style="margin-top: 30px">
                create account
                <router-link to="/register" class="text-decoration-none"
                  >register here</router-link
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
.btn-login {
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

.btn-singin:hover {
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
}
</style>