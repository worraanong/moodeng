<script setup>

let ready = true
const start = () => {
    let id = setInterval(spawn, 1000);
    ready = false
    _Delay(() => {
        clearInterval(id)
    }, 15000)
    ready = true
}



 const spawn = () => {
console.log("A")
 }  

</script>
<template>
    <button v-show="ready" @click="start()" class="tiny" >Start</button>
</template>