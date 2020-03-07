<template>
  <CharacterSheet edit :character="character" />
</template>

<script>
import CharacterSheet from '@/components/CharacterSheet.vue'
export default {
  name: 'EditCharacter',
  data() {
    return {
      character: {}
    }
  },
  components: {
    CharacterSheet
  },
  methods: {
    goToHome() {
      this.$router.push('/portfolio')
    }
  },
  mounted() {
    debugger
    if (this.$route.query?.id) {
      const character = this.$store.getters.getCharacter(this.$route.query.id)
      if (character) {
        this.character = character
      }
    } else {
      this.goToHome()
    }
  }
}
</script>
<style lang="scss" scoped></style>
