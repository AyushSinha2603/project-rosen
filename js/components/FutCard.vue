<template>
  <div 
    class="relative w-[400px] max-w-full mx-auto aspect-[540/820] select-none text-[#1a1a1a]" 
    style="container-type: inline-size; filter: drop-shadow(0 7cqw 10cqw rgba(0,0,0,0.5))"
    ref="futCardElement" 
    id="fut-card-element"
  >
    <!-- tier background art -->
    <img
      src="/cards/silver.png"
      alt=""
      aria-hidden
      class="absolute inset-0 w-full h-full object-fill"
    />
    
    <div
      class="absolute inset-0"
      style="-webkit-mask-image: url('/cards/silver.png'); mask-image: url('/cards/silver.png'); -webkit-mask-size: 100% 100%; mask-size: 100% 100%;"
    >
      <div
        class="absolute left-[27cqw] top-[13cqw] w-[68cqw] h-[70cqw]"
        style="-webkit-mask-image: radial-gradient(ellipse 66% 88% at 52% 40%, #000 56%, transparent 80%); mask-image: radial-gradient(ellipse 66% 88% at 52% 40%, #000 56%, transparent 80%);"
      >
        <div
          class="w-full h-full"
          style="-webkit-mask-image: linear-gradient(220deg, #000 70%, transparent 100%); mask-image: linear-gradient(220deg, #000 70%, transparent 100%);"
        >
          <div
            class="relative w-full h-full"
            style="-webkit-mask-image: linear-gradient(180deg, transparent 1%, #000 22%); mask-image: linear-gradient(180deg, transparent 1%, #000 22%); filter: drop-shadow(0 3cqw 6cqw rgba(0,0,0,.5));"
          >
             <img 
               v-if="displayAvatarUrl && !imageError" 
               :src="displayAvatarUrl" 
               :alt="username"
               class="w-full h-full object-cover object-[center_20%]" 
               crossorigin="anonymous" 
               @error="handleImageError"
             />
             <div v-else class="w-full h-full bg-black/10 flex items-center justify-center">
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-1/2 h-1/2 fill-black/30">
                 <path d="M12 2C10.34 2 9 3.34 9 5C9 6.2 9.7 7.23 10.74 7.74L8.14 11.23C7.45 10.46 6.3 10 5 10C3.34 10 2 11.34 2 13C2 14.28 2.8 15.35 3.96 15.77L2 22H22L20.04 15.77C21.2 15.35 22 14.28 22 13C22 11.34 20.66 10 19 10C17.7 10 16.55 10.46 15.86 11.23L13.26 7.74C14.3 7.23 15 6.2 15 5C15 3.34 13.66 2 12 2Z"/>
               </svg>
             </div>
          </div>
        </div>
      </div>
    </div>

    <!-- separator lines -->
    <div class="absolute left-[19.44%] top-[31.1%] w-[10.19%] h-[0.3cqw] bg-[#1a1a1a] opacity-50"></div>
    <div class="absolute left-[19.44%] top-[40.85%] w-[10.19%] h-[0.3cqw] bg-[#1a1a1a] opacity-50"></div>
    <div class="absolute left-[16.67%] top-[64.02%] w-[66.67%] h-[0.3cqw] bg-[#1a1a1a] opacity-50"></div>
    <div class="absolute left-[44.44%] top-[89.63%] w-[11.11%] h-[0.3cqw] bg-[#1a1a1a] opacity-50"></div>
    <div class="absolute left-[50%] top-[66.46%] w-[0.3cqw] h-[20.12%] bg-[#1a1a1a] opacity-50"></div>

    <!-- overall -->
    <div class="absolute left-[16.3%] top-[9.76%] font-condensed text-[22.2cqw] font-medium leading-none">
      {{ overallRating || 99 }}
    </div>

    <!-- position -->
    <div class="absolute left-[25%] top-[23.78%] -translate-x-1/2 font-condensed text-[9.3cqw] font-medium tracking-[.02em]">
      CAM
    </div>

    <!-- country flag -->
    <img
      v-if="countryCode"
      :src="`/badges/flags/${countryCode}.png`"
      class="absolute left-[17.59%] top-[33.17%] w-[14.81%] h-[5.73%] object-contain"
      @error="$event.target.style.display = 'none'"
    />

    <!-- language logo -->
    <img
      src="https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@main/icons/javascript.svg"
      class="absolute left-[19.06%] top-[42.25%] w-[11.875%] h-[7.5%] object-contain"
    />

    <!-- name -->
    <div 
      class="absolute left-[50%] top-[53.66%] -translate-x-1/2 font-condensed font-bold whitespace-nowrap uppercase"
      :style="{ fontSize: dynamicFontSize }"
    >
      {{ cleanUsername }}
    </div>

    <!-- stats grid -->
    <span class="absolute left-[21.3%] top-[64.63%] font-condensed text-[10.2cqw] font-bold">{{ statPac }}</span>
    <span class="absolute left-[32.41%] top-[65.24%] font-condensed text-[9.3cqw] font-medium tracking-[.02em]">PAC</span>
    
    <span class="absolute left-[56.48%] top-[64.63%] font-condensed text-[10.2cqw] font-bold">{{ statDri }}</span>
    <span class="absolute left-[67.59%] top-[65.24%] font-condensed text-[9.3cqw] font-medium tracking-[.02em]">DRI</span>

    <span class="absolute left-[21.3%] top-[72.2%] font-condensed text-[10.2cqw] font-bold">{{ statSho }}</span>
    <span class="absolute left-[32.41%] top-[72.8%] font-condensed text-[9.3cqw] font-medium tracking-[.02em]">SHO</span>

    <span class="absolute left-[56.48%] top-[72.2%] font-condensed text-[10.2cqw] font-bold">{{ statDef }}</span>
    <span class="absolute left-[67.59%] top-[72.8%] font-condensed text-[9.3cqw] font-medium tracking-[.02em]">DEF</span>

    <span class="absolute left-[21.3%] top-[79.76%] font-condensed text-[10.2cqw] font-bold">{{ statPas }}</span>
    <span class="absolute left-[32.41%] top-[80.37%] font-condensed text-[9.3cqw] font-medium tracking-[.02em]">PAS</span>

    <span class="absolute left-[56.48%] top-[79.76%] font-condensed text-[10.2cqw] font-bold">{{ statPhy }}</span>
    <span class="absolute left-[67.59%] top-[80.37%] font-condensed text-[9.3cqw] font-medium tracking-[.02em]">PHY</span>
  </div>
