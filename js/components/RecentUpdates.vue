<template>
  <div class="border-t-8 border-black mt-12 pt-4 text-black font-black text-2xl bg-pink-300 p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">Recent Updates
    <ul class="text-lg text-black mt-4 font-bold border-t-4 border-black pt-4">
      <li>
        <changelog-date :year="2024" :month="11" :day="13"></changelog-date>
        - Added <strong class="bg-yellow-300 px-1 border-2 border-black">Mona Lisa Checkmate</strong> trophy
        <br />
        &nbsp; Credit to
        <span class="bg-white border-b-4 border-black hover:bg-black hover:text-white px-1 cursor-pointer transition-colors" @click.prevent="formFill('chesscom', 'KNVB')">GM Aman Hambleton</span>
        from Chessbrah. <a href="https://youtu.be/XAlcDWQ6iTM?t=387" class="bg-white border-b-4 border-black hover:bg-black hover:text-white px-1 transition-colors" target="_blank">See video here</a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import ChangelogDate from './ChangelogDate.vue'

export default {
  components: {
    ChangelogDate,
  },
  emits: ['form-fill'],
  methods: {
    formFill(type: string, value: string): void {
      this.$emit('form-fill', type, value)
    },
  },
}
</script>
