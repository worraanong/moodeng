<script setup lang="ts">
const props = defineProps({
    default: { type: String, default: 'hamburger' },
    alt: { type: String, default: 'close' },
})

const emit = defineEmits(['clicked']);
const icon = ref(props.default)

const toggle = () => {
    icon.value = (icon.value == props.default) ? props.alt : props.default
    emit('clicked');
}
</script>

<template>
    <div @click="toggle()">
        <AppMenuIcon :icon="icon" />
    </div>
</template>