<template>
  <div class="w-full flex flex-wrap pt-8">
    <router-link
      class="bg-gray-900 h-12 w-full m-4 rounded-lg shadow hover:shadow-lg flex justify-center items-center hover:bg-gray-200"
      to="/addCharacter"
    >
      <div
        class="bg-yellow-600 w-8 h-8 flex justify-center items-center rounded-full border-dashed border text-black"
      >
        <span class="text-purple-800 font-bold">Add</span>
      </div>
    </router-link>
    <Card class="sm:w-1/2 lg:w-1/3 xl:w-1/4 p-2" v-for="n in 5" :key="n" />
  </div>
</template>

<script>
import Card from '@/components/Card.vue'
export default {
  name: 'Portfolio',
  components: {
    Card
  }
}
</script>

<style lang="scss" scoped>
</style>