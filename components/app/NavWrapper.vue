<template>
    <div class="modal"></div>
    <div class="nav-wrapper">
        <div class="float-right">
            <slot></slot>
        </div>
        <div class="link-home">
            <NuxtLink to="/">
                <AppNavLink>
                    <div class="speech-bubble">
                        <strong>Moo deng</strong>
                    </div>
                </AppNavLink>
            </NuxtLink>
        </div>
    </div>
</template>

<style>
.nav-wrapper {
    background-color: #fff;
    height: 50px;
    z-index: 20;
}

.link-home {
    max-width: 80%;
}

.modal {
    display: none;
    position: fixed;
    z-index: 1;
    padding-top: 100px;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: #00000010;
}
</style>