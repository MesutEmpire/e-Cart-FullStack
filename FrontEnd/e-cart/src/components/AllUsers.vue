<template>

 <div class="mr-10">
   <div class=" overflow-x-auto shadow-md sm:rounded-lg ">
     <div class="p-4">
       <label for="table-search" class="sr-only">Search</label>
       <div class="relative mt-1">
         <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
           <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
         </div>
         <input v-model="store.searchedUser" type="text" id="table-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for users">
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
           Name
         </th>
         <th scope="col" class="px-6 py-3">
           Level
         </th>
         <th scope="col" class="px-6 py-3">
           Created On
         </th>
         <th scope="col" class="px-6 py-3">
           Email Address
         </th>
         <th scope="col" class="px-6 py-3">
           Phone Number
         </th>
         <th scope="col" class="px-6 py-3">
           User ID
         </th>
         <th scope="col" class="px-6 py-3">
           <span class="sr-only">Edit</span>
         </th>
       </tr>
       </thead>
       <tbody >
       <tr v-for="user in store.getUsers" :key="user._id"  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
          <td class="w-4 p-4">
            <div class="flex items-center">
              <input v-model="store.deleteMultipleUsers" :value=user._id id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
              <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
            </div>
          </td>
          <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
            {{user.firstname}} {{user.lastname}}
          </th>
         <td class="px-6 py-4" >
           {{user.level}}
         </td>
          <td class="px-6 py-4">
            {{user.createdAt}}
          </td>
          <td class="px-6 py-4">
            {{ user.email }}
          </td>
          <td class="px-6 py-4">
            {{ user.phoneNumber }}
          </td>
          <td class="px-6 py-4">
            {{ user._id }}
          </td>
          <td class=" text-right">
            <!--           <a href="#" class="font-medium text-blue-600 dark:text-blue-500 ">Edit</a>-->
            <button @click="store.showMakeAdmin(user._id)">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class=" w-10 h-10 p-2 hover:bg-white rounded-full" viewBox="0 0 16 16">
                <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
              </svg>
            </button>
            <div v-if="store.getUserSelected == user._id && store.getMakeAdmin " class="origin-top-right absolute right-3 w-44 md:w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" >
              <div class="flex justify-center text-center">
                <div class="px-2 py-2">
                  <ul>
                    <!--            <li class="inline-block">-->
                    <!--              Make Admin-->
                    <!--            </li>-->
                    <!--            <li v-if="authStore.getUserAdmin"  @click="store.makeSuperUser(user.email)" class=" inline-block">-->
                    <!--              Make SuperUser-->
                    <!--            </li>-->
                    <li  @click="store.makeUserAdmin({email:user.email,_id:user._id})"  class="my-px">
                      <a
                          href="#"
                          class="flex flex-row items-center h-12 px-4 rounded-lg text-gray-600 hover:bg-gray-100"
                      >
                        <span class="ml-3">Make Admin</span>
                      </a>
                    </li>
<!--                    v-if="authStore.getUserSuper"-->
                    <li   @click="store.makeSuperUser({email:user.email,_id:user._id})"  class="my-px">
                      <a
                          href="#"
                          class="flex flex-row items-center h-12 px-4 rounded-lg text-gray-600 hover:bg-gray-100"
                      >
                        <span class="ml-3">Make SuperUser</span>
                      </a>
                    </li>
                    <li   @click="store.deleteThisUser(user._id)"  class="my-px">
<!--                      v-if="authStore.getUserSuper"-->
                      <a
                          href="#"
                          class="flex flex-row items-center h-12 px-4 rounded-lg text-gray-600 hover:bg-gray-100"
                      >
                        <span class="ml-3">Delete User</span>
                      </a>
                    </li>
                  </ul>
                  <!--            <button @click="store.makeUserAdmin(user.email)" class="inline-block">Make Admin</button>-->


                  <!--            <button  v-if="authStore.getUserAdmin"  @click="store.makeSuperUser(user.email)" class=" inline-block">Make SuperUser</button>-->

                </div>
              </div>
            </div>

          </td>

       </tr>
       </tbody>
     </table>

   </div>
<!--   v-if="store.deleteMultipleUsers.length > 0 "-->
   <button @click="store.deleteMultipleUser(store.deleteMultipleUsers)" type="submit"
           class="my-8 text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-500 font-medium rounded-lg text-sm lg:text-base w-full sm:w-auto px-5 py-2.5 text-center ">Delete Users</button>

 </div>
</template>

<script setup lang="ts">
import {watchEffect} from "vue";
import {UserStore} from "@/stores/Users";
import {UserAuthStore} from "@/stores/UserAuth";

    const store = UserStore()
    const authStore = UserAuthStore()
    watchEffect(()=>{
        store.searchUser()
    })
    console.log(authStore.getUser)
</script>

<style scoped>

</style>