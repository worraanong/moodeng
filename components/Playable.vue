<script setup>
import '~/assets/css/layer.css'
const newPose = ref('stand')
const randomPose = () => {
    newPose.value = 'flinch-auto'
    resetPose()
}

const test = () => {
    newPose.value = 'float'
    resetPose(400)
}

const test2 = () => {
    newPose.value = 'break'
    resetPose(400)
}

const resetPose = (delay = 800) => {
    _Delay(() => { newPose.value = 'stand' }, delay)
}

</script>

<style>
.flinch-auto {
    animation: aniFlinch 0.2s steps(2) 3;
}

.layer-collision {
    cursor: pointer;

}
</style>
<template>

    <div class="layer-invisible layer-sprite">
        <div class="layer-invisible layer-collision" @click="randomPose()"></div>
        <Moodeng :pose="newPose" />
    </div>
    <input placeholder="↑ ↓" @keyup.up="test()" @keyup.down="test2()">
</template>