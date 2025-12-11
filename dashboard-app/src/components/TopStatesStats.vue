<script setup>
import { ref } from 'vue';
const states=ref([
    {title: "NY", value: "120K", styleState: "w-[100%] "},
    {title: "MA", value: "80K", styleState: "w-[80%] "},
    {title: "NH", value: "70K", styleState: "w-[70%] "},
    {title: "OR", value: "50K", styleState: "w-[50%] "}
])
</script>
<template>
    <section class="w-[45vw] md:w-[30vw] lg:w-[25vw] bg-white shadow-xl p-1 rounded-2xl mt-3">
        <div class="pl-3 flex flex-col gap-3">
            <h3 class="font-semibold text-[1.25rem] text-[#131313]">
                Top states
            </h3>
            <ul  class="w-[10rem]  z-1 flex flex-col gap-1">
                <li  v-for="value in states" :class="value.styleState" class="text-[0.7rem] p-1 rounded-xl bg-[linear-gradient(90deg,_#FFCD71_-2.57%,_rgba(255,205,113,0)_112.5%)]">{{ value.title }}</li>
            </ul>
        </div>        
    </section>
</template>