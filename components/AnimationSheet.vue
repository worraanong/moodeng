<script>
import '~/assets/css/animated.css'
</script>

<template>
    <div>
        <p>Sprite by <a href="https://limpck.itch.io/moodeng">LimpCK</a></p>
        <img src="/moodeng.png">
        <div class="row">
            <div class="col">

                <h2>① Animation</h2>
                <div class="base break">Break</div>
                <div class="base charge">Charge</div>
                <div class="base float">Float</div>
                <div class="base stand">Stand</div>
                <div id="run" class="base stand">Run</div>
            </div>
            <div class="col">
                <h3>Hover to ...</h3>
                Dash
                <div id="dash" class="base stand"></div>
                <div id="flinch" class="base break">Flinch</div>
                <div id="crouch" class="base stand">Crouch</div>
                Turn
                <div id="turn" class="base stand"></div>
                <div id="jump" class="base stand">Jump</div>
            </div>
        </div>

    </div>
</template>