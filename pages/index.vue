<template>
  <div>
    <h1>Übersicht aller Lieder</h1>
    <ul>
      <li v-for="song in songs" :key="song.path">
        <NuxtLink :to="song.path">{{ song.artist }} - {{ song.title }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
const songs = ref([])
onMounted(async () => {
  await nextTick();
  const { data: config } = await useFetch('/config.json');
  const activatedSongs = config.value.activatedSongs;
  console.log(activatedSongs)
  const { data: result } = await useAsyncData(() => {
    if (activatedSongs > 0) {
      return queryCollection('songs').select('title', 'artist', 'path').limit(activatedSongs).all();
    } else if (activatedSongs == 0) {
      return []
    }
    return queryCollection('songs').select('title', 'artist', 'path').all();
  })
  songs.value = result.value;
})
</script>