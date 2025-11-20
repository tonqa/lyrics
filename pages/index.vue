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
        <div class="card">
          <div class="form">
            <input
              id="song-code"
              v-model="codeInput"
              @keyup.enter="submit"
              placeholder="Code eingeben"
              class="code-input"
              autofocus
            />
            <button @click="submit" class="btn-show">Anzeigen</button>
          </div>
          <p v-if="message" class="message">{{ message }}</p>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const codeInput = ref('')
const message = ref('')
const songsList = ref([])
const router = useRouter()

onMounted(async () => {
  const { data: result } = await useAsyncData(() => {
    return queryCollection('songs').select('path', 'code', 'title').all();
  })
  songsList.value = result.value || []
})

function _extractCode(song) {
  return song.code ?? (song._raw && song._raw.value && song._raw.value.code) ?? (song.data && song.data.code)
}

function submit() {
  message.value = ''
  const code = (codeInput.value || '').trim()
  if (!code) {
    message.value = 'Bitte gib einen Code ein.'
    return
  }
  const song = songsList.value.find(s => _extractCode(s).toLowerCase() === code.toLowerCase())
  if (song && song.path) {
    router.push(song.path)
  } else {
    message.value = 'Ungültiger Code.'
  }
}
</script>
