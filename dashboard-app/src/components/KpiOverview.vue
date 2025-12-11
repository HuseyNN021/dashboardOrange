<script setup>
import KpiLostDeals from './KpiLostDeals.vue';
import KpiQuarterGoal from './KpiQuarterGoal.vue';
import KpiRevenues from './KpiRevenues.vue';
</script>

<template>
    <section class="flex flex-col  lg:flex-row  gap-2">
        <div class="flex gap-2">
            <KpiRevenues/>
            <KpiLostDeals/>
        </div>
        <KpiQuarterGoal/>
    </section>
</template>