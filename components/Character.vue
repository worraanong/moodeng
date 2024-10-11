<script setup>
import '~/assets/css/animated.css'

const props = defineProps({
})

const config = {
    leftCollisionOffset: 21,
    characterWidth: 80,
    areaWidth: 700,
    speed: 4,
    doublePressDelta: 200
}

const ani = reactive(['stand'])
const styles = reactive({
    left: '200px'
})

const pos = {
    x: 0,
    y: 0,
    left: 0,
    top: 0,
    faceLeft: true,
    dashing: false
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

const lastKeyPressTime = {
    Left: 0,
    Right: 0
}

const resetAfter = (x, delay = 800) => {
    ani.push(x)
    _Delay(() => {
        _Pull(ani, x)
    }, delay)
}

const chkDoublePress = (e, key) => {
    const lastPress = _Get(lastKeyPressTime, key)
    const doublePress = (e.timeStamp - lastPress < config.doublePressDelta)
    _Set(lastKeyPressTime, key, e.timeStamp)
    return doublePress
}

const chkLeft = (e) => {
    if (!pos.dashing && chkDoublePress(e, 'left')) {

        if (!_Includes(ani, 'dash-start')) {
            ani.push('dash-start')
            pos.dashing = true
        }
        let id = setInterval(move, 20);

        _Delay(() => {
            clearInterval(id)
            _Pull(ani, 'dash-start')
            pos.dashing = false
        }, 1000)
        resetAfter('dash-end', 200)

    }
}
const chkRight = (e) => {
    if (!pos.dashing && chkDoublePress(e, 'Right')) {
        if (!_Includes(ani, 'dash-start')) {
            ani.push('dash-start')
            pos.dashing = true
        }
        let id = setInterval(move, 20);

        _Delay(() => {
            clearInterval(id)
            _Pull(ani, 'dash-start')
            pos.dashing = false
        }, 1000)
        resetAfter('dash-end', 200)
    }
}

// Movements
const moveLeft = () => {
    if (pos.dashing) return
    if (!pos.faceLeft) { // Toggle
        if (_Includes(ani, 'flip')) {
            _Pull(ani, 'flip')
            pos.faceLeft = true
        }
    }
    else {
        run()
        if (pos.left > -config.leftCollisionOffset) {
            const s = _TrimEnd(styles.left, 'px')
            styles.left = `${_ToInteger(s) - config.speed}px`
        }
    }

}

const moveRight = () => {
    if (pos.dashing) return
    if (pos.faceLeft) {
        if (!_Includes(ani, 'flip')) {
            ani.push('flip')
            pos.faceLeft = false
        }
    }
    else {
        run()
        if (pos.left <= config.areaWidth) {
            const s = _TrimEnd(styles.left, 'px')
            styles.left = `${_ToInteger(s) + config.speed}px`
        }
    }
}

const move = () => {
    let s = _ToInteger(_TrimEnd(styles.left, 'px'));
    if (pos.faceLeft) { s -= config.speed }
    else { s += config.speed }
    styles.left = s + "px";
}

// Animations
const run = () => {
    if (!_Includes(ani, 'run')) {
        ani.push('run')
    }
}

const jump = (e) => {
    if (!(e.repeat)) // Holding key 
        resetAfter('jump-up')
}

const crouch = () => {
    if (!_Includes(ani, 'break')) {
        _Pull(ani, 'stand')
        ani.push('break')
    }
}


// Events
const handleKeydown = (e) => {
    getOffset(el)
    switch (e.key) {
        case "ArrowUp":
        case "w":
        case " ":
            jump(e)
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
const handleKeyUp = (e) => {
    _Pull(ani, 'run')
    if (_Includes(ani, 'break')) {
        _Pull(ani, 'break')
        ani.push('stand')
    }
    switch (e.key) {
        case "ArrowLeft":
        case "a":
            chkLeft(e)
            break;
        case "ArrowRight":
        case "d":
            chkRight(e)
            break;
    }
}
const handleClick = () => {
    resetAfter('flinching')
}

onMounted(() => {
    window.addEventListener("keydown", (e) => { handleKeydown(e) })
    window.addEventListener("keyup", (e) => { handleKeyUp(e) })
    el.value = document.getElementById("char")
})



</script>
<style>
.flip {
    transform: scaleX(-1)
}

#char {
    position: absolute;
    cursor: pointer;
}

.flinching {
    animation: aniFlinch 0.2s steps(2) 3;
}
</style>

<template>
    <div id="char" :style="styles" :class="['base', ani]" @click="handleClick()"></div>
</template>