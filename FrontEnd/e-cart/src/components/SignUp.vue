<template>

  <div class="lg:max-w-2xl mx-auto bg-white md:max-w-xl sm:max-w-lg p-7 lg:p-16">

    <div class="p-4   rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8">
      <div class="flex justify-center "><img src="../assets/logo.png" class="mr-3 h-16 lg:h-24 object-fill "
                                             alt="Food Palace Logo"></div>
      <div class="flex justify-center text-2xl lg:text-4xl  my-7 mb-14 font-bold ">
        Create Account
      </div>
      <form @submit.prevent="store.signUp()" @reset="resetForm">
        <div class="grid gap-6 lg:grid-cols-2 ">

          <div class="relative ">
            <input type="text" id="first_name" v-model="store.signInForm.firstname"
                   class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                   placeholder=" " required />
            <label for="first_name"
                   class="absolute text-sm lg:text-base text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
              First Name</label>
          </div>


          <div class="relative ">
            <input type="text" id="last_name" v-model="store.signInForm.lastname"
                   class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                   placeholder=" " required />
            <label for="last_name"
                   class="absolute text-sm lg:text-base text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
              Last Name</label>
          </div>

          <div class="relative mb-6">
            <input type="tel" id="phone" v-model="store.signInForm.phoneNumber"
                   class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-white  rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                   placeholder=" " required />
            <label for="phone"
                   class="absolute text-sm lg:text-base text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
              Phone Number</label>
          </div>

        </div>

        <div class="relative mb-6">
          <input type="email" id="email" v-model="store.signInForm.email"
                 class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-white  rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                 placeholder=" " required />
          <label for="email"
                 class="absolute text-sm lg:text-base text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
            Email Address</label>
        </div>
        <div class="relative mb-6">
          <input type="password" id="password" v-model="store.signInForm.password"
                 class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-white  rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                 placeholder=" " required />
          <label for="password"
                 class="absolute text-sm lg:text-base text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
            New Password</label>
        </div>
        <div class="relative mb-6">
          <input type="password" id="confirm_password" v-model="store.signInForm.confirmPassword"

                 class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                 placeholder=" " required />
          <label for="confirm_password"

                 class="absolute text-sm lg:text-base text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Confirm
            Password</label>
        </div>
        <button type="submit"
                class="text-white bg-pink-600 hover:bg-pink-700 focus:ring-4 focus:outline-none focus:ring-pink-500 font-medium rounded-lg text-sm lg:text-base w-full sm:w-auto px-5 py-2.5 text-center ">Submit</button>
      </form>
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