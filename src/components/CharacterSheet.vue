<template>
  <div class="bg-white w-1/2 m-4 shadow-lg p-4 mx-auto">
    <label class="block">
      <span class="text-gray-700">Adventurer Name</span>
      <input
        v-model="advName"
        class="form-input mt-1 block w-full"
        placeholder="Give your Adventurer a name"
      />
    </label>
    <div class="mt-4">
      <span class="text-gray-700">Adventurer Gender</span>
      <div class="mt-2">
        <label class="inline-flex items-center">
          <input
            v-model="advGender"
            type="radio"
            class="form-radio"
            value="male"
          />
          <span class="ml-2">Male</span>
        </label>
        <label class="inline-flex items-center ml-6">
          <input
            v-model="advGender"
            type="radio"
            class="form-radio"
            value="female"
          />
          <span class="ml-2">Female</span>
        </label>
        <label class="inline-flex items-center ml-6">
          <input
            v-model="advGender"
            type="radio"
            class="form-radio"
            value="other"
          />
          <span class="ml-2">Other</span>
        </label>
      </div>
    </div>
    <label class="block mt-4">
      <span class="text-gray-700">Adventurer Race</span>
      <select v-model="advRace" class="form-select mt-1 block w-full">
        <option value="" disabled selected hidden>Select a Race</option>
        <option>Human</option>
        <option>Elf</option>
        <option>Dwarf</option>
        <option>Halfling</option>
      </select>
    </label>
    <label class="block mt-4">
      <span class="text-gray-700">Adventurer class</span>
      <select v-model="advClass" class="form-select mt-1 block w-full">
        <option value="" disabled selected hidden>Select a Class</option>
        <option>Fighter</option>
        <option>Archer</option>
        <option>Thief</option>
        <option>Wizard</option>
      </select>
    </label>
    <div class="block">
      <span class="text-gray-700">Adventurer Skills</span>
      <div class="mt-2">
        <div>
          <label class="inline-flex items-center">
            <input type="checkbox" class="form-checkbox" checked />
            <span class="ml-2">Option 1</span>
          </label>
        </div>
        <div>
          <label class="inline-flex items-center">
            <input type="checkbox" class="form-checkbox" />
            <span class="ml-2">Option 2</span>
          </label>
        </div>
        <div>
          <label class="inline-flex items-center">
            <input type="checkbox" class="form-checkbox" />
            <span class="ml-2">Option 3</span>
          </label>
        </div>
      </div>
    </div>
    <div class="buttons w-full flex justify-center">
      <button
        class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mt-4 mr-4 flex-grow"
        @click="$router.push('/portfolio')"
      >
        Cancel
      </button>
      <button
        v-if="!edit"
        class="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded mt-4 flex-grow"
        @click="add"
      >
        Save
      </button>
      <button
        v-else
        class="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded mt-4 flex-grow"
        @click="save"
      >
        Edit
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CharacterSheet',
  // props: {
  //   edit: {
  //     type: Boolean,
  //     default: false
  //   },
  //   adventurer: {
  //     type: Object,
  //     default: () => ({
  //       id: '',
  //       advName: '',
  //       advGender: '',
  //       advRace: '',
  //       advClass: ''
  //     })
  //   },
  data() {
    return {
      advName: '',
      advGender: '',
      advRace: '',
      advClass: ''
    }
  }
}
//}
</script>

<style lang="scss" scoped></style>
