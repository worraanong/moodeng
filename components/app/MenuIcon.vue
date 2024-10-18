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

.light, .dark {
    font-size: 2rem;
    min-width: 100px;
    border-radius: 40px;
    text-align: center;
    margin: 4px;
}
.light:after, .dark:after {
    font-size: 1rem;
    vertical-align: middle;
}
.light {
    background-color: rgb(0, 0, 0);
    color: #fff;
}
.light:before {
    content: '☀︎'; 
}
.light:after {
    content: ' Light'; 
}
.dark {
    color:#000;
    background-color: rgb(233, 240, 238);
}
.dark:before {
    content: ' ☾'; 
}
.dark:after {
    content: ' Dark'; 
}

</style>