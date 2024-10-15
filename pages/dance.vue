<script setup>
import '~/assets/css/main.css'
</script>

<template>
    <div>
        <DanceGrade :idx="0" />
        <DanceGrade :idx="2" />
        <DanceGrade :idx="1" />
        <DanceScore />
        <DanceBoundary>
            <DancePad />
        </DanceBoundary>
        <Playable />
    </div>
</template>
