<script setup>
import '~/assets/css/layer.css'
const newPose = ref('stand')
const randomPose = () => {
    newPose.value = 'flinch-auto'
    _Delay(() => { newPose.value = 'stand' }, 800)
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
</template>