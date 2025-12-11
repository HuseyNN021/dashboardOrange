<script setup>
import DealsIcon from '../assets/Images/DealsIcon.webp'
</script>

<template>

    <section class="w-[90vw] md:w-[60vw] lg:w-[25vw]  bg-white shadow-xl px-2 rounded-2xl mt-3">
        <div class="pl-3 flex flex-col gap-3">
            <h3 class="font-semibold text-[1.25rem] text-[#131313]">
                New Deals
            </h3>
            <div class="grid grid-cols-2 gap-2">
                <div class="text-[#734A00] text-[0.5rem] bg-[#FFF7E8] p-[0.675rem] flex gap-2 rounded-2xl"><img :src="DealsIcon" alt="">Fruit2Go</div>
                <div class="text-[#734A00] text-[0.5rem] bg-[#FFF7E8] p-[0.675rem] flex gap-2 rounded-2xl"><img :src="DealsIcon" alt="">Fruit2Go</div>
                <div class="text-[#734A00] text-[0.5rem] bg-[#FFF7E8] p-[0.675rem] flex gap-2 rounded-2xl"><img :src="DealsIcon" alt="">Fruit2Go</div>
                <div class="text-[#734A00] text-[0.5rem] bg-[#FFF7E8] p-[0.675rem] flex gap-2 rounded-2xl"><img :src="DealsIcon" alt="">Fruit2Go</div>
            </div>
        </div>
    </section>
</template>