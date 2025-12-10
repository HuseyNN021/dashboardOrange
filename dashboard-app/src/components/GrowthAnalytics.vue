<script setup>
import GrowthCard from './GrowthCard.vue';
import GrowthData from './GrowthData.vue';
import { ref } from 'vue';

const data=ref(
[
    {title: 'Top Month', date: "November", description: '2019'},
    {title: 'Top Year', date: "2023", description: '96K sold so far'},
    {title: 'Top Buyer', date: "Maggie ", description: '96K sold so far'},

])
</script>

<template>
    <section class="w-[33rem] h-[25rem] bg-pink-200 rounded-2xl flex flex-col gap-3">
        <GrowthData/>
        <div class="flex justify-center gap-3">
            <GrowthCard v-for="value in data" :title='value.title' :key="value" :date="value.date" :desc="value.description"/>
        </div>
    </section>
</template>