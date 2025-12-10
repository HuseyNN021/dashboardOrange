<script setup>
import KpiLostDeals from './KpiLostDeals.vue';
import KpiQuarterGoal from './KpiQuarterGoal.vue';
import KpiRevenues from './KpiRevenues.vue';
</script>

<template>
    <section class="flex gap-2">
        <KpiRevenues/>
        <KpiLostDeals/>
        <KpiQuarterGoal/>
    </section>
</template>