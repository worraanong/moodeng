<script setup lang="ts">
import '~/assets/css/main.css'
useSeoMeta({
  title: 'Moo Deng',
  ogTitle: 'Moo Deng',
  description: 'หมูเด้ง จะแจกความฉดใฉหั้ยทุกค้นนน ♥',
  ogDescription: 'หมูเด้ง จะแจกความฉดใฉหั้ยทุกค้นนน ♥',
  ogImage: 'https://moodeng.nuxt.dev/og.png',
  ogImageType: 'image/png',
  ogImageAlt: 'Moo Deng',
  ogImageHeight: 628,
  ogImageWidth: 1200,
  twitterCard: 'summary_large_image',
})
useHead({
  htmlAttrs: {
    lang: "en",
  },
  meta: [
    { name: 'google-site-verification', content: 'ZDXPyaAX_avZDVoYMGHWXztDWeQZDOzO-HtfT28MTXw' }
  ]
});
useState('language', () => 'th')
useState('remainingTime', () => 0)
useState('currentTime', () => 0)

</script>
<template>
  <div class="theme-dark">
    <AppHeader />
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <AppFooter />
  </div>
</template>
