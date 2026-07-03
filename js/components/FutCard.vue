<template>
  <div class="inline-block relative p-2" ref="futCardElement" id="fut-card-element">
    <!-- Outer Card Background -->
    <div
      class="w-[320px] h-[480px] relative text-[#422006] flex flex-col"
      style="
        background: linear-gradient(145deg, #fef08a 0%, #eab308 40%, #854d0e 100%);
        clip-path: polygon(12% 0, 88% 0, 100% 12%, 100% 88%, 50% 100%, 0 88%, 0 12%);
        font-family: 'Arial', sans-serif;
      "
    >
      <!-- Inner Border Layer -->
      <div
        class="absolute inset-1 flex flex-col"
        style="
          background: linear-gradient(145deg, #fef9c3 0%, #facc15 45%, #a16207 100%);
          clip-path: polygon(12% 0, 88% 0, 100% 12%, 100% 88%, 50% 100%, 0 88%, 0 12%);
        "
      >
        <!-- Top Half -->
        <div class="flex h-[240px] pt-8 px-6">
          <!-- Left Stats -->
          <div class="flex flex-col items-center w-1/3 z-10">
            <span class="text-6xl font-black tracking-tighter">{{ overallRating || 99 }}</span>
            <span class="text-2xl font-bold uppercase mt-[-5px]">GM</span>
            <!-- Divider -->
            <div class="w-10 h-px bg-[#713f12] my-2 opacity-60"></div>
            <!-- Icon 1 (Flag) -->
            <span class="text-3xl">🏁</span>
            <!-- Divider -->
            <div class="w-10 h-px bg-[#713f12] my-2 opacity-60"></div>
            <!-- Icon 2 (Club) -->
            <span class="text-4xl leading-none mt-1 text-[#422006]">♔</span>
          </div>
          <!-- Right Portrait -->
          <div class="w-2/3 flex justify-center items-end pb-2 opacity-90 relative">
            <span class="text-[120px] leading-none drop-shadow-xl absolute bottom-0 right-0">🏆</span>
          </div>
        </div>

        <!-- Player Name -->
        <div class="text-center font-black text-3xl uppercase tracking-wider px-4 mt-2">
          {{ username || 'UNKNOWN' }}
        </div>
        
        <!-- Divider -->
        <div class="w-4/5 h-[2px] bg-[#713f12] mx-auto my-3 opacity-60"></div>

        <!-- Stats Grid -->
        <div class="grid grid-cols-2 gap-x-6 px-10 pt-1 text-xl font-bold">
          <!-- Col 1 -->
          <div class="flex flex-col gap-1">
            <div class="flex justify-between"><span class="font-black">{{ trophyCount }}</span> <span class="opacity-80">TRO</span></div>
            <div class="flex justify-between"><span class="font-black">{{ formattedGames }}</span> <span class="opacity-80">GMS</span></div>
            <div class="flex justify-between"><span class="font-black">99</span> <span class="opacity-80">TAC</span></div>
          </div>
          <!-- Col 2 -->
          <div class="flex flex-col gap-1">
            <div class="flex justify-between"><span class="font-black">{{ formattedPositions }}</span> <span class="opacity-80">POS</span></div>
            <div class="flex justify-between"><span class="font-black">{{ completedPercentage }}</span> <span class="opacity-80">PCT</span></div>
            <div class="flex justify-between"><span class="font-black">99</span> <span class="opacity-80">END</span></div>
          </div>
        </div>
        
        <!-- Bottom decorative line -->
        <div class="w-20 h-1 bg-[#713f12] mx-auto mt-auto mb-6 opacity-60"></div>
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
