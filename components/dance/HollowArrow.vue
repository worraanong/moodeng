<script setup>
defineProps(['dir'])
</script>

<template>
    <div class="group">
        <DanceArrow :dir="[dir, 'hollow']" />
        <DanceArrow :dir="[dir, 'ground stroke']" />
    </div>
</template>

<style>
.hollow {
    color: rgb(255, 255, 255);
}

.ground {
    position: absolute;
    font-size: 90px;
    color: rgb(91, 91, 91);
    z-index: -1;
    top: -12px;
    left: -8px;
    line-height: 90px;
}

.group {
    position: relative;
    float: left;
    width: 63px;
    height: 68px;
    z-index: -2;
}

.stroke {
    color: grey;
    text-shadow: -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000;
}
</style>
