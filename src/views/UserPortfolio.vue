<template>
  <div class="w-full flex flex-wrap pt-8">
    <Card class="w-1/4" v-for="n in 5" :key="n" />
    <p class="pt-8">
      This will be available after user logins it will display all characters
      created in cards
    </p>
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