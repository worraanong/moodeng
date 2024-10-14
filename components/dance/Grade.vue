<script setup>
defineProps(['idx'])
const grades = {
    0: "Miss",
    1: "Perfect",
    2: "Okay",
}
const text = (idx) => _Get(grades, idx)
</script>

<template>
    <div :class="['tiny', _ToLower(text(idx))]"> {{ text(idx) }} </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Tiny5&display=swap');

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

.tiny {
    font-family: "Tiny5", serif;
    font-weight: 400;
    font-style: normal;
}
</style>
