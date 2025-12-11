<script setup>
import { ref, onMounted } from "vue";

const names = ref([]);

onMounted(async () => {
  const res = await fetch("http://localhost:3000/topStates");
  names.value = await res.json();
  console.log(names.value);
  
});
</script>

<template>

</template>
