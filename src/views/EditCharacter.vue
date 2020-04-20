<template>
  <CharacterSheet edit :character="character" />
</template>

<script>
import { db } from '../helpers/firebase'
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
    },
    async bind() {
      await this.$bind(
        'character',
        db.collection('characters').doc(this.$route.query?.id)
      )
    }
  },
  mounted() {
    if (this.$route.query?.id) {
      this.bind()
    } else {
      this.goToHome()
    }
  }
}
</script>
<style lang="scss" scoped></style>
