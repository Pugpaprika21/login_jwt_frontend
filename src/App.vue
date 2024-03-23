<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="app-main">
    <div class="container-fluid">
      <header>
        <div class="navbar-main">
   
        </div>
      </header>
      <main>
        <RouterView />
      </main>
      <footer>
        <!-- <p>© 2023 Your Company Name</p> -->
      </footer>
    </div>
  </div>
</template>

<style scoped>

</style>

<!-- 

  footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: rgba(56, 96, 191, 0.792);
  color: white;
  text-align: center;
}
 -->