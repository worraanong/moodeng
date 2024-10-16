<script setup lang="ts">

const expand = ref(false)
const expandMenu = () => {
    expand.value = !expand.value
}
</script>

<template>
    <div class="nav-mobile">
        <AppNavWrapper>
            <AppMenuToggle @clicked="expandMenu" />
        </AppNavWrapper>
        <Transition>
            <div v-show="expand">
                <AppNavBar />
            </div>
        </Transition>
    </div>
</template>

<style>
.nav-mobile .nav {
    float: none !important;
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