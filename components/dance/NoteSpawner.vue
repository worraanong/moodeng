<script setup lang="ts">

const ready = ref(true)

const dirs: string[] = ['up', 'left', 'right', 'down'] as const
const notes = ref([] as string[])

const start = () => {
    ready.value = false
    const id = setInterval(spawn, 500);
    assignNotes(28)
    _Delay(() => {
        clearInterval(id)
        ready.value = true
    }, 15000)
}

const spawn = () => {
    if (notes.value.length > 1) {
        const note = notes.value.pop()
        console.log(note)
    }
}

const randomizer = (array: string[]) => {

    const max = array.length - 1
    return _Nth(dirs, _Random(0, max)) as string
}

const assignNotes = (n: number) => {
    for (let i = 0; i < n; i++) {
        notes.value.push(randomizer(dirs))
    }
}


</script>
<template>
    <button v-show="ready" class="tiny btn-start" role="button" @click="start()"></button>

    <div v-for="d in dirs" v-show="!ready" :key="d">
        <DanceArrow :dir="d" />
    </div>
</template>

<style>
.btn-start:before {
    content: "Start";
    padding: 10px;
}
</style>