<script setup lang="ts">
const colorMode = useColorMode()

/*
$colorMode.unknown 		    true		false
useColorMode().preference   system      system
$colorMode.preference	    system		light/dark <- Update this
$colorMode.value		    system		light/dark 
                                        (When using system color)
*/

const oppositeColorMode = (x: string) => (x == "light") ? "dark" : "light"
const changeColorMode = () => colorMode.preference = (colorMode.preference == "light") ? "dark" : "light"
</script>

<template>
    <AppMenuToggle v-if="!$colorMode.unknown" :default="oppositeColorMode($colorMode.preference)"
        :alt="$colorMode.preference" @clicked="changeColorMode()" />
</template>