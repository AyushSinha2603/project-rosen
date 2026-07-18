<template>
  <div class="my-8 bg-panel border border-line p-8 mx-auto rounded-2xl shadow-2xl transition-all relative overflow-hidden">
    <div class="absolute inset-0 bg-brand/5 blur-3xl pointer-events-none"></div>
    <div class="text-lg font-display tracking-widest text-ink-soft text-center uppercase relative z-10">
      Downloading and analyzing
      <span class="text-ink font-bold">{{ title }}&rsquo;s</span> games
    </div>

    <template v-if="hideProgressBar">
      <svg class="animate-spin my-8 mx-auto h-12 w-12 text-brand relative z-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path
          class="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
    </template>
    <template v-else>
      <div class="w-full my-8 h-2 bg-surface-2 rounded-full overflow-hidden relative z-10">
        <div class="h-full bg-gradient-to-r from-brand/50 to-brand transition-all duration-300 rounded-full" :style="`width: ${percentDownloaded}%`"></div>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10">
        <div class="text-center p-4 bg-surface-2 border border-line rounded-xl shadow-inner">
          <h4 class="text-2xl md:text-3xl font-display font-bold text-ink mb-1">
            {{ positions.toLocaleString() }}
          </h4>
          <span class="text-xs font-bold tracking-widest uppercase text-ink-mute">Positions</span>
        </div>
        <div class="text-center p-4 bg-surface-2 border border-line rounded-xl shadow-inner">
          <h4 class="text-2xl md:text-3xl font-display font-bold text-ink mb-1">
            {{ downloaded.toLocaleString() }}
          </h4>
          <span class="text-xs font-bold tracking-widest uppercase text-ink-mute">Games</span>
        </div>
        <div class="text-center p-4 bg-surface-2 border border-line rounded-xl shadow-inner">
          <h4 class="text-2xl md:text-3xl font-display font-bold text-ink mb-1">
            {{ total.toLocaleString() }}
          </h4>
          <span class="text-xs font-bold tracking-widest uppercase text-ink-mute">Total</span>
        </div>
        <div class="text-center p-4 bg-surface-2 border border-brand/30 bg-brand/5 rounded-xl shadow-inner">
          <h4 class="text-2xl md:text-3xl font-display font-bold text-brand mb-1">{{ percentDownloadedDisplay }}%</h4>
          <span class="text-xs font-bold tracking-widest uppercase text-brand/70">Complete</span>
        </div>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
export default {
  props: ['title', 'positions', 'downloaded', 'total', 'hideProgressBar'],

  computed: {
    percentDownloaded: function () {
      if (this.downloaded && this.total) {
        return Math.min((this.downloaded / this.total) * 100, 100)
      } else {
        return 0
      }
    },
    percentDownloadedDisplay: function () {
      return Math.min(Math.round(this.percentDownloaded), 99)
    },
  },

  methods: {
    cancelDownload: function () {
      this.$emit('cancel-download')
    },
  },
}
</script>
