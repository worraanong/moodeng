<script setup lang="ts">
class Note {
    dir: string
    left: number

    constructor(dir = 'up', left = 0) {
        this.dir = dir
        this.left = left
    }
}
const ready = ref(true)

const dirs: string[] = ['up', 'left', 'right', 'down', 'x', 'x', 'x'] as const
const notes = ref([] as string[])
const notesOnScreen = ref([] as Note[])

//8:3 900s 24
//double 200
const config = {
    totalNotes: 40,
    duration: 23 * 1000,
    speed: 10,
    spawnFrequency: 1000,
    lapseUpdaeFreq: 100,
} as const
const styles = reactive({
    left: '0px'
})

const time = ref(0)

const lapse = () => {
    time.value += config.speed
}

const start = () => {
    ready.value = false
    time.value = 0
    const id = setInterval(spawn, config.spawnFrequency);
    const id2 = setInterval(lapse, config.lapseUpdaeFreq);
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
        //notes.value.push('up') 
        // notes.value.push('left')

        //notes.value.push('down')
        //notes.value.push('right')
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
    const x = time.value
    const m = config.lapseUpdaeFreq //100
    const n = config.spawnFrequency //1000
    //s 20
    const s =  config.speed/(config.spawnFrequency /config.lapseUpdaeFreq )
    switch (dir) {
        case "down":
        case "right":
            //   console.log(i,(x- (i * m)))
            //return `${x- (i * m)-100}px`
            return `${x - (i * m) - m}px`
        case "left":
        case "up":
            // console.log(i,(x- (i * m)))
            //return `-${x- (i * m)-100}px`
            return `-${x - (i *m*s)-m*s }px`
    }
}

const updatedPos = (dir, i) => {
    switch (dir) {
        case "left":
        case "right":
            return { left: computeLeft(dir, i), top: '0px' }
        case "up":
        case "down":
            return { left: '0px', top: computeLeft(dir, i) }
    }
}

</script>
<template>
    <button v-show="ready" class="tiny btn-start" role="button" @click="start()"></button>
    <div class="test">
        <div v-for="(n, i) in notesOnScreen" :key="i" class="where">
            <DanceArrow :dir="[n.dir, '']" :styles="[updatedPos(n.dir, i)]" />
        </div>
    </div>
    <!-- <DanceArrow :dir="['down']"/> -->
</template>

<style>
.btn-start:before {
    content: "Start";
}

.btn-start {
    padding: 10px;
}


.test {
    /* transform: ; */
    top: -34px;
    left: -32px;
    position: relative;

}

.where {
    position: relative;
}
</style>