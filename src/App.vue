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
      <router-view />
   </div>
</template>
