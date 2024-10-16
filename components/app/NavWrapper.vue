<template>
    <div class="nav-wrapper row">
        <div class="col">
            <AppNavLink>
                <NuxtLink to="/">
                    <NuxtImg src="favicon.ico" />
                    Home
                </NuxtLink>
            </AppNavLink>
        </div>
        <div class="col">
            <div class="float-right">
                <slot></slot>
            </div>

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