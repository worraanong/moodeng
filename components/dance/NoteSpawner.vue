<script setup lang="ts">

const ready = ref(true)

const dirs: string[] = ['up', 'left', 'right', 'down'] as const
const notes = ref([] as string[])
const notesOnScreen = ref([] as Note[])

class Note {
    dir: string
    left: number

    constructor(dir = 'up', left = 0 ){
        this.dir = dir
        this.left = left
    }
}

const config = {
    speed: 4,
    totalNotes: 28,
    spawnFrequency: 500,
    duration: 15 * 1000,
} as const
const styles = reactive({
    left: '0px'
})

const start = () => {
    ready.value = false
    const id = setInterval(spawn,config.spawnFrequency );
    assignNotes(config.totalNotes)
    _Delay(() => {
        clearInterval(id)
        ready.value = true
        notesOnScreen.value = []
    }, config.duration)
}

const spawn = () => {
    if (notes.value.length > 1) {
        const note = notes.value.pop() as string
        const n = new Note(note);
        notesOnScreen.value.push(n)

        dash()
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

const chkBoundary = () => {
    return true
}
const move = () => {
    if (chkBoundary()) {
        let s = getLeftPos()
        if (true) {
            // if (pos.faceLeft) {
            s -= config.speed
        }
        else {
            s += config.speed
        }
        styles.left = s + "px";
    }
}

const dash = () => {
    const id = setInterval(move, 20);
    _Delay(() => {
        clearInterval(id)
    }, 1000)
}

const getLeftPos = () => {
    return _ToInteger(_TrimEnd(styles.left, 'px'))
}

const computeLeft = () => {
    const x = _Random(2, 250)
    return `${x}px`
}

</script>
<template>
    <button v-show="ready" class="tiny btn-start" role="button" @click="start()"></button>
    <!-- v-show="!ready"  -->
    <div class="where" v-for="n in notesOnScreen" :key="n">
            <DanceArrow :dir="n.dir" :styles="[{left: computeLeft()}]" />
    </div>
</template>

<style>
.btn-start:before {
    content: "Start";
    padding: 10px;
}

.test {
    position: absolute;
}
.where {
    background-color: blueviolet;
    width: 20px;
    height: 30px;
}
</style>