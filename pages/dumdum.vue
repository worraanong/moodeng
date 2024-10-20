<script setup lang="ts">
const url = '/api/dumdum'
const { data: note } = await useFetch(`${url}`)


</script>
<template>
    <div>{{ note }}</div>
</template>