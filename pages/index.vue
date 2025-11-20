<template>
  <div class="site">
    <header class="site-header">
      <div class="container flex space-between">
        <div class="brand">
          <div class="logo">A</div>
          <div>
            <div class="site-title">Alex' Geburtstag</div>
          </div>
        </div>
      </div>
    </header>

    <main class="main-content">
      <div class="container">

        <ul class="card-grid">
          <li v-for="song in songs" :key="song.path" class="song-card">
            <div class="song-title"><NuxtLink :to="song.path">{{ song.title }}</NuxtLink></div>
          </li>
        </ul>
      </div>
    </main>
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