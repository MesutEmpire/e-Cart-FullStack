<template>
  <div class="max-w-2xl mx-auto bg-white p-16">
    <div class="p-4 rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8">
      <form @submit.prevent="productsStore.addNewProduct">
        <div class="grid gap-6">
          <div class="relative md:mx-6">
            <input
                type="text"
                id="food_title"
                v-model="productsStore.productForm.title"
                class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
            />
            <label
                for="food_title"
                class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
            >
              Food Title</label
            >
          </div>
          <div class="relative md:mx-6">
            <input
                type="number"
                id="food_price"
                v-model="productsStore.productForm.price"
                class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
            />
            <label
                for="food_price"
                class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
            >
              Price</label
            >
          </div>

          <div class="relative md:mx-6">
            <input
                type="number"
                id="food_time"
                v-model="productsStore.productForm.time"
                class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
            />
            <label
                for="food_time"
                class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
            >
              Time</label
            >
          </div>

          <div class="relative md:mx-6">
            <input
                type="number"
                id="food_rating"
                v-model="productsStore.productForm.rating"
                class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
            />
            <label
                for="food_rating"
                class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
            >
              Rating</label
            >
          </div>
          <div class="mb-4">
            <div class="flex justify-center items-center md:mx-6">
              <label
                  for="food-img"
                  class="flex flex-col justify-center items-center w-full h-full bg-white rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
              >
                <div
                    v-if="productsStore.productForm.img == ''"
                    class="flex flex-col justify-center items-center pt-5 pb-6"
                >
                  <svg
                      class="mb-3 w-10 h-10 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    ></path>
                  </svg>
                  <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span class="font-semibold"
                    >Click to upload Food Cover Photo</span
                    >
                    or drag and drop
                  </p>
                  <p class="text-xs text-gray-500 dark:text-gray-400">
                    SVG, PNG, JPG (MAX. 800x400px)
                  </p>
                </div>
                <input
                    id="food-img"
                    type="file"
                    class="hidden"
                    @input="event => productsStore.productForm.img = event.target.files[0]">
                <div
                    v-if="productsStore.productForm.img != ''"
                    class="aspect-w-2 aspect-h-3 rounded-lg bg-white overflow-hidden sm:col-span-4 lg:col-span-5"
                >
                  <img
                      :src="productsStore.productForm.img"
                      :alt="productsStore.productForm.title"
                      class="object-center object-cover"
                  />
                </div>
              </label>
            </div>
          </div>
        </div>

        <button
            type="submit"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm lg:text-base w-full sm:w-auto px-5 py-2.5 text-center"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
</template>
<script setup lang="ts">
import {ProductStore} from '@/stores/Products'
const productsStore = ProductStore()

</script>