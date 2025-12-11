<script setup>
import SideBar from './components/SideBar.vue';
import Body from './components/Body.vue';
</script>


<template>
  <main class="flex gap-2 bg-[#F6F6F3] min-h-screen">
    <SideBar />
    <Body class="flex-1" />
  </main>
</template>
