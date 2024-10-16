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
    margin-bottom: 30px;
}
</style>