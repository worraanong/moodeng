<template>
    <div class="row">
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