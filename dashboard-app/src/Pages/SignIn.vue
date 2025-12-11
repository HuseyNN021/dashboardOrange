<script setup>
import { ref } from "vue"
import { useRouter } from "vue-router"
import { admin } from "@/mock/admin"


const router = useRouter()
console.log(admin);

const username = ref("")
const password = ref("")
const error = ref("")


const login = () => {
  if (username.value === admin.username && password.value === admin.password) {
    localStorage.setItem("auth", "true")
    router.push("/dashboard")
  } else {
    error.value = "Username or password is incorrect"
  }
}
</script>

<template>
  <div class="flex flex-col items-center justify-center h-screen">

    <h2 class="text-2xl mb-4">Sign In</h2>

    <input v-model="username" placeholder="Username" class="border p-2 mb-2"/>
    <input v-model="password" type="password" placeholder="Password" class="border p-2 mb-2"/>

    <button @click="login" class="bg-blue-500 text-white px-4 py-2 rounded">
      Login
    </button>

    <p v-if="error" class="text-red-500 mt-2">{{ error }}</p>
  </div>
</template>
