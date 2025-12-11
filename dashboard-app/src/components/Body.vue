<script setup>
import CustomersGrowthSection from './CustomersGrowthSection.vue';
import EngagementAndSalesSection from './EngagementAndSalesSection.vue';
import KpiOverview from './KpiOverview.vue';
</script>

<template>
    <section class="w-[60vw] flex flex-col items-center p-1 lg:pl-5 rounded-2xl h-screen overflow-y-auto">
        <KpiOverview/>
        <CustomersGrowthSection/>
        <EngagementAndSalesSection/>
    </section>
</template>