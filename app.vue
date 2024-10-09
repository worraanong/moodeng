<script setup lang="ts">
useSeoMeta({
  title: 'Moo Deng',
  ogTitle: 'Moo Deng',
  description: 'หมูเด้ง จะแจกความฉดใฉหั้ยทุกค้นนน ♥',
  ogDescription: 'หมูเด้ง จะแจกความฉดใฉหั้ยทุกค้นนน ♥',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
})
</script>
<template>
  <div>
    <AppHeader />
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <AppFooter />
  </div>
</template>
