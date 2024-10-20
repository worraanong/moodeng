<script setup>
const lang = useState('language')
</script>
<template>
    <div>
        <label for="lang-select">Language:&nbsp;</label>
        <select id="lang-select" v-model="lang">
            <option value="en">English</option>
            <option value="th">ภาษาไทย</option>
        </select>
    </div>
</template>