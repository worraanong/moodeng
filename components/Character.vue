<script setup>
import '~/assets/css/animated.css'
const config = {
    leftCollisionOffset: 21,
    characterWidth: 80,
    areaWidth: 800,
    speed: 4,
    doublePressDelta: 200
}

const ani = reactive(['stand']) // no not ref
const styles = reactive({
    left: '200px'
})

const pos = {
    faceLeft: true,
    dashing: false
}

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
        dash()
    }
}
const chkRight = (e) => {
    if (!pos.dashing && chkDoublePress(e, 'Right')) {
        dash()
    }
}

const chkBoundary = () => {
    const s = getLeftPos()
    if (pos.faceLeft) {
        return (s > -config.leftCollisionOffset)
    }
    return s < (config.areaWidth - (config.characterWidth+config.leftCollisionOffset))
}

const getLeftPos = () => {
    return _ToInteger(_TrimEnd(styles.left, 'px'))
}

const correctDirection = (goLeft = true) => {
    if (goLeft) {
        _Pull(ani, 'flip')
    }
    else {
        flip()
    }
    pos.faceLeft = !pos.faceLeft
}

// Movements
const moveLeft = () => {
    moveInDirection()
}

const moveRight = () => {
    moveInDirection(false)
}

const moveInDirection = (goLeft = true) => {
    if (pos.dashing) return
    if (pos.faceLeft != goLeft) {
        correctDirection(goLeft)
    }
    else {
        run()
        move()
    }
}
const move = () => {
    if (chkBoundary()) {
        let s = getLeftPos()
        if (pos.faceLeft) {
            s -= config.speed
        }
        else {
            s += config.speed
        }
        styles.left = s + "px";
    }
}

const dash = () => {
    if (!_Includes(ani, 'dash-start')) {
        ani.push('dash-start')
        pos.dashing = true
    }
    const id = setInterval(move, 20);
    _Delay(() => {
        clearInterval(id)
        _Pull(ani, 'dash-start')
        pos.dashing = false
    }, 1000)
    resetAfter('dash-end', 200)
}

// Animations
const run = () => {
    if (!_Includes(ani, 'run')) {
        ani.push('run')
    }
}

const flip = () => {
    if (!_Includes(ani, 'flip')) {
        ani.push('flip')
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
})
</script>
<template>
    <div id="char" :style="styles" :class="['base', ani]">
        <div class="layer-invisible layer-collision" @click="handleClick()"></div>
    </div>
</template>

<style>
.flip {
    transform: scaleX(-1)
}

#char {
    position: relative;
}

.layer-collision {
    cursor: pointer;
}

.flinching {
    animation: aniFlinch 0.2s steps(2) 3;
}
</style>

