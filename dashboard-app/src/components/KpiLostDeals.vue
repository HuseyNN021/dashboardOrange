<script setup>
import { defineProps } from 'vue';
const props=defineProps({
    percent:{type: Number},
    text:{type: String},
    link:{type: String},
})
</script>

<template>
        <section class="w-[45vw] md:w-[30vw] lg:w-[25vw] h-[12rem] bg-white shadow-xl rounded-[1rem]">
        <div class="flex flex-col justify-between h-[90%] pl-2 pt-4">
            <h3 class="font-semibold text-[1.25rem] text-[#131313]">Lost Deals</h3>
            <div>     
                <p class="text-[3rem] flex items-center">{{props.percent}}% </p>
                <p class="text-[#454545] text-[0.875rem]">{{ props.text }}</p>
            </div>
            <p><a href="#" class="text-[#734A00] text-[0.875rem]">{{ props.link }} →</a></p>
        </div>
    </section>
</template>