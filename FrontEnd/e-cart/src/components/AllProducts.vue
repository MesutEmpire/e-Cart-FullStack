<!--<template>-->
<!--  <div>-->
<!--    <div class="flex justify-end mt-5">-->
<!--      <router-link to="/SuperUser/products/add-product">-->
<!--        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-bag-plus mr-10" viewBox="0 0 16 16">-->
<!--        <path fill-rule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"/>-->
<!--        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>-->
<!--      </svg>-->
<!--      </router-link>-->
<!--    </div>-->
<!--    <div class="mt-8 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 container mx-auto px-4">-->
<!--      <div-->
<!--          v-for="product in productsStore.getProducts"-->
<!--          :key="product.id"-->
<!--          @click="viewedProduct(product.id)"-->
<!--      >-->
<!--        <div class="card">-->
<!--&lt;!&ndash;          <a href="#" data-modal-toggle="defaultModal" @click="updateDetails">&ndash;&gt;-->
<!--&lt;!&ndash;            &ndash;&gt;-->
<!--&lt;!&ndash;          </a>&ndash;&gt;-->
<!--          <img-->
<!--              class="rounded-t-lg h-96 object-contain w-full"-->
<!--              :src="product.img"-->
<!--              alt="product image"-->
<!--          />-->
<!--          <div class="px-5 pb-5 mt-3">-->
<!--            <a href="#">-->
<!--              <h5 class="text-xl text-clip font-semibold tracking-tight text-gray-900">-->
<!--                {{ product.title }}-->
<!--              </h5>-->
<!--            </a>-->
<!--            <div class="flex items-center mt-2.5 mb-5">-->
<!--              <span-->
<!--                  v-for="rating in [1, 2, 3, 4, 5]"-->
<!--                  :key="rating"-->
<!--                  :class="[-->
<!--                  product.rating.rate > rating ? 'text-gray-900' : 'text-gray-200',-->
<!--                  'h-5 w-5 flex-shrink-0',-->
<!--                ]"-->
<!--              >-->
<!--                <svg-->
<!--                    v-if="rating <= product.rating.rate"-->
<!--                    class="w-5 h-5 text-yellow-300"-->
<!--                    fill="currentColor"-->
<!--                    viewBox="0 0 20 20"-->
<!--                    xmlns="http://www.w3.org/2000/svg"-->
<!--                >-->
<!--                  <path-->
<!--                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"-->
<!--                  ></path>-->
<!--                </svg>-->
<!--              </span>-->

<!--              <span-->
<!--                  class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200"-->
<!--              >{{ product.rating.rate }}</span-->
<!--              >-->
<!--            </div>-->
<!--            <div class="flex justify-start items-center">-->
<!--              <span class="text-3xl font-bold text-gray-900"-->
<!--              >Ksh{{ product.price }}</span-->
<!--              >-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
<!--  <router-view></router-view>-->
<!--</template>-->
<!--<script setup lang="ts">-->
<!--import {ProductStore} from '@/stores/Products'-->
<!--const productsStore = ProductStore()-->
<!--productsStore.fetchProducts()-->

<!--</script>-->
<!--<style></style>-->

<template>
  <div class="flex justify-end mt-5">
          <router-link to="/SuperUser/products/add-product">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-bag-plus mr-10" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"/>
            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
          </svg>
          </router-link>
        </div>
  <div class="mr-10">
    <div class=" overflow-x-auto shadow-md sm:rounded-lg ">
      <div class="p-4">
        <label for="table-search" class="sr-only">Search</label>
        <div class="relative mt-1">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
          </div>
          <input v-model="productsStore.searchedProduct" type="text" id="table-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for Products">
        </div>
      </div>
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr >
          <th scope="col" class="p-4">
            <div class="flex items-center">
              <input  id="checkbox-all-search" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
              <label for="checkbox-all-search" class="sr-only">checkbox</label>
            </div>
          </th>
          <th scope="col" class="px-6 py-3">
            Product Name
          </th>
          <th scope="col" class="px-6 py-3">
            Merchant
          </th>
          <th scope="col" class="px-6 py-3">
            Added On
          </th>
          <th scope="col" class="px-6 py-3">
           Product ID
          </th>
          <th scope="col" class="px-6 py-3">
            Price
          </th>
          <th scope="col" class="px-6 py-3">
            <span class="sr-only">Edit</span>
          </th>
        </tr>
        </thead>
        <tbody >
        <tr v-for="product in productsStore.getProducts" :key="product._id"  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
          <td class="w-4 p-4">
            <div class="flex items-center">
              <input v-model="productsStore.deleteMultipleProduct" :value=product._id id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
              <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
            </div>
          </td>
          <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
            {{product.title}}
          </th>
          <td class="px-6 py-4" >
            {{product.merchant}}
          </td>
          <td class="px-6 py-4">
            {{product.createdAt}}
          </td>
          <td class="px-6 py-4">
            {{ product._id }}
          </td>
          <td class="px-6 py-4">
            {{ product.price }}
          </td>
