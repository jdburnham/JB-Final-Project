<template>
  <div class="min-h-screen bg-gray-300">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from './components/Navbar'
export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>
