<template>
  <div class="bg-white w-1/2 m-4 shadow-lg p-4 mx-auto">
    <label class="block">
      <span class="text-gray-700">Adventurer Name</span>
      <input
        v-model="dataName"
        class="form-input mt-1 block w-full"
        placeholder="Give your Adventurer a name"
      />
    </label>
    <div class="mt-4">
      <span class="text-gray-700">Adventurer Gender</span>
      <div class="mt-2">
        <label class="inline-flex items-center">
          <input
            v-model="dataGender"
            type="radio"
            class="form-radio"
            value="male"
          />
          <span class="ml-2">Male</span>
        </label>
        <label class="inline-flex items-center ml-6">
          <input
            v-model="dataGender"
            type="radio"
            class="form-radio"
            value="female"
          />
          <span class="ml-2">Female</span>
        </label>
        <label class="inline-flex items-center ml-6">
          <input
            v-model="dataGender"
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
      <select v-model="dataRace" class="form-select mt-1 block w-full">
        <option value disabled selected hidden>Select a Race</option>
        <option>Dragonborn</option>
        <option>Dwarf</option>
        <option>Elf</option>
        <option>Gnome</option>
        <option>Half-Elf</option>
        <option>Half-Orc</option>
        <option>Halfling</option>
        <option>Human</option>
        <option>Tiefling</option>
      </select>
    </label>
    <label class="block mt-4">
      <span class="text-gray-700">Adventurer class</span>
      <select v-model="dataClass" class="form-select mt-1 block w-full">
        <option value disabled selected hidden>Select a Class</option>
        <option>Barbarian</option>
        <option>Bard</option>
        <option>Cleric</option>
        <option>Druid</option>
        <option>Fighter</option>
        <option>Monk</option>
        <option>Paladin</option>
        <option>Ranger</option>
        <option>Rogue</option>
        <option>Sorcerer</option>
        <option>Warlock</option>
        <option>Wizard</option>
      </select>
    </label>
    <table class="table-fixed">
      <thead>
        <tr>
          <th class="w-1/2 px-4 py-2">Attribute</th>
          <th class="w-1/4 px-4 py-2">Ability Score</th>
          <th class="w-1/4 px-4 py-2">Modifier</th>
          <th class="w-1/4 px-4 py-2">Points Remaining: {{ dataPoints }}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="border px-4 py-2">Strength</td>
          <td class="border px-4 py-2">
            <button
              @click="subStrPoint"
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              -
            </button>
            {{ dataStr }}
            <button
              @click="addStrPoint"
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              +
            </button>
          </td>
          <td class="border px-4 py-2">{{ calcModifier(dataStr) }}</td>
        </tr>
        <tr>
          <td class="border px-4 py-2">Dexterity</td>
          <td class="border px-4 py-2">
            <button
              @click="subDexPoint"
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              -
            </button>
            {{ dataDex }}
            <button
              @click="addDexPoint"
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              +
            </button>
          </td>
          <td class="border px-4 py-2">{{ calcModifier(dataDex) }}</td>
        </tr>
        <tr>
          <td class="border px-4 py-2">Constitution</td>
          <td class="border px-4 py-2">
            <button
              @click="subConPoint"
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              -
            </button>
            {{ dataCon }}
            <button
              @click="addConPoint"
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              +
            </button>
          </td>
          <td class="border px-4 py-2">{{ calcModifier(dataCon) }}</td>
        </tr>
        <tr>
          <td class="border px-4 py-2">Intelligence</td>
          <td class="border px-4 py-2">
            <button
              @click="subIntPoint"
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              -
            </button>
            {{ dataInt }}
            <button
              @click="addIntPoint"
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              +
            </button>
          </td>
          <td class="border px-4 py-2">{{ calcModifier(dataInt) }}</td>
        </tr>
        <tr>
          <td class="border px-4 py-2">Wisdom</td>
          <td class="border px-4 py-2">
            <button
              @click="subWisPoint"
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              -
            </button>
            {{ dataWis }}
            <button
              @click="addWisPoint"
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              +
            </button>
          </td>
          <td class="border px-4 py-2">{{ calcModifier(dataWis) }}</td>
        </tr>
        <tr>
          <td class="border px-4 py-2">Charisma</td>
          <td class="border px-4 py-2">
            <button
              @click="subCharismaPoint"
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              -
            </button>
            {{ dataCha }}
            <button
              @click="addCharismaPoint"
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              +
            </button>
          </td>
          <td class="border px-4 py-2">{{ calcModifier(dataCha) }}</td>
        </tr>
      </tbody>
    </table>
    <br />
    <div class="block">
      <span class="text-gray-700 mr-4">Select 3 Adventurer Skills</span>
      <button
        class="bg-yellow-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
        @click="dataSkills = []"
      >
        Clear Skills
      </button>
      <div class="mt-2">
        <div>
          <label class="inline-flex items-center">
            <input
              v-model="dataSkills"
              type="checkbox"
              class="form-checkbox"
              value="acrobatics"
              :disabled="!allowNewSkill"
            />
            <span class="ml-2">Acrobatics (DEX)</span>
          </label>
        </div>
        <div>
          <label class="inline-flex items-center">
            <input
              v-model="dataSkills"
              type="checkbox"
              class="form-checkbox"
              value="animal handling"
              :disabled="!allowNewSkill"
            />
            <span class="ml-2">Animal Handling (WIS)</span>
          </label>
        </div>
        <div>
          <label class="inline-flex items-center">
            <input
              v-model="dataSkills"
              type="checkbox"
              class="form-checkbox"
              value="arcana"
              :disabled="!allowNewSkill"
            />
            <span class="ml-2">Arcana (INT)</span>
          </label>
        </div>
        <div>
          <label class="inline-flex items-center">
            <input
              v-model="dataSkills"
              type="checkbox"
              class="form-checkbox"
              value="athletics"
              :disabled="!allowNewSkill"
            />
            <span class="ml-2">Athletics (STR)</span>
          </label>
        </div>
        <div>
          <label class="inline-flex items-center">
            <input
              v-model="dataSkills"
              type="checkbox"
              class="form-checkbox"
              value="deception"
              :disabled="!allowNewSkill"
            />
            <span class="ml-2">Deception (CHA)</span>
          </label>
        </div>
        <div>
          <label class="inline-flex items-center">
            <input
              v-model="dataSkills"
              type="checkbox"
              class="form-checkbox"
              value="history"
              :disabled="!allowNewSkill"
            />
            <span class="ml-2">History (INT)</span>
          </label>
        </div>
        <div>
          <label class="inline-flex items-center">
            <input
              v-model="dataSkills"
              type="checkbox"
              class="form-checkbox"
              value="insight"
              :disabled="!allowNewSkill"
            />
            <span class="ml-2">Insight (WIS)</span>
          </label>
        </div>
        <div>
          <label class="inline-flex items-center">
            <input
              v-model="dataSkills"
              type="checkbox"
              class="form-checkbox"
              value="intimidation"
              :disabled="!allowNewSkill"
            />
            <span class="ml-2">Intimidation (CHA)</span>
          </label>
        </div>
        <div>
          <label class="inline-flex items-center">
            <input
              v-model="dataSkills"
              type="checkbox"
              class="form-checkbox"
              value="medicine"
              :disabled="!allowNewSkill"
            />
            <span class="ml-2">Medicine (WIS)</span>
          </label>
        </div>
        <div>
          <label class="inline-flex items-center">
            <input
              v-model="dataSkills"
              type="checkbox"
              class="form-checkbox"
              value="nature"
              :disabled="!allowNewSkill"
            />
            <span class="ml-2">Nature (INT)</span>
          </label>
        </div>
        <div>
          <label class="inline-flex items-center">
            <input
              v-model="dataSkills"
              type="checkbox"
              class="form-checkbox"
              value="perception"
              :disabled="!allowNewSkill"
            />
            <span class="ml-2">Perception (WIS)</span>
          </label>
        </div>
        <div>
          <label class="inline-flex items-center">
            <input
              v-model="dataSkills"
              type="checkbox"
              class="form-checkbox"
              value="performance"
              :disabled="!allowNewSkill"
            />
            <span class="ml-2">Performance (CHA)</span>
          </label>
        </div>
        <div>
          <label class="inline-flex items-center">
            <input
              v-model="dataSkills"
              type="checkbox"
              class="form-checkbox"
              value="persuassion"
              :disabled="!allowNewSkill"
            />
            <span class="ml-2">Persuassion (CHA)</span>
          </label>
        </div>
        <div>
          <label class="inline-flex items-center">
            <input
              v-model="dataSkills"
              type="checkbox"
              class="form-checkbox"
              value="religion"
              :disabled="!allowNewSkill"
            />
            <span class="ml-2">Religion (INT)</span>
          </label>
        </div>
        <div>
          <label class="inline-flex items-center">
            <input
              v-model="dataSkills"
              type="checkbox"
              class="form-checkbox"
              value="sleight of hand"
              :disabled="!allowNewSkill"
            />
            <span class="ml-2">Sleight of Hand (DEX)</span>
          </label>
        </div>
        <div>
          <label class="inline-flex items-center">
            <input
              v-model="dataSkills"
              type="checkbox"
              class="form-checkbox"
              value="stealth"
              :disabled="!allowNewSkill"
            />
            <span class="ml-2">Stealth (DEX)</span>
          </label>
        </div>
        <div>
          <label class="inline-flex items-center">
            <input
              v-model="dataSkills"
              type="checkbox"
              class="form-checkbox"
              value="survival"
              :disabled="!allowNewSkill"
            />
            <span class="ml-2">Survival (WIS)</span>
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
        Add
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
import short from 'short-uuid'
import { db } from '../helpers/firebase'

