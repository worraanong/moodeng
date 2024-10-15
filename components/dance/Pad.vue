<template>
    <div class="note-area">
        <div class="top-center">
            <DanceHollowArrow :dir="['up']" />
        </div>
        <div class="bottom-center">
            <DanceHollowArrow :dir="['down']" />
        </div>
        <div class="middle-left">
            <DanceHollowArrow :dir="['left']" />
        </div>
        <div class="middle-right">
            <DanceHollowArrow :dir="['right']" />
        </div>
        <div class="middle-center">
            <DanceNoteSpawner />
        </div>
    </div>
</template>

<style>
.note-area {
    border: 1px solid #000;
    width: 800px;
    height: 800px;
    margin: 120px auto;
    position: relative;
}

.middle-left {
    position: absolute;
    bottom: 50%;
    left: 0%;
    transform: translate(0, 50%);
}

.middle-center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.middle-right {
    position: absolute;
    bottom: 50%;
    right: 0%;
    transform: translate(0, 50%);

}

.top-center {
    position: absolute;
    top: 0%;
    left: 50%;
    transform: translate(-50%, 0);
}

.bottom-center {
    position: absolute;
    bottom: 0%;
    left: 50%;
    transform: translate(-50%, 0);
}
</style>
