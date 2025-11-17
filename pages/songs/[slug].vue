<template>
  <article>
    <header>
      <h1>{{ song.title }} ({{ song.artist }})</h1>
    </header>
    <ContentRenderer :value="song" prose />
    <NuxtLink to="/">Zurück</NuxtLink>
  </article>
</template>

<script setup>
const { params } = useRoute()
const { data: song } = await useAsyncData('song', () =>
  queryCollection('songs').path('/songs/' + params.slug).first()
)
</script>
