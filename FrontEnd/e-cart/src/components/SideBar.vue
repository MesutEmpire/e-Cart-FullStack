<template>

  <div class="">
    <div
        class="w-auto max-w-auto"
    >
      <div class="px-2 py-2">
<!--        <span class="bg-gray-300 rounded-full w-8 h-8 text-2xl font-mono text-white">-->
<!--         {{store.getCurrentUser.fullName.charAt(0)}}-->
<!--        </span>-->
        <div class="flex flex-wrap items-center justify-center my-3">
          <span class="inline">
          <button type="button"
                  :class="color.state"
                  class="flex mr-3 text-2xl rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
<!--          <span class="sr-only">Open user menu</span>-->
            <!--          <img class="w-12 h-12 rounded-full" src="../assets/logo.png" alt="user photo" />-->
          <h4 class=" flex items-center justify-center w-14 h-14 text-2xl font-mono text-white">{{store.getCurrentUser.fullName.charAt(0)}}</h4>
        </button>
        </span>
          <span class="inline-block">
          <span class="block text-sm text-gray-90">{{store.getCurrentUser.fullName}}</span
          >
        <span class="block text-sm font-medium text-gray-500 truncate">{{store.getCurrentUser.email}}</span>
       </span>
        </div>
<!--        //{{ store.getUser.email }}-->
        <ul>
          <li class="my-px">
            <router-link key="dashboard" to="/SuperUser/dashboard"
                class="borderTab flex flex-row items-center h-12 px-4 rounded-lg text-gray-600 hover:bg-pink-100"
            >
              <span
                  class="flex items-center justify-center text-lg text-gray-400"
              >
                <svg class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>

              </span>
              <span class="ml-3">Dashboard</span>

            </router-link>

          </li>
          <li class="my-px">
            <router-link key="users" to="/SuperUser/users"
                class="borderTab  flex flex-row items-center h-12 px-4 rounded-lg text-gray-600 hover:bg-pink-100"
            >
              <span
                  class="flex items-center justify-center text-lg text-gray-400"
              >
                <svg class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>

              </span>
              <span class="ml-3">Users</span>

            </router-link>
          </li>
          <li class="my-px">
            <router-link key="users" to="/SuperUser/products"
                class="borderTab  flex flex-row items-center h-12 px-4 rounded-lg text-gray-600 hover:bg-pink-100"
            >
              <span
                  class="flex items-center justify-center text-lg text-gray-400"
              >
                <svg class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd"></path></svg>

              </span>
              <span class="ml-3">Products</span>

            </router-link>
          </li>
          <li class="my-px">
            <a
                href="#"
                class="borderTab  flex flex-row items-center h-12 px-4 rounded-lg text-gray-600 hover:bg-pink-100"
            >
              <span
                  class="flex items-center justify-center text-lg text-gray-400"
              >
                <svg class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path><path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path></svg>

              </span>
              <span class="ml-3">Inbox</span>
              <span
                  class="flex items-center justify-center text-sm text-gray-500 font-semibold bg-gray-200 h-6 px-2 rounded-full ml-auto"
              >10</span
              >
            </a>
          </li>

          <li class="my-px">
            <a
                href="#"
                class="borderTab  flex flex-row items-center h-12 px-4 rounded-lg text-gray-600 hover:bg-pink-100"
            >
              <span
                  class="flex items-center justify-center text-lg text-gray-400"
              >
                <svg
                    class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  ></path>
                </svg>
              </span>
              <span class="ml-3">Notifications</span>

            </a>
          </li>
          <li class="my-px">
            <a
                href="#"
                class="borderTab  flex flex-row items-center h-12 px-4 rounded-lg text-gray-600 hover:bg-pink-100"
            >
              <span
                  class="flex items-center justify-center text-lg text-gray-400"
              >
                <svg
                    class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  ></path>
                  <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </span>
              <span class="ml-3">Settings</span>
            </a>
          </li>
          <li class="my-px">
            <router-link
                to="/"
                @click="store.logOut()"
                class="borderTab flex flex-row items-center h-12 px-4 rounded-lg text-gray-600 hover:bg-pink-100"
            >
              <span
                  class="flex items-center justify-center text-lg text-red-400"
              >
                <svg
                    class="flex-shrink-0 w-6 h-6 text-red-500 transition duration-75 dark:text-red-500 group-hover:text-red-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                      d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
                  ></path>
                </svg>
              </span>
              <span class="ml-3">Logout</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {UserAuthStore} from "@/stores/UserAuth";
import {computed, reactive, ref} from "vue";
    const store = UserAuthStore()

const color = reactive({
  state: `${store.getCurrentUser.color}`
})
console.log(color.state)
</script>

<style scoped>
</style>