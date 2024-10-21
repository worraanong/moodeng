<script setup lang="ts">
const url = '/api/dumdum'
const notes = ref([] as string[])
const note = ref('')
const config = reactive({
    updateTime: 1000 / 4, // beats per sec
    length: 12 * 1000, //secong
})

const child = ref(null)

const showNote = () => {
    note.value = notes.value.shift() ?? ' '
    child.value.actFromCommands()
}

const startShowNote = async () => {
    await reset()
    const id = setInterval(showNote, config.updateTime);
    _Delay(() => {
        clearInterval(id)
    }, config.length)
    playAudio()
}

const playAudio = () => {
    const audio = new Audio('/dumdum.wav');
    audio.play();
}
const fetchNotes = async () => {
    const { data: data } = await useFetch(`${url}`)
    return data.value
}

const reset = async () => {
    notes.value = await fetchNotes() ?? []
}

</script>
<template>
    <div>
        <DevOnly>
            <textarea v-model="notes" disabled rows="4"></textarea>
        </DevOnly>
        <div style="width: 60px; height: 60px;">
            <h1>{{ note }}</h1>
        </div>
        <button class="tiny btn-start" role="button" @click="startShowNote()">&nbsp;</button>
        <NonPlayable ref="child" :action="note" />
    </div>
</template>