<script setup>
import quarterGoal from '../assets/Images/quarterGoal.webp'
import { defineProps } from 'vue';
const props=defineProps({
    percent:{type: Number},
    text:{type: String},
    link:{type: String},
})
</script>

<template>
    <section class="w-[90vw] md:w-[60vw] lg:w-[20vw] h-[12rem] bg-white shadow-xl rounded-[1rem]">
        <div class="flex flex-col justify-between items-center h-[90%] pl-2 pt-4">
            <h3 class="font-semibold text-[1.25rem] text-[#131313]">Quarter Goal</h3>
            <div>     
                <img :src="quarterGoal" alt="">
            </div>
            <p><a href="#" class="text-[#734A00] text-[0.875rem]">{{ props.text }} →</a></p>
        </div>
    </section>
</template>