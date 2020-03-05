<template>
  <div></div>
</template>

<script>
export default {
  name: 'CharacterSheet',
  props: {
    edit: {
      type: Boolean,
      default: false
    },
    adventurer: {
      type: Object,
      default: () => ({
        id: '',
        advName: '',
        advRace: '',
        advClass: ''
      })
    },
    data() {
      return {
        advName: '',
        advRace: '',
        advClass: ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>