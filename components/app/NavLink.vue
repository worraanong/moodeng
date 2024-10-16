<template>
    <div class="nav">
        <slot></slot>
    </div>
</template>

<style>
.nav {
    padding: 5px 20px;
    border: 1px solid #000;
    float: left;
}

.nav a {
    text-decoration: none;
}
</style>