<template>
  <div class="flex items-start justify-center min-h-screen pt-5 min-w-screen">
    <div class="flex flex-wrap w-full px-4">
      <div v-for="item in store.getDashboardItems" :key="item">
        <div class="flex items-center overflow-hidden rounded-lg border border-gray-200 shadow-md h-16 w-64 mx-5">
          <div
              class="h-full w-1/3 flex items-center justify-center" :class="item.colour">

            <h4 class="text-2xl font-mono text-white">{{ item.abbr }}</h4>
          </div>
          <div class="w-2/3">
            <h4 class="text-2xl font-semibold text-gray-900">{{ item.no }}</h4>
            <div class="text-gray-900">{{ item.title }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>



</template>

<script setup lang="ts">
import {UserStore} from "@/stores/Users";
import {ProductStore} from '@/stores/Products'
const productsStore = ProductStore()

    const store = UserStore()

</script>
<style scoped>

</style>