<!--          <td class=" text-right">-->
<!--            &lt;!&ndash;           <a href="#" class="font-medium text-blue-600 dark:text-blue-500 ">Edit</a>&ndash;&gt;-->
<!--            <button @click="store.showMakeAdmin(product._id)">-->
<!--              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class=" w-10 h-10 p-2 hover:bg-white rounded-full" viewBox="0 0 16 16">-->
<!--                <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>-->
<!--              </svg>-->
<!--            </button>-->
<!--            <div v-if="store.getUserSelected == product._id && store.getMakeAdmin " class="origin-top-right absolute right-3 w-44 md:w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" >-->
<!--              <div class="flex justify-center text-center">-->
<!--                <div class="px-2 py-2">-->
<!--                  <ul>-->
<!--                    &lt;!&ndash;            <li class="inline-block">&ndash;&gt;-->
<!--                    &lt;!&ndash;              Make Admin&ndash;&gt;-->
<!--                    &lt;!&ndash;            </li>&ndash;&gt;-->
<!--                    &lt;!&ndash;            <li v-if="authStore.getUserAdmin"  @click="store.makeSuperUser(user.email)" class=" inline-block">&ndash;&gt;-->
<!--                    &lt;!&ndash;              Make SuperUser&ndash;&gt;-->
<!--                    &lt;!&ndash;            </li>&ndash;&gt;-->
<!--                    <li  @click="store.makeUserAdmin({email:user.email,_id:user._id})"  class="my-px">-->
<!--                      <a-->
<!--                          href="#"-->
<!--                          class="flex flex-row items-center h-12 px-4 rounded-lg text-gray-600 hover:bg-gray-100"-->
<!--                      >-->
<!--                        <span class="ml-3">Make Admin</span>-->
<!--                      </a>-->
<!--                    </li>-->
<!--                    &lt;!&ndash;                    v-if="authStore.getUserSuper"&ndash;&gt;-->
<!--                    <li   @click="store.makeSuperUser({email:user.email,_id:user._id})"  class="my-px">-->
<!--                      <a-->
<!--                          href="#"-->
<!--                          class="flex flex-row items-center h-12 px-4 rounded-lg text-gray-600 hover:bg-gray-100"-->
<!--                      >-->
<!--                        <span class="ml-3">Make SuperUser</span>-->
<!--                      </a>-->
<!--                    </li>-->
<!--                    <li   @click="store.deleteThisUser(user._id)"  class="my-px">-->
<!--                      &lt;!&ndash;                      v-if="authStore.getUserSuper"&ndash;&gt;-->
<!--                      <a-->
<!--                          href="#"-->
<!--                          class="flex flex-row items-center h-12 px-4 rounded-lg text-gray-600 hover:bg-gray-100"-->
<!--                      >-->
<!--                        <span class="ml-3">Delete User</span>-->
<!--                      </a>-->
<!--                    </li>-->
<!--                  </ul>-->
<!--                  &lt;!&ndash;            <button @click="store.makeUserAdmin(user.email)" class="inline-block">Make Admin</button>&ndash;&gt;-->


<!--                  &lt;!&ndash;            <button  v-if="authStore.getUserAdmin"  @click="store.makeSuperUser(user.email)" class=" inline-block">Make SuperUser</button>&ndash;&gt;-->

<!--                </div>-->
<!--              </div>-->
<!--            </div>-->

<!--          </td>-->

        </tr>
        </tbody>
      </table>

    </div>
    <!--   v-if="store.deleteMultipleUsers.length > 0 "-->
    <button @click="productsStore.deleteMultipleProduct(productsStore.deleteMultipleProducts)" type="submit"
            class="my-8 text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-500 font-medium rounded-lg text-sm lg:text-base w-full sm:w-auto px-5 py-2.5 text-center ">Delete Products</button>

  </div>
</template>

<script setup lang="ts">
import {ProductStore} from '@/stores/Products'
import {watchEffect} from "vue";
const productsStore = ProductStore()
watchEffect(()=>{
  productsStore.searchProduct()
})
</script>

<style scoped>

</style>