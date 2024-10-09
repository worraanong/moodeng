<script setup>
const lang = useState('language', () => 'th')
</script>
<template>
    <div>
        <select v-model="lang">
            <option value="en">English</option>
            <option value="th">ภาษาไทย</option>
        </select>
    </div>
</template>