<script setup>
const log = () => {
    console.log('Something happened')
}
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
                Count: {{ useState('currentTime') }}
                <TimeLapse />
            </li>
            <li>
                Icon
                <AppMenuIcon :icon="'close'" />
                <AppMenuIcon :icon="'hamburger'" />
            </li>
            <li>
                Toggle Icon
                <AppMenuToggle @clicked="log" />
            </li>
            <li>
                Nav Mobile
                <AppNavMobile />
            </li>
        </ul>
    </div>
</template>
<style>
.sp li {
    margin-bottom: 20px;
}
</style>