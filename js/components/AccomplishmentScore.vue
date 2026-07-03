<template>
  <div
    class="px-4 py-3 text-center border-4 border-black font-bold rounded-none transition-all shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
    :class="{
      'bg-cyan-300 text-black hover:bg-cyan-400 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]': hasTrophies,
      'bg-gray-100 text-gray-500 hover:bg-gray-200 accomplishment-does-not-have-games': !hasTrophies,
    }"
  >
    <span @click.prevent="isExpanded = !isExpanded" class="hover:underline cursor-pointer">{{ title }}</span>

    <div v-if="hasTrophies" @click.prevent="isExpanded = !isExpanded" class="cursor-pointer">
      <trophy-collection :count="trophyCount"></trophy-collection>
    </div>

    <template v-if="isExpanded">
      <div
        v-if="hasExpandableContent"
        class="p-4 mt-4 text-sm font-bold border-4 border-black text-left rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
        :class="{
          'bg-white text-black': hasTrophies,
          'bg-gray-50 text-gray-600': !hasTrophies,
        }"
      >
        {{ desc }}

        <a v-if="gameLink" :href="gameLink" target="_blank" class="block underline hover:font-bold">
          <svg xmlns="http://www.w3.org/2000/svg" class="inline h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
          </svg>
          See an example game
        </a>

        <a v-if="youtubeLink" :href="youtubeLink" target="_blank" class="block underline hover:font-bold">
          <svg xmlns="http://www.w3.org/2000/svg" class="inline h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
              clip-rule="evenodd"
            />
          </svg>
          Watch example on YouTube
        </a>
      </div>

      <template v-if="hasTrophies">
        <h4 class="font-black text-2xl mt-6 text-black uppercase bg-yellow-300 border-4 border-black inline-block px-4 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          {{ trophyCount }}
          <template v-if="trophyCount === 1"> {{ units[0] }} </template>
          <template v-else> {{ units[1] }} </template>
        </h4>

        <div class="grid grid-cols-2 gap-x-2 text-left">
          <div
            v-for="trophy in trophies"
            class="overflow-hidden"
            :title="`Appears ${
              trophyCountByUsername(trophy.opponent.username) > 1 ? trophyCountByUsername(trophy.opponent.username) + ' times' : '1 time'
            } in this category`"
          >
            <a :href="trophy.link" class="hover:underline whitespace-nowrap" target="_blank">
              <username-formatter :title="trophy.opponent.title || ''" :username="trophy.opponent.username"></username-formatter>
            </a>
            <span v-if="trophyCountByUsername(trophy.opponent.username) > 1" class="pl-2 text-sm text-gray-100 cursor-help"
              >x{{ trophyCountByUsername(trophy.opponent.username) }}</span
            >
          </div>
        </div>
      </template>
    </template>
  </div>
</template>

<script lang="ts">
import UsernameFormatter from './UsernameFormatter.vue'
import TrophyCollection from './TrophyCollection.vue'
import { TrophyForGame } from '../types/types'

export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    desc: String,
    trophies: {
      type: Object,
      required: true,
    },
    gameLink: String,
    youtubeLink: String,
    units: {
      type: Array,
      default: ['Game', 'Games'],
    },
  },
  components: {
    UsernameFormatter,
    TrophyCollection,
  },
  mounted() {
    this.$emit('register-new-trophy')
  },
  data() {
    return {
      isExpanded: false,
    }
  },
  computed: {
    trophyCount(): number {
      return Object.keys(this.trophies).length
    },
    hasTrophies(): boolean {
      return this.trophyCount > 0
    },
    hasExpandableContent(): boolean {
      return Boolean(this.desc || this.gameLink || this.youtubeLink)
    },
    usernameCount(): Map<string, number> {
      let usernames = Object.values(this.trophies as TrophyForGame).map((trophy) => trophy.opponent.username)

      return usernames.reduce((map, username) => {
        map.set(username, (map.get(username) ?? 0) + 1)
        return map
      }, new Map<string, number>())
    },
  },
  methods: {
    trophyCountByUsername(username: string): number {
      return this.usernameCount.get(username) || 0
    },
  },
}
</script>
