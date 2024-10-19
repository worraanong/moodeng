<script setup lang="ts">
const expand = ref(false)
const expandMenu = () => {
    expand.value = !expand.value
}
</script>

<template>
    <div class="nav-mobile">
        <AppNavWrapper>
            <div class="menu-toggle">
                <AppMenuToggle @clicked="expandMenu" />
            </div>
        </AppNavWrapper>
        <Transition>
            <div v-show="expand">
                <AppNavBar />
            </div>
        </Transition>
    </div>
</template>

<style>
.nav-mobile .menu-toggle {
    padding: 8px;
}

.nav-mobile .nav {
    float: none !important;
    padding: 12px 24px;
}

.nav-mobile .nav-wrapper {
    height: 62px;
    background-color: var(--moo-deng-drenched);
    color: #fff;
}

.nav-mobile a {
    text-decoration: none;
}

.nav-mobile .link-home .nav {
    background-color: var(--moo-deng-drenched);
}

.float-right {
    float: right;
}

.nav-mobile img {
    vertical-align: middle;
}

.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>