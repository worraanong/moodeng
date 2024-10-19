<script setup lang="ts">
const colorMode = useColorMode()

const modeKey = ref(0)
const forceRerender = () => {
    modeKey.value += 1;
}

/*
$colorMode.unknown 		    true		false
useColorMode().preference   system      system
$colorMode.preference	    system		light/dark <- Update this
$colorMode.value		    system		light/dark 
                                        (When using system color)

TODO: Label is not update automatically when color mode change in system
(but css use dark-mode correctly)                                               
*/

const oppositeColorMode = (x: string) => (x == "light") ? "dark" : "light"
const changeColorMode = (x: string) => colorMode.preference = x
const resetColorMode = () => {
    colorMode.preference = 'system'
    forceRerender()
}
</script>

<template>
    <AppMenuToggle :key="modeKey" v-if="!$colorMode.unknown" :default="oppositeColorMode(ref($colorMode.value).value)"
        :alt="ref($colorMode.value).value" @clicked="changeColorMode(oppositeColorMode(ref($colorMode.value).value))" />
    <button @click="resetColorMode()">Use system color</button>
</template>