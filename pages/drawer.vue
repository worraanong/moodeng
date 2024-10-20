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
            <li>
                Toggle Dark Mode
                <AppDarkModeToggle />
            </li>
            <li>
                <iframe width="560" height="315" src="https://musiclab.chromeexperiments.com/Song-Maker/embed/5602749468770304" frameborder="0" allowfullscreen></iframe>
            </li> 
                <!-- https://musiclab.chromeexperiments.com/Song-Maker/song/5602749468770304
                 https://musiclab.chromeexperiments.com/Song-Maker/embed/5714226821332992 -->
            <li>
                <MusicPlayer/>
            </li>
        </ul>
       
    </div>
</template>
<style>
.sp li {
    margin-bottom: 20px;
}
</style>