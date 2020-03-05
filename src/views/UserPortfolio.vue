<template>
  <div class="w-full flex flex-wrap pt-8">
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