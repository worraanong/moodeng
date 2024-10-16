<script setup lang="ts">
const gameStarted = useState('gameStarted', () => false)

const start = () => {
    gameStarted.value = true
    emit('clicked');
}
const emit = defineEmits(['clicked']);
</script>

<template>
    <button v-show="!gameStarted" class="tiny btn-start" role="button" @click="start()">&nbsp;</button>
</template>

<style>
.btn-start:before {
    content: "Start";
}

.btn-start {
    padding: 10px;
}
</style>