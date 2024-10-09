<template>
    <div>
        <h2>① Animation</h2>
        <p>Sprite by <a href="https://limpck.itch.io/moodeng">LimpCK</a></p>
        <img src="~/assets/img/moodeng.png">
        <div class="row">
            <div class="col">
                <SelectLanguage />
                <Moodeng desc pose="break" />
                <Moodeng desc pose="charge" />
                <Moodeng desc pose="float" />
                <Moodeng desc />
                <Moodeng desc pose="run" />
            </div>
            <div class="col">
                <strong>Hover to ...</strong>
                <Moodeng desc pose="dash" />
                <Moodeng desc pose="flinch" />
                <Moodeng desc pose="crouch" />
                <Moodeng desc pose="turn" />
                <Moodeng desc pose="jump" />
            </div>
        </div>
    </div>
</template>