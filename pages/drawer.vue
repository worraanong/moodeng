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
    </ul>
    </div>
</template>
<style>
.sp li{
    margin-bottom: 20px;
}
</style>