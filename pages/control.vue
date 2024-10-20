<template>
    <div>
        <h2>② Control</h2>
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
        <pre>
                                    Hold
    ↑       w       Jump
    ↓       s       Crouch
    ←       a       Go Left         Run
    →       d       Go Right        Run
   ← ←     a a      Dash Left
   → →     d d      Dash Right
    </pre>
        <Hitbox />
    </div>
</template>