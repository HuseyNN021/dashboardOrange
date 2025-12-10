<script setup> 
import { defineProps } from 'vue';
const { title, date, desc } = defineProps({
  title: String,
  date: String,
  desc: String,
})

</script>


<template>
    <section class="w-[10rem] h-[8rem] bg-orange-200 rounded-2xl">
        <div class="flex flex-col gap-5 p-3">
            <h3 class="text-[#7D7D7D] text-[1rem]">{{ title }}</h3>
            <div>
                <p class="text-[#734A00] text-[1.5rem]">{{ date }}</p>
                <p class="text-[#FFA500] text-[1rem]">{{ desc }}</p>
            </div>
        </div>
    </section>
</template>