export default {
  name: 'CharacterSheet',
  props: {
    edit: {
      type: Boolean,
      default: false
    },
    character: {
      type: Object,
      default: () => ({
        id: '',
        advName: '',
        advGender: '',
        advRace: '',
        advClass: '',
        advPoints: 24,
        advStr: 8,
        advDex: 8,
        advCon: 8,
        advInt: 8,
        advWis: 8,
        advCha: 8,
        advSkills: []
      })
    }
  },
  data() {
    return {
      dataName: '',
      dataGender: '',
      dataRace: '',
      dataClass: '',
      dataPoints: 24,
      dataStr: 8,
      dataDex: 8,
      dataCon: 8,
      dataInt: 8,
      dataWis: 8,
      dataCha: 8,
      dataSkills: [],
      allowNewSkill: true
    }
  },
  computed: {
    user() {
      return this.$store.getters.getUser
    }
  },
  created() {
    this.assignValues()
  },
  watch: {
    character: async function() {
      await this.assignValues()
    },
    dataSkills: function() {
      this.dataSkills.length < 3
        ? (this.allowNewSkill = true)
        : (this.allowNewSkill = false)
    }
  },
  methods: {
    async add() {
      const newCharacter = {
        userId: this.user.uid,
        advName: this.dataName,
        advGender: this.dataGender,
        advRace: this.dataRace,
        advClass: this.dataClass,
        advPoints: this.dataPoints,
        advStr: this.dataStr,
        advDex: this.dataDex,
        advCon: this.dataCon,
        advInt: this.dataInt,
        advWis: this.dataWis,
        advCha: this.dataCha,
        advSkills: this.dataSkills
      }
      await db
        .collection('characters')
        .doc(short.generate())
        .set(newCharacter)
      this.$store.dispatch('addCharacter', newCharacter)
      this.$router.push('/portfolio')
    },
    async save() {
      this.$store.dispatch('removeCharacter', this.character.id)
      const savedCharacter = {
        userId: this.user.uid,
        advName: this.dataName,
        advGender: this.dataGender,
        advRace: this.dataRace,
        advClass: this.dataClass,
        advPoints: this.dataPoints,
        advStr: this.dataStr,
        advDex: this.dataDex,
        advCon: this.dataCon,
        advInt: this.dataInt,
        advWis: this.dataWis,
        advCha: this.dataCha,
        advSkills: this.dataSkills
      }
      await db
        .collection('characters')
        .doc(this.character.id)
        .set(savedCharacter)
      this.$store.dispatch('addCharacter', savedCharacter)
      this.$router.push('/portfolio')
    },
    async assignValues() {
      await this.$nextTick
      this.dataName = this.character.advName
      this.dataGender = this.character.advGender
      this.dataRace = this.character.advRace
      this.dataClass = this.character.advClass
      this.dataPoints = this.character.advPoints
      this.dataStr = this.character.advStr
      this.dataDex = this.character.advDex
      this.dataCon = this.character.advCon
      this.dataInt = this.character.advInt
      this.dataWis = this.character.advWis
      this.dataCha = this.character.advCha
      this.dataSkills = this.character.advSkills
    },
    addStrPoint() {
      if (this.dataPoints !== 0) {
        if (this.dataStr < 15) {
          this.dataPoints--
          this.dataStr++
        }
      }
    },
    subStrPoint() {
      if (this.dataPoints !== 21) {
        if (this.dataStr > 8) {
          this.dataPoints++
          this.dataStr--
        }
      }
    },
    addDexPoint() {
      if (this.dataPoints !== 0) {
        if (this.dataDex < 15) {
          this.dataPoints--
          this.dataDex++
        }
      }
    },
    subDexPoint() {
      if (this.dataPoints !== 21) {
        if (this.dataDex > 8) {
          this.dataPoints++
          this.dataDex--
        }
      }
    },
    addConPoint() {
      if (this.dataPoints !== 0) {
        if (this.dataCon < 15) {
          this.dataPoints--
          this.dataCon++
        }
      }
    },
    subConPoint() {
      if (this.dataPoints !== 21) {
        if (this.dataCon > 8) {
          this.dataPoints++
          this.dataCon--
        }
      }
    },
    addIntPoint() {
      if (this.dataPoints !== 0) {
        if (this.dataInt < 15) {
          this.dataPoints--
          this.dataInt++
        }
      }
    },
    subIntPoint() {
      if (this.dataPoints !== 21) {
        if (this.dataInt > 8) {
          this.dataPoints++
          this.dataInt--
        }
      }
    },
    addWisPoint() {
      if (this.dataPoints !== 0) {
        if (this.dataWis < 15) {
          this.dataPoints--
          this.dataWis++
        }
      }
    },
    subWisPoint() {
      if (this.dataPoints !== 21) {
        if (this.dataWis > 8) {
          this.dataPoints++
          this.dataWis--
        }
      }
    },
    addCharismaPoint() {
      if (this.dataPoints !== 0) {
        if (this.dataCha < 15) {
          this.dataPoints--
          this.dataCha++
        }
      }
    },
    subCharismaPoint() {
      if (this.dataPoints !== 21) {
        if (this.dataCha > 8) {
          this.dataPoints++
          this.dataCha--
        }
      }
    },
    //Pass score in, calculate modifier, return modifier
    calcModifier(score) {
      if (score < 10) {
        let dataModifer = parseInt((score - 11) / 2)
        return dataModifer
      } else {
        let dataModifier = parseInt((score - 10) / 2)
        return dataModifier
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
