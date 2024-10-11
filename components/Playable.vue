<script setup>
import '~/assets/css/layer.css'
const keylogging = ref([])

const logKey = (e) => {
    keylogging.value.push(e.key)
}


onMounted(() => {
    window.addEventListener("keydown", (e) => { logKey(e) })
})

</script>

<template>

    <div :style="newStyle" class="layer-invisible layer-sprite">
        <div class="layer-invisible layer-collision" @click="randomPose()"></div>
        <Character />
    </div>

    <textarea v-model="keylogging" rows="10">{{ keylogging }}</textarea>
</template>