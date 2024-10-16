<script setup>
const handleCreate = () => {
  console.log('Child has been created.');
};
</script>

<template>
    <div>
        <ul class="sp">
        <li>
            SelectLanguage: {{ useState('language') }}
            <SelectLanguage />
        </li>
        <li>
            CountDown: {{ useState('remainingTime') }}
            <CountDown />
        </li>
        <li>
            Count:  {{ useState('currentTime') }}
            <TimeLapse />
        </li>
        <li>
            Icon
            <AppMenuIcon :icon="'close'" />
            <AppMenuIcon :icon="'hamburger'" />
        </li>
        <li>
            Toggle Icon
            <AppMenuToggle @created="handleCreate" />
        </li>
    </ul>
    </div>
</template>
<style>
.sp li{
    margin-bottom: 20px;
}
</style>