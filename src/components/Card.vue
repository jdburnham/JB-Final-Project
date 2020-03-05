<template>
  <div class="p-2 flex">
    <div class="mb-8 px-4">
      <div class="pb-5/6">
        <img
          class="h-full w-full object-cover shadow-md"
          src="https://via.placeholder.com/300x200.png?text=Character+Image"
          alt="Adventurer"
        />
      </div>
      <div class="relative px-4 -mt-16">
        <div class="bg-white p-6 shadow-lg">
          <h4 class="mt-1 font-bold leading-tight truncate">Hero Name</h4>
          <div class="mt-1">Race & Class</div>
          <button class="text-green-500 mt-2 pr-2">Edit</button>
          <button class="text-red-500 mt-2 pr-2">Delete</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card'
}
</script>

<style lang="scss" scoped>
</style>