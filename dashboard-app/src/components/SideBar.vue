<script setup>
import SidebarBrand from './SidebarBrand.vue';
import SidebarItems from './SidebarItems.vue';
import SidebarUser from './SidebarUser.vue';
import { ref } from 'vue';
const ToogleBar=ref(true)
// const isHidden=
const toggle=()=>{
    ToogleBar.value=!ToogleBar.value
    console.log(ToogleBar.value);
    
}
</script>

<template>
    <section :class="[
      'h-screen w-[17.5rem] rounded-2xl bg-white flex-col pl-4 transition-all duration-300',
      ' md:flex lg:flex ',  // desktopda hər zaman açıq
      ToogleBar ? 'flex sticky left-0 top-0 z-50' : 'hidden' // mobil üçün toggle
    ]">
        <SidebarBrand/>
        <SidebarItems/>
        <SidebarUser/>     
         
    </section>

   <!-- MOBILE BUTTON -->
  <button 
    @click="toggle"
    class="md:hidden cursor-pointer lg:hidden fixed top-4 left-4 bg-orange-500 text-white px-3 py-2 rounded-xl"
  >
    Toggle Sidebar
  </button> 
</template>