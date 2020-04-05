<template>
  <div class="min-h-screen bg-blue-800">
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
