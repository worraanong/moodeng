<script>
import '~/assets/css/main.css'
</script>
<template>
    <h1>Moo Deng</h1>
    <p>Hacktoberfest 2024 mini project</p>

    <div id="play-area">
        เดี๋ยวมาเขียนต่อ ง่วง
        <Moodeng />
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