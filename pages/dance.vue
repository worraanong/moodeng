<script setup>
import '~/assets/css/main.css'
</script>

<template>
    <div>
        <DanceGrade :idx="0" />
        <DanceGrade :idx="2" />
        <DanceGrade :idx="1" />
        <DanceScore/>
        <div class="boundary">
            <DancePad />
        </div>
        <Playable />
    </div>

</template>

<style>
.boundary {
    border: 1px solid #000;
    width: 1040px;
    height: 1040px;
    margin: 50px auto;
    position: relative;
}
</style>