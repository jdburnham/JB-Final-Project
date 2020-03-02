<template>
  <nav class="flex bg-red-800 h-14 px-6 justify-between items-center">
    <div>
      <router-link
        class="logo font-bold text-xl tracking-tight"
        to="/"
      >Table Top RPG Charactor Creator</router-link>
    </div>
    <div>
      <router-link to="/">Home</router-link>|
      <router-link to="/login">Login</router-link>|
      <router-link to="/feedback">feedback</router-link>
    </div>
  </nav>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
