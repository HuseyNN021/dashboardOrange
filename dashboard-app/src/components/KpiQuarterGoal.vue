<script setup>
import quarterGoal from '../assets/Images/quarterGoal.webp'
</script>

<template>
    <section class="w-[20rem] h-[16rem] bg-yellow-200 rounded-[1rem]">
        <div class="flex flex-col justify-between items-center h-[90%] pl-2 pt-4">
            <h3 class="font-semibold text-[1.25rem] text-[#131313]">Quarter Goal</h3>
            <div>     
                <img :src="quarterGoal" alt="">
            </div>
            <p><a href="#" class="text-[#734A00] text-[0.875rem]">All goals →</a></p>
        </div>
    </section>
</template>