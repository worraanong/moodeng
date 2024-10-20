---
title: 'Twinkle Twinkle Little Star PowerShell Beep'
description: 'Play a melody using PowerShell Beep. Simply create pitches by matching frequency(Hz) with the right music note'
---



```
function Play {
param (
    $note,
    $duration = 500
)
$freq = 261.63
switch ($note) {
    c {$freq = 261.63}
    db {$freq = 277.18}
    d {$freq = 293.66}
    eb {$freq = 311.13}
    e {$freq = 329.63}
    f {$freq = 349.23}
    gb {$freq = 369.99}
    g {$freq = 392}
    ab {$freq = 415.30}
    a {$freq = 440}
    bb {$freq = 466.16}
    b {$freq = 493.88}
}
[console]::beep($freq,$duration)
}

function Play-Pause($v) {
foreach ($n in $v){
    Play $n
}
sleep -m 500
}

$v1 = @('c','c','g','g','a','a','g')
$v2 = @('f','f','e','e','d','d','c')
$v3 = @('g','g','f','f','e','e','d')

function Twinkle {
    Play-Pause $v1
    Play-Pause $v2
    Play-Pause $v3
    Play-Pause $v3
    Play-Pause $v1
    Play-Pause $v2
}

Twinkle
```