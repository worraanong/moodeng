<script setup>
defineProps(['dir', 'styles', 'left'])

</script>

<template>
    <div :class="['note thick', dir]" :style="styles">↑</div>
</template>

<style>

.note {
    /* background-color: oldlace; */
    font-size: 72px;
    text-align: center;
    position: absolute;
    line-height: 66px;
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
.x {
    display: none;
}
</style>
