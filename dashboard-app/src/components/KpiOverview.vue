<script setup>
import KpiLostDeals from './KpiLostDeals.vue';
import KpiQuarterGoal from './KpiQuarterGoal.vue';
import KpiRevenues from './KpiRevenues.vue';
import { ref,onMounted } from 'vue';
const kpiData=ref([])


onMounted(async ()=>{
    const res= await fetch("http://localhost:3000/kpi")
    kpiData.value=await res.json()
})
console.log(kpiData.value);

</script>

<template>
    <section class="flex flex-col  lg:flex-row  gap-2">
        <div class="flex gap-2">
            <KpiRevenues :percent="kpiData.revenues.percent" :text="kpiData.revenues.text" :link="kpiData.revenues.link"/>
            <KpiLostDeals :percent="kpiData.text.percent" :text="kpiData.text.text" :link="kpiData.text.link"/>
        </div>
        <KpiQuarterGoal :percent="kpiData.quarterGoal.percent" :text="kpiData.quarterGoal.text"/>
    </section>
</template>