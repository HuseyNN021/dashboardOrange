<script setup>
import SideBar from '@/components/SideBar.vue';
import Body from '@/components/Body.vue';
import { useRouter } from "vue-router"
const router = useRouter()

localStorage.setItem("msg",'This is a localstorage info')

alert(localStorage.getItem('msg'))

</script>
<template>
    <main class="flex gap-2 bg-[#F6F6F3] min-h-screen">
    <SideBar />
    <Body class="flex-1" />
     <!-- <SignIn/> -->
  </main>
</template>