<script>
import Header from "./components/Header.vue";

export default {
   name: "App",
   components: {
      Header,
   },
};
</script>

<template>
   <Header></Header>
   <div class="text-center mt-4">
      <router-link to="/home"> Home </router-link>
      <router-link to="/login"> Login </router-link>
      <router-view />
   </div>
</template>
