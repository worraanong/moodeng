<script setup lang="ts">

const ready = ref(true)

const dirs: string[] = ['up', 'left', 'right', 'down'] as const
const notes = ref([] as string[])
const notesOnScreen = ref([] as Note[])

class Note {
    dir: string
    left: number

    constructor(dir = 'up', left = 0) {
        this.dir = dir
        this.left = left
    }
}

const config = {
    speed: 10,
    totalNotes: 8,
    spawnFrequency: 500,
    duration: 25 * 1000,
} as const
const styles = reactive({
    left: '0px'
})

const time = ref(0)

const dash = () => {
    const id = setInterval(move, 20);
    _Delay(() => {
        clearInterval(id)
    }, 1000)
}
const lapse = () => {
    time.value += 1
}

const start = () => {
    ready.value = false
    time.value = 0
    const id = setInterval(spawn, config.spawnFrequency);
    const id2 = setInterval(lapse, 2);
    assignNotes(config.totalNotes)
    _Delay(() => {
        clearInterval(id)
        clearInterval(id2)
        ready.value = true
        notesOnScreen.value = []
    }, config.duration)
}

const spawn = () => {
    if (notes.value.length > 0) {
        const note = notes.value.pop() as string
        const n = new Note(note);
        notesOnScreen.value.push(n)
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



const getLeftPos = () => {
    return _ToInteger(_TrimEnd(styles.left, 'px'))
}

const computeLeft = (dir, i) => {
    const x = time.value//_Random(2, 250)
    //console.log("--- "+i)

    //x - (i*25)

    // 25 (500/20)

    const m = 250//25
    switch (dir) {
        case "left":
        case "down":
            return `${x - (i * m)}px`
        case "right":
        case "up":
            return `-${x - (i * m)}px`
    }

    return `10px`
}

const updatedPos = (dir, i) => {

    switch (dir) {
        case "left":
            return { left: computeLeft(dir, i), top: '0px' }
        case "right":
            return { left: computeLeft(dir, i), top: '0px' }
        case "up":
            return { left: '0px', top: computeLeft(dir, i) }
        case "down":
            return { left: '0px', top: computeLeft(dir, i) }
    }


    return { left: computeLeft(dir, i), top: '10px' }
}

</script>
<template>
    {{ time }}
    <button v-show="ready" class="tiny btn-start" role="button" @click="start()"></button>
    <div class="where" v-for="(n, i) in notesOnScreen" :key="n">
        <DanceArrow :dir="n.dir" :styles="[updatedPos(n.dir, i)]" />
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
    /* background-color: blueviolet;
    width: 20px;
    height: 30px; */
}
</style>