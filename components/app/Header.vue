<template>
    <div class="header">
        <AppNavLink>
            <NuxtLink to="/"><NuxtImg src="favicon.ico"/></NuxtLink>
        </AppNavLink>
        <AppNavLink>
            <NuxtLink to="/">Animation</NuxtLink>
        </AppNavLink>
        <AppNavLink>
            <NuxtLink to="/">Control</NuxtLink>
        </AppNavLink>
        <AppNavLink>
            <NuxtLink to="/dance">Dance</NuxtLink>
        </AppNavLink>
        <AppNavLink>
            <NuxtLink to="/about">About</NuxtLink>
        </AppNavLink>
        <AppNavLink>
            <NuxtLink to="https://github.com/worraanong/moodeng" target="_blank">View on GitHub</NuxtLink>
        </AppNavLink>
    </div>
</template>

<style>
.header {
    background-color:#fff;
    height: 30px;
    position: sticky;
    top: 20px;
    z-index: 2;
}
</style>