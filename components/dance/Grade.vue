<script setup lang="ts">
defineProps({ idx: { type: Number, default: 0 } })
const grades = {
    0: "Miss",
    1: "Perfect",
    2: "Okay",
}
const text = (idx:number) => _Get(grades, idx)
</script>

<template>
    <div :class="['tiny', _ToLower(text(idx))]"> {{ text(idx) }} </div>
</template>

<style>
.miss {
    color: #f00;
}

.okay {
    color: #00f;
    font-size: 1.5rem;
}

.perfect {
    color: #0f0;
    font-size: 2rem;
}
</style>
