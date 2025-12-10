<script setup>
import SidebarBrand from './SidebarBrand.vue';
import SidebarItems from './SidebarItems.vue';
import SidebarUser from './SidebarUser.vue';
</script>

<template>
    <section class="flex justify-betweenc items-start flex-col pl-4 h-screen w-[17.5rem] rounded-2xl bg-[#F6F6F3]">
        <SidebarBrand/>
        <SidebarItems/>
        <SidebarUser/>        
    </section>
</template>