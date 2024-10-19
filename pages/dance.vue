<script setup>
</script>

<template>
    <div>
        <h2>③ Dance</h2>

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
