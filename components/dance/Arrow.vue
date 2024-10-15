<script setup>
defineProps(['dir', 'styles', 'left'])

</script>

<template>
    <div :class="['note thick', dir]" :style="styles">↑</div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,900&family=Tiny5&display=swap');

.note {
    /* background-color: oldlace; */
    font-size: 72px;
    text-align: center;
    position: absolute;
    line-height: 66px;
}

.thick {
    font-family: "DM Sans", sans-serif;
    font-optical-sizing: auto;
    font-weight: 900;
}

.up {
    color: blue;
}

.right {
    transform: rotate(90deg);
    color: crimson;
}

.down {
    transform: rotate(180deg);
    color: darkorange;
}

.left {
    transform: rotate(270deg);
    color: lightgreen;
}
</style>
