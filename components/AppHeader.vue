<script setup>
const lang = ref('en')
</script>
<template>
    <div>
        <select v-model="lang">
            <option value="en">English</option>
            <option value="th">ภาษาไทย</option>
        </select>
    </div>
</template>