<script setup lang="ts">
</script>

<template>
    <div class="header">
        <div v-if="$device.isDesktop">
        <AppNavWrapper>
            <AppNavBar />
        </AppNavWrapper>
        </div>
        <div v-else>
            <AppNavMobile />
        </div>
    </div>
</template>

<style>
.header {
    background-color: #fff;
    height: 30px;
    position: sticky;
    top: 0px;
    z-index: 2;
}
</style>