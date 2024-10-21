<script setup>
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
    </div>
</template>
