<template>
  <div
    class="relative h-screen w-screen bg-cover bg-center shadow-2xl"
    :style="`background-image:url(${bgImage})`"
  >
    <div class="h-screen w-screen bg-red-800 opacity-75" />
    <div
      class="absolute h-screen w-screen top-0 flex flex-col justify-center items-center"
    >
      <h1 class="text-6xl font-bold text-gray-400 opacity-75">
        Welcome to the Table Top RPG Charactor Creator
      </h1>
      <h3 class="text-4xl font-bold text-gray-400 opacity-75">
        Login to begin creating a charactor!
      </h3>
      <p class="text-2xl font-bold text-gray-400 opacity-75">
        By: Josh Burnham
      </p>
    </div>
  </div>
</template>

<script>
import bgImage from '../assets/Dndbg.jpg'
export default {
  name: 'Home',
  data() {
    return {
      bgImage
    }
  }
}
</script>
