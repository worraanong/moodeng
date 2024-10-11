<script setup>
import '~/assets/css/animated.css'

const props = defineProps({
})

const config = {
    leftCollisionOffset: 21,
    characterWidth: 80,
    areaWidth: 700,
    speed: 4
}

const ani = reactive(['stand'])
const newStyle = reactive({
    left: '200px'
})

const pos = {
    x: 0,
    y: 0,
    left: 0,
    top: 0,
    faceLeft: true
}

const logPos = () => {
    getOffset(el)
    console.log(`x: ${pos.x}, y: ${pos.y}, left: ${pos.left}, top: ${pos.top}`)
}
const getOffset = (el) => {
    pos.left = el.value.offsetLeft
    pos.top = el.value.offsetTop
}
const el = ref()

const handleKeydown = (e) => {
    getOffset(el)
    switch (e.key) {
        case "ArrowUp":
        case "w":
        case " ":
            jump()
            break;
        case "ArrowDown":
        case "s":
            crouch()
            break;
        case "ArrowLeft":
        case "a":
            moveLeft()
            break;
        case "ArrowRight":
        case "d":
            moveRight()
            break;
    }
}
const handleKeyUp = () => {
    if (_Includes(ani, 'run')) {
        _Pull(ani, 'run')
    }
    if (_Includes(ani, 'break')) {
        _Pull(ani, 'break')
        ani.push('stand')
    }

}

const resetPose = (stopPose, delay = 800) => {
    _Delay(() => {
        _Pull(ani, stopPose)
    }, delay)
}

const moveLeft = () => {
    const s = _TrimEnd(newStyle.left, 'px')
    if (!pos.faceLeft) { // Toggle
        if (_Includes(ani, 'flip')) {
            _Pull(ani, 'flip')
            pos.faceLeft = true
        }
    }
    else {
        if (!_Includes(ani, 'run')) {
            ani.push('run')
        }
        if (pos.left > -config.leftCollisionOffset)
            newStyle.left = `${_ToInteger(s) - config.speed}px`
    }
}



const moveRight = () => {
    const s = _TrimEnd(newStyle.left, 'px')
    if (pos.faceLeft) {
        if (!_Includes(ani, 'flip')) {
            ani.push('flip')
            pos.faceLeft = false
        }
    }
    else {
        if (!_Includes(ani, 'run')) {
            ani.push('run')
        }
        if (pos.left <= config.areaWidth)
            newStyle.left = `${_ToInteger(s) + config.speed}px`

    }
}

const jump = () => {
    ani.push('jump-up')
    resetPose('jump-up')
}

const crouch = () => {
    if (!_Includes(ani, 'break')) {
        _Pull(ani, 'stand')
        ani.push('break')
    }
}


onMounted(() => {
    window.addEventListener("keydown", (e) => { handleKeydown(e) })
    window.addEventListener("keyup", (e) => { handleKeyUp(e) })
    el.value = document.getElementById("char")
})

const handleClick = () => {
    ani.push('flinch-auto')
    resetPose('flinch-auto')
}

</script>
<style>
.flip {
    transform: scaleX(-1)
}

#char {
    position: relative;
    cursor: pointer;
}

.flinch-auto {
    animation: aniFlinch 0.2s steps(2) 3;
}
</style>

<template>
    <div id="char" :style="newStyle" :class="['base', ani]" @click="handleClick()"></div>
</template>