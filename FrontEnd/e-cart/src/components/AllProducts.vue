<template>
  <div>
    <div class="flex justify-end">
      <router-link to="/SuperUser/products/add-product">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-bag-plus mr-10" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"/>
        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
      </svg>
      </router-link>
    </div>
    <div class="mt-8 grid lg:grid-cols-4 gap-10 container mx-auto px-4">
      <div
          v-for="product in productsStore.getProducts"
          :key="product.id"
          @click="viewedProduct(product.id)"
      >
        <div class="card">
          <a href="#" data-modal-toggle="defaultModal" @click="updateDetails">
            <img
                class="rounded-t-lg h-48 object-cover w-full"
                :src="product.img"
                alt="product image"
            />
          </a>

          <div class="px-5 pb-5 mt-3">
            <a href="#">
              <h5 class="text-xl font-semibold tracking-tight text-gray-900">
                {{ product.title }}
              </h5>
            </a>
            <div class="flex items-center mt-2.5 mb-5">
              <span
                  v-for="rating in [1, 2, 3, 4, 5]"
                  :key="rating"
                  :class="[
                  product.rating > rating ? 'text-gray-900' : 'text-gray-200',
                  'h-5 w-5 flex-shrink-0',
                ]"
              >
                <svg
                    v-if="rating <= product.rating"
                    class="w-5 h-5 text-yellow-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  ></path>
                </svg>
              </span>

              <span
                  class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200"
              >{{ product.rating }}</span
              >
            </div>
            <div class="flex justify-start items-center">
              <span class="text-3xl font-bold text-gray-900"
              >Ksh{{ product.price }}</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <router-view></router-view>
</template>
<script setup lang="ts">
import {ProductStore} from '@/stores/Products'
const productsStore = ProductStore()


</script>
<style></style>