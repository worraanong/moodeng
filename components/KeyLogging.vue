<script setup>
const keys = ref([])
const logKey = (e) => {
    keys.value = _Concat(e.key, keys.value)
}
onMounted(() => {
    window.addEventListener("keydown", (e) => { logKey(e) })
})
</script>
<template>
    <textarea rows="11" disabled>{{ keys }}</textarea>
</template>