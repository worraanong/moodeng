<script setup>

import '~/assets/css/animated.css'
const props = defineProps({
    pose: { type: String, default: 'stand' },
})

const poses = {
    "0": { name: { en: "break", th: "หยุ๊ดด" } },
    "1": { name: { en: "charge", th: "เข้าชาร์ต" } },
    "2": { name: { en: "float", th: "ลอย" } },
    "3": { name: { en: "stand", th: "ยืน" } },
    "4": { name: { en: "run", th: "วิ่ง" }, stance: "stand" },
    "5": { name: { en: "dash", th: "ดับเครื่องชน" }, stance: "stand" },
    "6": { name: { en: "flinch", th: "ดีดดิ้น" }, stance: "break" },
    "7": { name: { en: "crouch", th: "หมอบ" }, stance: "stand" },
    "8": { name: { en: "turn", th: "หัน" }, stance: "stand" },
    "9": { name: { en: "jump", th: "โดด" }, stance: "stand" },
}
const stance = (pose) => {
    const item = _Find(poses, x => { return x.name.en == pose })
    return item ? item?.stance : ''
}

const text = (lang) => {

}

</script>
<template>
    <p>{{ pose }}</p>
    <div :class="['base', stance(pose), pose]"></div>
</template>