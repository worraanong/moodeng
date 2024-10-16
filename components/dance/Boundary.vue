<script setup lang="ts">
const notesOnScreen = useState('notesOnScreen', (): Note[] => [])
</script>

<template>
    notesOnScreen {{ notesOnScreen }}
    <TimeLapse :run="true" :duration-in-seconds="60" />
    <div class="boundary">
        ⚠️ Area under construction
        <slot></slot>
    </div>
</template>

<style>
.boundary {
    border: 1px solid #f70000;
    width: 1040px;
    height: 1040px;
    margin: 50px auto;
    position: relative;
    color: #f70000;
}
</style>