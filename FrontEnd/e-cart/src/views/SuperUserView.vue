<template>
  <div class="bg-pink-300 h-96">
    <NavBar class="bg-pink-300"></NavBar>
    <div class=" bg-white my-14 mx-3 sm:mx-11 h-screen rounded sm:rounded-xl">
      <div class="grid grid-cols-6">
        <div class="border-r border-gray-300 "><SideBar></SideBar></div>
        <div class="col-span-5"> <router-view></router-view> </div>
      </div>

    </div>
  </div>

</template>

<script setup lang="ts">
import SideBar from "@/components/SideBar.vue";
import NavBar from "@/components/NavBar.vue";

</script>

<style scoped>

</style>