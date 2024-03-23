<script setup>
import { onMounted } from "vue";
import axios from "axios";
import Swal from "sweetalert2";
import router from "@/router";

const onJWTProtected = () => {
  const authorizationData = localStorage.getItem("authorization");
  if (authorizationData != undefined) {
    const authorizationParse = JSON.parse(authorizationData);
    const tokenJWT = authorizationParse.tokenJWT;

    axios
      .post(import.meta.env.VITE_API_ENDPOINT + "jwt_protected", null, {
        headers: {
          Authorization: `Bearer ${tokenJWT}`,
        },
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        switch (err.response.status) {
          case 400:
            Swal.fire({
              title: err.response.data.message,
              text: "",
              icon: "error",
              timer: 1500,
            }).then(() => {
              router.push("/login");
            });
            break;

          case 401:
            Swal.fire({
              title: err.response.data.message,
              text: "",
              icon: "error",
              timer: 1500,
            }).then(() => {
              router.push("/login");
            });
            break;

          default:
            break;
        }
      });
  } else {
    Swal.fire({
      title: "no authorization",
      text: "",
      icon: "error",
      timer: 1000,
    }).then(() => {
      window.location.href = "/login";
    });
  }
};

onMounted(() => {
  setInterval(() => {
    onJWTProtected();
  }, 2000);
});
</script>

<template>
  <div>Welcome Page</div>
</template>