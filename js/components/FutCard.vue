<template>
  <!-- Main Downloadable Area with Cyan Background and Dot Grid -->
  <div 
    class="inline-block relative p-12 bg-[#06b6d4] pb-16" 
    style="background-image: radial-gradient(#000 3px, transparent 3px); background-size: 24px 24px;" 
    ref="futCardElement" 
    id="fut-card-element"
  >
    
    <!-- Hot Pink Card Body -->
    <div class="w-[360px] bg-[#ec4899] border-8 border-black shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] p-6 flex flex-col relative z-10 rounded-none">
      
      <!-- Top Section -->
      <div class="flex justify-between items-start mb-6">
        
        <!-- Left Side: Avatar & Rating -->
        <div class="flex flex-col items-center">
          <!-- Avatar Circle -->
          <div class="w-24 h-24 bg-white border-4 border-black rounded-full overflow-hidden shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] mb-3 flex justify-center items-center">
             <img 
               v-if="displayAvatarUrl && !imageError" 
               :src="displayAvatarUrl" 
               class="w-full h-full object-cover" 
               crossorigin="anonymous" 
               @error="handleImageError"
             />
             <!-- Flat Pawn Fallback -->
             <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-14 h-14 fill-black">
               <path d="M12 2C10.34 2 9 3.34 9 5C9 6.2 9.7 7.23 10.74 7.74L8.14 11.23C7.45 10.46 6.3 10 5 10C3.34 10 2 11.34 2 13C2 14.28 2.8 15.35 3.96 15.77L2 22H22L20.04 15.77C21.2 15.35 22 14.28 22 13C22 11.34 20.66 10 19 10C17.7 10 16.55 10.46 15.86 11.23L13.26 7.74C14.3 7.23 15 6.2 15 5C15 3.34 13.66 2 12 2Z"/>
             </svg>
          </div>
          
          <!-- Rating -->
          <div class="text-center">
            <span class="text-5xl font-black text-black leading-none block tracking-tighter" style="font-family: 'Arial', sans-serif;">{{ overallRating || 99 }}</span>
            <span class="text-2xl font-black text-black uppercase block border-b-4 border-black pb-1 mb-1 tracking-widest">GM</span>
            <div class="flex justify-center gap-2 mt-2">
              <span class="text-2xl">🏁</span>
              <span class="text-2xl">👑</span>
            </div>
          </div>
        </div>

        <!-- Right Side: Flat 2D Trophy -->
        <div class="w-36 h-36 bg-[#fde047] border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex justify-center items-center mt-2 rounded-none relative">
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-24 h-24 fill-[#ec4899] stroke-black" stroke-width="1.5">
             <path d="M19,2H5C3.89,2 3,2.9 3,4V6C3,8.21 4.79,10 7,10C7,11.93 8.35,13.59 10.16,14.12C10.6,15.68 12.08,16.88 13.84,16.88C15.6,16.88 17.08,15.68 17.52,14.12C19.33,13.59 20.68,11.93 20.68,10V6C20.68,2.9 19.79,2 18.68,2H19ZM7,8C5.9,8 5,7.1 5,6V4H7V8ZM19,6C19,7.1 18.1,8 17,8V4H19V6ZM17,19H7V21H17V19Z"/>
           </svg>
           <div class="absolute bottom-2 w-16 h-2 bg-black opacity-20"></div>
        </div>
      </div>

      <!-- Username -->
      <div class="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-3 mb-6 text-center overflow-hidden flex items-center justify-center h-16">
        <h2 class="leading-none font-black text-black uppercase whitespace-nowrap tracking-tight" :style="{ fontSize: dynamicFontSize, fontFamily: 'Arial, sans-serif' }">{{ cleanUsername || 'UNKNOWN' }}</h2>
      </div>
      
      <!-- Stats Grid -->
      <div class="grid grid-cols-2 gap-x-4 gap-y-3 bg-[#fde047] border-4 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] font-mono font-black text-xl text-black">
        <div class="flex justify-between border-b-4 border-black pb-1"><span>{{ trophyCount }}</span> <span>TRO</span></div>
        <div class="flex justify-between border-b-4 border-black pb-1"><span>{{ formattedPositions }}</span> <span>POS</span></div>
        <div class="flex justify-between border-b-4 border-black pb-1"><span>{{ formattedGames }}</span> <span>GMS</span></div>
        <div class="flex justify-between border-b-4 border-black pb-1"><span>{{ completedPercentage }}</span> <span>PCT</span></div>
        <div class="flex justify-between"><span>99</span> <span>TAC</span></div>
        <div class="flex justify-between"><span>99</span> <span>END</span></div>
      </div>
    </div>

    <!-- Badge below card -->
    <div class="absolute bottom-4 left-1/2 -translate-x-1/2 bg-[#fde047] border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] py-3 px-8 text-center z-20 whitespace-nowrap rounded-none">
      <span class="font-black text-black text-2xl uppercase tracking-widest" style="font-family: 'Arial', sans-serif;">YOUR ROSEN SCORE CARD</span>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'FutCard',
  props: {
    username: { type: String, required: true },
    avatarUrl: { type: String, default: '' },
    overallRating: { type: Number, required: true },
    trophyCount: { type: Number, required: true },
    completedPercentage: { type: Number, required: true },
    totalGames: { type: Number, required: true },
    totalPositions: { type: Number, required: true }
  },
  data() {
    return {
      imageError: false
    }
  },
  computed: {
    cleanUsername() {
      if (!this.username) return 'UNKNOWN'
      return this.username.replace(/ \(.+\)/g, '')
    },
    dynamicFontSize() {
      const len = this.cleanUsername.length
      if (len <= 10) return '38px'
      if (len <= 12) return '32px'
      if (len <= 14) return '28px'
      if (len <= 16) return '24px'
      if (len <= 18) return '21px'
      return '18px'
    },
    displayAvatarUrl() {
      return this.avatarUrl || ''
    },
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
  },
  methods: {
    handleImageError() {
      this.imageError = true
    }
  }
}
</script>
