<template>
  <div class="inline-block" ref="futCardElement" id="fut-card-element">
    <!-- Main Card Container -->
    <div
      class="w-[350px] bg-yellow-300 border-8 border-black shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] flex flex-col p-4 relative"
      style="font-family: 'Bangers', sans-serif; font-weight: normal; letter-spacing: 1px;"
    >
      <!-- Top Section -->
      <div class="flex justify-between items-start border-b-8 border-black pb-4">
        <!-- Rating & Position -->
        <div class="flex flex-col text-center w-1/3">
          <span class="text-6xl text-black leading-none drop-shadow-[4px_4px_0px_rgba(255,255,255,1)]">{{ overallRating }}</span>
          <span class="text-3xl text-pink-500 bg-black border-4 border-black px-1 uppercase mt-1 inline-block -rotate-3">RSN</span>
        </div>
        
        <!-- Avatar/Icon Area -->
        <div class="w-2/3 flex justify-center items-center">
          <div class="bg-cyan-300 border-8 border-black w-[120px] h-[120px] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex justify-center items-center rotate-3">
             <span class="text-6xl text-black drop-shadow-[2px_2px_0px_rgba(255,255,255,1)]">🏆</span>
          </div>
        </div>
      </div>

      <!-- Player Name -->
      <div class="text-center border-b-8 border-black py-2 bg-pink-300 -mx-4 px-4 shadow-[0px_8px_0px_0px_rgba(0,0,0,1)] mb-4 z-10">
        <h2 class="text-4xl text-black drop-shadow-[2px_2px_0px_rgba(255,255,255,1)] truncate uppercase">{{ username || 'UNKNOWN' }}</h2>
      </div>

      <!-- Stats Grid -->
      <div class="grid grid-cols-2 gap-y-4 gap-x-2 pt-2 bg-white border-4 border-black p-2 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        <!-- Stat 1 -->
        <div class="flex justify-between items-center bg-gray-100 border-4 border-black px-2 py-1">
          <span class="text-3xl text-black">{{ trophyCount }}</span>
          <span class="text-xl text-black bg-yellow-300 border-l-4 border-black pl-2 pr-1 ml-2">TRO</span>
        </div>
        <!-- Stat 2 -->
        <div class="flex justify-between items-center bg-gray-100 border-4 border-black px-2 py-1">
          <span class="text-3xl text-black">{{ formattedGames }}</span>
          <span class="text-xl text-black bg-cyan-300 border-l-4 border-black pl-2 pr-1 ml-2">GMS</span>
        </div>
        <!-- Stat 3 -->
        <div class="flex justify-between items-center bg-gray-100 border-4 border-black px-2 py-1">
          <span class="text-3xl text-black">{{ completedPercentage }}</span>
          <span class="text-xl text-black bg-pink-300 border-l-4 border-black pl-2 pr-1 ml-2">PCT</span>
        </div>
        <!-- Stat 4 -->
        <div class="flex justify-between items-center bg-gray-100 border-4 border-black px-2 py-1">
          <span class="text-3xl text-black">{{ formattedPositions }}</span>
          <span class="text-xl text-black bg-green-400 border-l-4 border-black pl-2 pr-1 ml-2">POS</span>
        </div>
      </div>
      
      <!-- Footer -->
      <div class="text-center mt-4 bg-black text-white text-xl uppercase py-1 border-4 border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        ROSEN SCORE REPORT
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'FutCard',
  props: {
    username: { type: String, required: true },
    overallRating: { type: Number, required: true },
    trophyCount: { type: Number, required: true },
    completedPercentage: { type: Number, required: true },
    totalGames: { type: Number, required: true },
    totalPositions: { type: Number, required: true }
  },
  computed: {
    formattedGames() {
      return this.totalGames >= 1000 ? (this.totalGames / 1000).toFixed(1) + 'k' : this.totalGames
    },
    formattedPositions() {
      return this.totalPositions >= 1000000 
        ? (this.totalPositions / 1000000).toFixed(1) + 'M' 
        : this.totalPositions >= 1000 
          ? (this.totalPositions / 1000).toFixed(1) + 'k' 
          : this.totalPositions
    }
  }
}
</script>
