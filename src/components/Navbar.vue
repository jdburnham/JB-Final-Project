<template>
  <nav class="flex bg-red-800 h-20 px-6 justify-between items-center">
    <div>
      <router-link class="logo font-bold text-xl tracking-tight" to="/">
        <img class="h-8 mr-4" src="sword.png" alt="Logo" />
        Table Top RPG Charactor Creator
      </router-link>
    </div>
    <div>
      <span v-if="user" class="text-white font-bold mr-8">
        You are logged in as
        <span class="font-normal">{{ user.displayName }}</span>
      </span>
      <router-link class="p-2 mx-1 hover:text-red-800 hover:bg-blue-300" to="/"
        >Home</router-link
      >
      <router-link
        v-if="!user"
        class="p-2 mx-1 hover:text-red-800 hover:bg-blue-300"
        to="/login"
        >Login</router-link
      >
      <button
        v-if="user"
        class="p-2 mx-1 hover:text-red-800 hover:bg-blue-300"
        @click="logout"
      >
        Logout
      </button>
      <router-link
        class="p-2 mx-1 hover:text-red-800 hover:bg-blue-300"
        to="/portfolio"
        >Portfolio</router-link
      >
      <router-link
        class="p-2 mx-1 hover:text-red-800 hover:bg-blue-300"
        to="/feedback"
        >Feedback</router-link
      >
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  computed: {
    user() {
      return this.$store.getters.getUser
    }
  },
  methods: {
    logout() {
      this.$firebase.auth().signOut()
      this.$store.dispatch('setUser', '')
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss" scoped>
:not(.logo).router-link-exact-active {
  @apply font-bold text-red-800 bg-white;
}
</style>
