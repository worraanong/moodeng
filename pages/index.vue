<template>
    <div>
        <h1>Moo Deng</h1>
        <p>Hacktoberfest 2024 mini project</p>

        <div id="play-area">
            เอ้ย อย่ามาจิ้มนะ!
            <Playable />
        </div>
        <div class="row">
            <div class="col">
                <DevOnly>
                    <KeyLogging />
                </DevOnly>
            </div>
        </div>
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
        <h2>③ Dance</h2>
        <pre>
    wswsadad
    </pre>
    </div>
</template>