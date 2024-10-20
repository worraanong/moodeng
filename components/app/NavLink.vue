<template>
    <div class="nav">
        <slot></slot>
    </div>
</template>

<style>
.nav {
    padding: 6px 16px;
    /* border: 1px solid #000; */
    float: left;
    background-color: #fff;
    /* background-color: var(--moo-deng-drenched); */
    height: 38px;
}

.nav:hover {
    background-color: #eee;
}

.nav a {
    text-decoration: none;
    user-select: none;
}

.nav:hover::after {
    content: url('/favicon.ico');
}
</style>