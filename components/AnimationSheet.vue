<template>
    <div>
        <p>Sprite by <a href="https://limpck.itch.io/moodeng">LimpCK</a></p>
        <img src="~/assets/img/moodeng.png">
        <div class="row">
            <div class="col">
                <h2>① Animation</h2>
                <Moodeng pose="break"/>
                <Moodeng pose="charge"/>
                <Moodeng pose="float"/>
                <Moodeng/>
                <Moodeng pose="run"/>
            </div>
            <div class="col">
                <h3>Hover to ...</h3>
                <Moodeng pose="dash"/>
                <Moodeng pose="flinch"/>
                <Moodeng pose="crouch"/>
                <Moodeng pose="turn"/>
                <Moodeng pose="jump"/>

            </div>
        </div>
    </div>
</template>