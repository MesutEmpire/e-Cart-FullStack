<template>
  <NavBar></NavBar>
  <div class="grid grid-cols-6">
    <div><SideBar></SideBar></div>
    <div class="col-span-5"> <router-view></router-view> </div>
  </div>


</template>

<script setup lang="ts">
import SideBar from "@/components/SideBar.vue";
import NavBar from "@/components/NavBar.vue";

</script>

<style scoped>

</style>