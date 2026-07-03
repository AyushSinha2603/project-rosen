<template>
  <div class="my-8 bg-purple-400 border-8 border-black shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] p-8 text-black font-black mx-auto rounded-none transition-all">
    <div class="text-lg font-medium text-center">
      Downloading and analyzing
      {{ title }}&rsquo;s games
    </div>

    <template v-if="hideProgressBar">
      <svg class="animate-spin my-4 mx-auto h-16 w-16 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path
          class="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
    </template>
    <template v-else>
      <div class="w-full my-6 h-8 bg-white border-4 border-black overflow-hidden rounded-none shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative">
        <div class="h-8 bg-green-400 border-r-4 border-black transition-all duration-300 relative z-10" :style="`width: ${percentDownloaded}%`"></div>
      </div>

      <div class="flex flex-row">
        <div class="basis-1/4 text-center">
          <h4 class="text-2xl md:text-5xl text-black bg-white border-4 border-black px-2 py-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] inline-block">
            {{ positions.toLocaleString() }}
          </h4>
          <span class="text-sm font-black uppercase text-white bg-black mt-4 block p-1 border-2 border-black">Positions Analyzed</span>
        </div>
        <div class="basis-1/4 text-center">
          <h4 class="text-2xl md:text-5xl text-black bg-white border-4 border-black px-2 py-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] inline-block">
            {{ downloaded.toLocaleString() }}
          </h4>
          <span class="text-sm font-black uppercase text-white bg-black mt-4 block p-1 border-2 border-black">Games Analyzed</span>
        </div>
        <div class="basis-1/4 text-center">
          <h4 class="text-2xl md:text-5xl text-black bg-white border-4 border-black px-2 py-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] inline-block">
            {{ total.toLocaleString() }}
          </h4>
          <span class="text-sm font-black uppercase text-white bg-black mt-4 block p-1 border-2 border-black">Total Games</span>
        </div>
        <div class="basis-1/4 text-center">
          <h4 class="text-2xl md:text-5xl text-black bg-yellow-300 border-4 border-black px-2 py-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] inline-block">{{ percentDownloadedDisplay }}%</h4>
          <span class="text-sm font-black uppercase text-white bg-black mt-4 block p-1 border-2 border-black">Complete</span>
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
