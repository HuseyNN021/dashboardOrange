<script setup>
import ChatOverview from './ChatOverview.vue';
import NewDeals from './NewDeals.vue';
import TopStatesStats from './TopStatesStats.vue';
</script>

<template>
    <section class="flex flex-col lg:flex-row gap-3">
       <div class="flex gap-2"> 
            <ChatOverview/>
            <TopStatesStats/>
       </div>
        <NewDeals/>
    </section>
</template>