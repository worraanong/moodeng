<script setup lang="ts">

const ready = ref(true)

const dirs: string[] = ['up', 'left', 'right', 'down', 'x', 'x', 'x'] as const
const notes = ref([] as string[])

const notesOnScreen = useState('notesOnScreen', (): Note[] => [])
const gameStarted = useState('gameStarted', () => false)
const notesIn = (): Note[] => {
    return _Filter(notesOnScreen.value, (x) => {
        return x.left > -900
    })
}
//8:3 900s 24
//double 200
const config = {
    totalNotes: 10,
    duration: 11 * 1000,
    speed: 10, //px
    spawnFrequency: 1000,
    lapseUpdaeFreq: 100,
} as const
const styles = reactive({
    left: '0px'
})

const time = ref(0)
const timeLapse = useState('lapse', () => {
    return time.value
})
const lapse = () => {
    timeLapse.value = time.value += config.speed
    return timeLapse
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
        gameStarted.value = false
        notesOnScreen.value = []
    }, config.duration)
}

const spawn = () => {
    if (notes.value.length > 0) {
        const c = notes.value.pop() as string
        const n = new uNote(c, 0).note;
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
        //notes.value.push('left')
        //notes.value.push('down')
        //notes.value.push('right')
        notes.value.push(randomizer(dirs))
    }
}


const getLeftPos = (v) => {
    return _ToInteger(_TrimEnd(v, 'px'))
}

const computeLeft = (dir, i) => {
    const x = time.value
    const m = config.lapseUpdaeFreq //100
    const n = config.spawnFrequency //1000
    //s 20
    const s = config.speed / (config.spawnFrequency / config.lapseUpdaeFreq)
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
            return `-${x - (i * 100 * s) - 100 * s}px`
    }
}

const updatedPos = (n: Note, i: number) => {
    const dir = n.dir
    switch (dir) {
        case "left":
        case "right":
            {
                const newV = computeLeft(dir, i)
                n.left = getLeftPos(newV)
                return { left: newV, top: '0px' }
            }
        case "up":
        case "down":
            return { left: '0px', top: computeLeft(dir, i) }
    }
}


onMounted(() => {
})
</script>
<template>
    <DanceStartButton @clicked="start"/>
    <div class="test">
        <div v-for="(n, i) in notesIn()" :key="i" class="where">
            <DanceArrow :dir="[n.dir, '']" :styles="[updatedPos(n, i)]" />
        </div>
    </div>
</template>

<style>
.test {
    /* transform: ; */
    top: -34px;
    left: -32px;
    position: relative;
    width: 1px;
    height: 1px;
    background-color: aqua;

}

.where {
    position: relative;
}
</style>