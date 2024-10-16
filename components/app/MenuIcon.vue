<script setup lang="ts">
const props = defineProps({
    icon: {type: String, default: 'hamburger'}
})
</script>

<template>
    <div :class="['clickable-icon', props.icon]"></div>
</template>

<style>
.clickable-icon {
    font-size: 4rem;
    cursor: pointer;
    /* background-color: fuchsia; */
    width: fit-content;
    line-height: 3rem;
}
.hamburger:before {
    content: '≡'; 
    /* ≡ × */
}
.close:before {
    content: '×'; 
}

</style>