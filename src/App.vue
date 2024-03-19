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
   <Header />
   <div class="text-center">
      <router-view />
   </div>
</template>
