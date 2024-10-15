<script setup lang="ts">
const time = 'remainingTime'

</script>
<template>
    <TimeLapse :time-sync="time" :tick="-1" />
</template>
