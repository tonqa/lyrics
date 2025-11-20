<template>
  <div class="site">
    <header class="site-header">
      <div class="container flex">
        <div class="brand">
          <div class="logo">A</div>
          <div>
            <div class="site-title">{{ song.title }} ({{ song.artist }})</div>
          </div>
        </div>
      </div>
    </header>

    <main class="main-content">
      <div class="container">
        <article class="song-article">
          <NuxtLink to="/" class="btn-back secondary">← Zurück</NuxtLink>
          <ContentRenderer :value="song" class="prose" />
          <NuxtLink to="/" class="btn-back secondary">← Zurück</NuxtLink>
        </article>
      </div>
    </main>
  </div>
</template>

<script setup>
const { params } = useRoute()
const { data: song } = await useAsyncData('song', () =>
  queryCollection('songs').path('/songs/' + params.slug).first()
)
</script>