</template>

<script lang="ts">
export default {
  name: 'FutCard',
  props: {
    username: { type: String, required: true },
    avatarUrl: { type: String, default: '' },
    countryCode: { type: String, default: '' },
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
      if (len <= 10) return '13cqw'
      if (len <= 12) return '11cqw'
      if (len <= 14) return '9cqw'
      if (len <= 16) return '8cqw'
      if (len <= 18) return '7cqw'
      return '6cqw'
    },
    displayAvatarUrl() {
      return this.avatarUrl || ''
    },
    // Normalize stats to be between 1 and 99
    statPac() {
      // Pace: Based on volume of games played (5000 games = 99 Pace)
      return Math.min(99, Math.max(1, Math.round((this.totalGames / 5000) * 99))) || 1
    },
    statSho() {
      // Shooting: Based on tactical trophies earned (20 trophies = 99 Shooting)
      return Math.min(99, Math.max(1, Math.round((this.trophyCount / 20) * 99))) || 1
    },
    statPas() {
      // Passing: Based on accomplishment completion percentage
      return Math.min(99, Math.max(1, Math.round(this.completedPercentage))) || 1
    },
    statDri() {
      // Dribbling: Based on average moves per game (longer/more complex games = higher Dribbling)
      const avgMoves = this.totalGames > 0 ? this.totalPositions / this.totalGames : 0
      return Math.min(99, Math.max(1, Math.round((avgMoves / 40) * 99))) || 1
    },
    statDef() {
      // Defending: Based on total positions analyzed (250,000 positions = 99 Defending)
      return Math.min(99, Math.max(1, Math.round((this.totalPositions / 250000) * 99))) || 1
    },
    statPhy() {
      // Physical: Composite of total games and completion
      const score = (this.totalGames / 10000) * 50 + (this.completedPercentage / 100) * 50
      return Math.min(99, Math.max(1, Math.round(score))) || 1
    }
  },
  methods: {
    handleImageError() {
      this.imageError = true
    }
  }
}
</script>
