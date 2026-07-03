<template>
  <div class="my-8 bg-indigo-950/40 border border-indigo-500/20 shadow-2xl backdrop-blur-lg p-6 rounded-2xl text-indigo-100 mx-auto transition-all">
    <div class="text-lg font-medium text-center">
      Downloading and analyzing
      {{ title }}&rsquo;s games
    </div>

    <template v-if="hideProgressBar">
      <svg class="animate-spin my-4 mx-auto h-12 w-12 text-indigo-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path
          class="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
    </template>
    <template v-else>
      <div class="w-full my-4 h-4 bg-slate-800/80 rounded-full overflow-hidden border border-slate-700/50">
        <div class="h-4 bg-gradient-to-r from-indigo-500 to-purple-500 shadow-lg shadow-indigo-500/50 transition-all duration-300" :style="`width: ${percentDownloaded}%`"></div>
      </div>

      <div class="flex flex-row">
        <div class="basis-1/4 text-center">
          <h4 class="text-xl md:text-4xl text-indigo-300">
            {{ positions.toLocaleString() }}
          </h4>
          <span class="text-xs uppercase tracking-wider text-slate-400 mt-1 block">Positions Analyzed</span>
        </div>
        <div class="basis-1/4 text-center">
          <h4 class="text-xl md:text-4xl text-indigo-300">
            {{ downloaded.toLocaleString() }}
          </h4>
          <span class="text-xs uppercase tracking-wider text-slate-400 mt-1 block">Games Analyzed</span>
        </div>
        <div class="basis-1/4 text-center">
          <h4 class="text-xl md:text-4xl text-indigo-300">
            {{ total.toLocaleString() }}
          </h4>
          <span class="text-xs uppercase tracking-wider text-slate-400 mt-1 block">Total Games</span>
        </div>
        <div class="basis-1/4 text-center">
          <h4 class="text-xl md:text-4xl text-emerald-400">{{ percentDownloadedDisplay }}%</h4>
          <span class="text-xs uppercase tracking-wider text-slate-400 mt-1 block">Complete</span>
        </div>
      </div>

      <div class="text-center mt-4">
        <button
          @click="cancelDownload"
          type="button"
          class="px-6 py-2 bg-red-900/60 border border-red-500/50 text-red-200 font-medium text-xs leading-tight uppercase rounded-lg shadow-md hover:bg-red-800 hover:shadow-red-500/20 focus:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-500 active:bg-red-700 transition-all duration-200 ease-in-out backdrop-blur-sm"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="inline h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          Stop Download
        </button>
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
