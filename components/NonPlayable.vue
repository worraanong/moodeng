<script setup lang="ts">
import '~/assets/css/animated.css'

const props = defineProps(['action'])
const commands = ['w', 's', 'w', 'w', 's', 'w', 's']


const modeKey = ref(0)
const forceRerender = () => {
    modeKey.value += 1;
}

const ani = reactive(['stand'])
const styles = reactive({
    left: '200px'
})
const config = {
    speed: 4,

}
const actFromCommands = () => {
    handleCommand(props.action)
}

defineExpose({ actFromCommands })


const getLeftPos = () => {
    return _ToInteger(_TrimEnd(styles.left, 'px'))
}


const move = (faceLeft = true) => {
    let s = getLeftPos()
    if (faceLeft) {
        s -= config.speed
    }
    else {
        s += config.speed
    }
    styles.left = s + "px";
}

const dash = (faceLeft: boolean) => {
    if (!_Includes(ani, 'dash-start')) {
        ani.push('dash-start')
    }
    const id = setInterval(() => move(faceLeft), 20);
    _Delay(() => {
        clearInterval(id)
        _Pull(ani, 'dash-start')
    }, 1000)
    resetAfter('dash-end', 200)
}

const resetAfter = (x: string, delay = 800) => {
    ani.push(x)
    _Delay(() => {
        _Pull(ani, x)
    }, delay)
}

const jump = () => {
    resetAfter('jump-up')
}

const crouch = () => {
    resetAfter('break')
    // if (!_Includes(ani.value, 'break')) {
    //     _Pull(ani.value, 'stand')
    //     ani.value.push('break')
    // }
}

const run = () => {
    if (!_Includes(ani, 'run')) {
        ani.push('run')
    }
}
const moveInDirection = (goLeft = true) => {
    if (!goLeft) {
        correctDirection(goLeft)
    }
    else {
        run()
        move()
    }
}

const correctDirection = (goLeft = true) => {
    if (goLeft) {
        _Pull(ani, 'flip')
    }
    else {
        flip()
    }
}
const flip = () => {
    if (!_Includes(ani, 'flip')) {
        ani.push('flip')
    }
}

const handleCommand = (c: string) => {
    switch (c) {
        case "w":
            jump()
            break;
        case "s":
            crouch()
            break;
        case "a":
        correctDirection(true)
            break;
        case "d":
        correctDirection(false)
            break;
        case "aa":
            correctDirection(true)
            dash(true)
            break;
        case "dd":
            correctDirection(false)
            dash(false)
            break;
    }
}

</script>
<template>
    <div>
        <div id="char" :key="modeKey" :style="styles" :class="['base', ani]">
        </div>
    </div>
</template>