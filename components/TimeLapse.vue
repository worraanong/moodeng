<script setup lang="ts">

const state = defineProps({
    run: { type: Boolean, default: true },
    durationInSeconds: { type: Number, default: 10 },
    tick: { type: Number, default: 1 },
    timeSync: { type: String, require: true, default: "" }
})
const time = useState( `${state.timeSync}c`, () => 0)

//TODO: magic happens above, useState must be string

const startClock = (): NodeJS.Timeout => {
    return setInterval(tick, 1000);
}
const stopClock = (id: NodeJS.Timeout) => {
    _Delay(() => {
        clearInterval(id)
    }, state.durationInSeconds * 1000)
}
const tick = () => {
    time.value += state.tick
}

onMounted(() => {
    if (state.tick < 0) time.value = state.durationInSeconds
    if (state.run) {
        const id = startClock()
        stopClock(id)
    }
})

</script>

<template>
    <div class="timeText tiny">
        {{ time }}
    </div>
</template>

<style>
.timeText {
    font-size: 32px;
}
</style>