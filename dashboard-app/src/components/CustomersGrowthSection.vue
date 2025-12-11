<script setup>
import CustomerList from './CustomerList.vue';
import GrowthAnalytics from './GrowthAnalytics.vue';
</script>

<template>
    <section class="mt-4 flex flex-col md:flex-col lg:flex-row gap-4">
        <CustomerList/>
        <GrowthAnalytics/>
    </section>
</template>