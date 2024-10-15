<script setup lang="ts">
const notesOnScreen = useState('notesOnScreen', ():any[] => [])

const lapse = useState('lapse')
const removeNote=()=>{
    notesOnScreen.value.pop()
}


onMounted(() => {
})
</script>
<template>
 notesOnScreen   {{ notesOnScreen }}
 <br/>


 lapse {{ lapse }}
<TimeLapse :run="true" :duration-in-seconds="60"/>
    <div class="boundary">
        <slot></slot>
    </div>
</template>

<style>
.boundary {
    border: 1px solid #f70000;
    width: 1040px;
    height: 1040px;
    margin: 50px auto;
    position: relative;
}
</style>