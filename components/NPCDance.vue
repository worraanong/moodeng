<script setup lang="ts">
const url = '/api/dumdum'
const notes = ref([] as string[])
const note = ref('')
const config = reactive({
    updateTime: 1000 / 4, // beats per sec
    length: 12 * 1000, //secong
})

const child = ref(null)
const dancing = ref(false)

const showNote = () => {
    note.value = notes.value.shift() ?? ' '
    child.value.actFromCommands()
}

const startShowNote = async () => {
    await reset()
    dancing.value = true
    const id = setInterval(showNote, config.updateTime);
    _Delay(() => {
        clearInterval(id)
        dancing.value =false
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
        <button v-show="!dancing" class="tiny" role="button" @click="startShowNote()">Start dancing</button>
        <NonPlayable ref="child" :action="note" />
    </div>
</template>