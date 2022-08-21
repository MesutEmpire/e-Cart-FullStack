<template>


  <div class="flex justify-center items-center  bg-white p-8 lg:p-16">

    <div class="grid  p-4">

      <div
          class=" rounded-lg border border-gray-200 shadow-md p-3 sm:p-8 lg:p-12"
      >

        <div class="my-7 mb-9">
          <p class="mb-1 block text-xl lg:text-2xl font-normal text-gray-400">
            Welcome back!
          </p>
          <h1 class="block text-2xl lg:text-4xl font-bold mb-2">
            Login to your account
          </h1>
        </div>

        <form @submit.prevent="store.logIn()">
          <div class="relative mb-6">
            <input
                type="email"
                id="email"
                v-model="store.signInForm.email"

                class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
            />
            <label
                for="email"

                class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
            >
              Email Address</label
            >
          </div>

          <div class="relative mb-6">
            <input
                type="password"
                id="password"
                v-model="store.signInForm.password"
                class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
            />
            <label

                for="password"
                class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
            >
              Password</label
            >
          </div>

          <div class="flex justify-between mb-6">
            <div class="flex items-center">
              <input
                  id="remember_me"
                  name="remember_me"
                  type="checkbox"
                  class="mr-2 h-5 w-5 bg-blue-500 focus:ring-blue-400 border-gray-300 rounded-lg"
              />
              <label
                  for="remember_me"
                  class="text-sm lg:text-base font-medium text-gray-900"
              >
                Remember me
              </label>
            </div>

            <div>
              <a href="#" class="text-blue-400 hover:text-blue-500">
                Forgot your password?
              </a>
            </div>
          </div>
          <button
              type="submit"

              class="text-white mb-4 bg-pink-600 hover:bg-pink-700 focus:ring-4 focus:outline-none focus:ring-pink-500 font-medium rounded-lg text-sm lg:text-base w-full sm:w-auto px-5 py-2.5 text-center"
          >
            Sign in
          </button>

          <div
              class="text-sm lg:text-base font-medium text-gray-500 dark:text-gray-300"
          >
            Not registered?
            <router-link
                to="/signUp"
                class="text-blue-400 hover:text-blue-700 hover:underline dark:text-blue-500"
            >Create account
            </router-link>
          </div>

          <div
              v-if="false"
              class="p-4 mb-4 text-sm lg:text-base text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800"
              role="alert"
          >
            <span class="font-medium">Login Successful </span> Welcome
          </div>
          <div
              v-if="false"
              class="p-4 mb-4 text-sm lg:text-base text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
              role="alert"
          >
            <span class="font-medium">User not found! </span> Input Correct
            Email Address or Password
          </div>
        </form>
      </div>
    </div>
  </div>
  <div v-if="store.getAuthError">
    {{store.getAuthError}}
  </div>

</template>

<script setup lang="ts">
import {UserAuthStore} from "@/stores/UserAuth";

    const store = UserAuthStore()

</script>

<style scoped>

</style>