<template>
  <div class="border-t border-slate-700/50 mt-4 text-slate-300 font-bold pt-2">Recent Updates</div>
  <ul class="text-sm text-slate-400">
    <li>
      <changelog-date :year="2024" :month="11" :day="13"></changelog-date>
      - Added <strong class="text-slate-200">Mona Lisa Checkmate</strong> trophy
      <br />
      &nbsp; Credit to
      <span class="dotted-underline text-indigo-400 hover:text-indigo-300 cursor-pointer transition-colors" @click.prevent="formFill('chesscom', 'KNVB')">GM Aman Hambleton</span>
      from Chessbrah. <a href="https://youtu.be/XAlcDWQ6iTM?t=387" class="dotted-underline text-indigo-400 hover:text-indigo-300 transition-colors" target="_blank">See video here</a>
    </li>
  </ul>
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
