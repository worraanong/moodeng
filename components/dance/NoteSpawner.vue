<script setup>

const x = reactive({ ready: true })

const start = () => {
    x.ready = false
    console.log(x.ready)
    const id = setInterval(spawn, 1000);
    _Delay(() => {
        clearInterval(id)
    }, 15000)
    x.ready = true
}

const spawn = () => {
    console.log("A")
}

</script>
<template>
    <button :v-if="x.ready" class="tiny" @click="start()">Start</button>
</template>