<template>
  <div class="inline-block relative p-4" ref="futCardElement" id="fut-card-element">
    <!-- Outer Card Background with massive glowing drop shadow -->
    <div
      class="w-[320px] h-[480px] relative text-[#422006] flex flex-col shadow-[0_0_40px_rgba(250,204,21,1)]"
      style="
        background: linear-gradient(135deg, #fef08a 0%, #ca8a04 25%, #eab308 50%, #854d0e 75%, #fef08a 100%);
        clip-path: polygon(12% 0, 88% 0, 100% 12%, 100% 88%, 50% 100%, 0 88%, 0 12%);
        font-family: 'Arial', sans-serif;
      "
    >
      <!-- Inner Border Layer with glittering radial overlay -->
      <div
        class="absolute inset-1 flex flex-col"
        style="
          background: 
            radial-gradient(circle at 50% 0%, rgba(255,255,255,0.8) 0%, transparent 60%),
            linear-gradient(145deg, #fef9c3 0%, #facc15 30%, #a16207 60%, #fef08a 100%);
          clip-path: polygon(12% 0, 88% 0, 100% 12%, 100% 88%, 50% 100%, 0 88%, 0 12%);
          box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.8);
        "
      >
        <!-- Top Half -->
        <div class="flex h-[240px] pt-8 px-6">
          <!-- Left Stats -->
          <div class="flex flex-col items-center w-1/3 z-10">
            <span class="text-6xl font-black tracking-tighter" style="text-shadow: 0 0 10px rgba(255,255,255,0.8);">{{ overallRating || 99 }}</span>
            <span class="text-2xl font-bold uppercase mt-[-5px]">GM</span>
            <!-- Divider -->
            <div class="w-10 h-[2px] bg-[#713f12] my-2 opacity-80 shadow-[0_0_5px_rgba(255,255,255,1)]"></div>
            <!-- Icon 1 (Flag) -->
            <span class="text-3xl" style="filter: drop-shadow(0 0 5px rgba(255,255,255,0.5));">🏁</span>
            <!-- Divider -->
            <div class="w-10 h-[2px] bg-[#713f12] my-2 opacity-80 shadow-[0_0_5px_rgba(255,255,255,1)]"></div>
            <!-- Icon 2 (Club) -->
            <span class="text-4xl leading-none mt-1 text-[#422006]" style="text-shadow: 0 0 8px rgba(255,255,255,0.8);">♔</span>
          </div>
          <!-- Right Portrait -->
          <div class="w-2/3 flex justify-center items-end pb-2 relative z-0">
            <!-- Glowing behind trophy -->
            <div class="absolute bottom-10 right-8 w-24 h-24 bg-white rounded-full blur-2xl opacity-70"></div>
            <span class="text-[120px] leading-none absolute bottom-0 right-0" style="filter: drop-shadow(0 0 15px rgba(255,255,255,0.9));">🏆</span>
          </div>
        </div>

        <!-- Player Name -->
        <div class="text-center font-black text-3xl uppercase tracking-wider px-4 mt-2 relative z-10" style="text-shadow: 0 0 12px rgba(255,255,255,0.9);">
          {{ username || 'UNKNOWN' }}
        </div>
        
        <!-- Divider -->
        <div class="w-4/5 h-[2px] bg-[#713f12] mx-auto my-3 opacity-80 shadow-[0_0_8px_rgba(255,255,255,1)]"></div>

        <!-- Stats Grid -->
        <div class="grid grid-cols-2 gap-x-6 px-10 pt-1 text-xl font-bold relative z-10">
          <!-- Col 1 -->
          <div class="flex flex-col gap-1">
            <div class="flex justify-between"><span class="font-black" style="text-shadow: 0 0 5px rgba(255,255,255,0.8);">{{ trophyCount }}</span> <span class="opacity-90">TRO</span></div>
            <div class="flex justify-between"><span class="font-black" style="text-shadow: 0 0 5px rgba(255,255,255,0.8);">{{ formattedGames }}</span> <span class="opacity-90">GMS</span></div>
            <div class="flex justify-between"><span class="font-black" style="text-shadow: 0 0 5px rgba(255,255,255,0.8);">99</span> <span class="opacity-90">TAC</span></div>
          </div>
          <!-- Col 2 -->
          <div class="flex flex-col gap-1">
            <div class="flex justify-between"><span class="font-black" style="text-shadow: 0 0 5px rgba(255,255,255,0.8);">{{ formattedPositions }}</span> <span class="opacity-90">POS</span></div>
            <div class="flex justify-between"><span class="font-black" style="text-shadow: 0 0 5px rgba(255,255,255,0.8);">{{ completedPercentage }}</span> <span class="opacity-90">PCT</span></div>
            <div class="flex justify-between"><span class="font-black" style="text-shadow: 0 0 5px rgba(255,255,255,0.8);">99</span> <span class="opacity-90">END</span></div>
          </div>
        </div>
        
        <!-- Bottom decorative line -->
        <div class="w-20 h-1 bg-[#713f12] mx-auto mt-auto mb-6 opacity-80 shadow-[0_0_8px_rgba(255,255,255,1)]"></div>
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
