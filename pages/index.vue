<script setup>
import '~/assets/css/main.css'
</script>
<template>
    <h1>Moo Deng</h1>
    <p>Hacktoberfest 2024 mini project</p>

    <div id="play-area">
        เอ้ย อย่ามาจิ้มนะ!
        <Playable />
    </div>
    <KeyLogging/>

    <AnimationSheet />
    <h2>② Control</h2>
    <pre>
                                Hold
    ↑       w   Jump
    ↓       s   Crouch
    ←       a   Go Left         Run
    →       d   Go Right        Run
   ← ←     a a  Dash Left
   → →     d d  Dash Right
    </pre>
    <Hitbox />
</template>