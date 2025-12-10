<script setup>
import chart from '../assets/Images/Chart.webp'
</script>

<template>
    <section class="w-[33rem] h-[16rem] bg-amber-200 p-4 rounded-2xl">
        <div class="flex flex-col gap-4">
            <!-- header -->
            <div class="flex justify-between">
                <h3 class="font-semibold text-[1.25rem] text-[#131313]">Growth</h3>
                <select name="" id="">
                    <option value="">Yearly</option>
                    <option value="">Monthly</option>
                    <option value="">Daily</option>
                </select>
            </div>

            <!-- Chart -->

            <div>
                <img :src="chart" alt="" class="w-[30rem] h-[10rem]">
            </div>

        </div>
    </section>
</template>