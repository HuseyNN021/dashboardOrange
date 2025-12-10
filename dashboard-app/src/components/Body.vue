<script setup>
import CustomersGrowthSection from './CustomersGrowthSection.vue';
import EngagementAndSalesSection from './EngagementAndSalesSection.vue';
import KpiOverview from './KpiOverview.vue';
</script>

<template>
    <section class="flex flex-col">
        <KpiOverview/>
        <CustomersGrowthSection/>
        <EngagementAndSalesSection/>
    </section>
</template>