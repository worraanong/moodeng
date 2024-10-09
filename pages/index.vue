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

    <AnimationSheet></AnimationSheet>
    <h2>② Control</h2>
    <pre>
    ↑       Jump
    ↓       Crouch
   ← →      Run
  ←← →→     Dash
    </pre>
    <Hitbox />
</template>