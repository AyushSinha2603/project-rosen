<template>
  <div 
    class="relative w-[400px] max-w-full mx-auto aspect-[540/820] select-none transition-all" 
    :style="`color: ${cardTheme.color}; container-type: inline-size; filter: drop-shadow(0 7cqw 10cqw rgba(0,0,0,0.5)) drop-shadow(0 0 6cqw ${cardTheme.outerGlow})`"
    ref="futCardElement" 
    id="fut-card-element"
  >
    <!-- border layer (shiny metallic border) only for standard cards -->
    <div
      v-if="cardTheme.borderGradient"
      class="absolute inset-0 scale-x-[1.018] scale-y-[1.012]"
      :style="`background: ${cardTheme.borderGradient}; -webkit-mask-image: url('${cardTheme.shapeMask || cardTheme.bg}'); mask-image: url('${cardTheme.shapeMask || cardTheme.bg}'); -webkit-mask-size: 100% 100%; mask-size: 100% 100%; z-index: -1;`"
    ></div>

    <!-- tier background art wrapper for reshaping -->
    <div
      class="absolute inset-0"
      :style="cardTheme.shapeMask ? `-webkit-mask-image: url('${cardTheme.shapeMask}'); mask-image: url('${cardTheme.shapeMask}'); -webkit-mask-size: 100% 100%; mask-size: 100% 100%;` : ''"
    >
      <img
        :src="cardTheme.bg"
        alt=""
        aria-hidden
        :class="['absolute inset-0 w-full h-full object-fill', cardTheme.shapeMask ? 'scale-[1.15] origin-center' : '']"
      />
    </div>
    
    <div
      class="absolute inset-0"
      :style="`-webkit-mask-image: url('${cardTheme.shapeMask || cardTheme.bg}'); mask-image: url('${cardTheme.shapeMask || cardTheme.bg}'); -webkit-mask-size: 100% 100%; mask-size: 100% 100%;`"
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
            :style="`-webkit-mask-image: linear-gradient(180deg, transparent 1%, #000 22%); mask-image: linear-gradient(180deg, transparent 1%, #000 22%); filter: drop-shadow(0 3cqw 6cqw rgba(0,0,0,0.5)) drop-shadow(0 0 5cqw ${cardTheme.innerGlow});`"
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
    <div class="absolute left-[19.44%] top-[31.1%] w-[10.19%] h-[0.3cqw] bg-current opacity-50"></div>
    <div class="absolute left-[19.44%] top-[40.85%] w-[10.19%] h-[0.3cqw] bg-current opacity-50"></div>
    <div class="absolute left-[16.67%] top-[64.02%] w-[66.67%] h-[0.3cqw] bg-current opacity-50"></div>
    <div class="absolute left-[44.44%] top-[89.63%] w-[11.11%] h-[0.3cqw] bg-current opacity-50"></div>
    <div class="absolute left-[50%] top-[66.46%] w-[0.3cqw] h-[20.12%] bg-current opacity-50"></div>

    <!-- overall -->
    <div class="absolute left-[12%] top-[10%] w-[26%] text-center font-condensed text-[22cqw] font-medium leading-none">
      {{ overallRating || 99 }}
    </div>

    <!-- position -->
    <div class="absolute left-[12%] top-[24%] w-[26%] text-center font-condensed text-[9cqw] font-medium tracking-[.02em]">
      {{ position }}
    </div>

    <!-- country flag -->
    <div class="absolute left-[12%] top-[33%] w-[26%] flex justify-center">
      <img
        v-if="countryCode && !flagError"
        :src="`/badges/flags/${countryCode}.png`"
        class="w-[60%] h-auto object-contain"
        @error="flagError = true"
      />
    </div>

    <!-- name -->
    <div 
      class="absolute left-0 top-[53.6%] w-full text-center font-condensed font-bold whitespace-nowrap uppercase px-4"
      :style="{ fontSize: dynamicFontSize }"
    >
      {{ cleanUsername }}
    </div>

    <!-- stats grid -->
    <div class="absolute left-[15%] top-[64.5%] w-[33%] flex items-end justify-center gap-1.5">
      <span class="font-condensed text-[10cqw] font-bold leading-none">{{ statPac }}</span>
      <span class="font-condensed text-[8.5cqw] font-medium tracking-[.02em] leading-none">PAC</span>
    </div>
    
    <div class="absolute left-[52%] top-[64.5%] w-[33%] flex items-end justify-center gap-1.5">
      <span class="font-condensed text-[10cqw] font-bold leading-none">{{ statDri }}</span>
      <span class="font-condensed text-[8.5cqw] font-medium tracking-[.02em] leading-none">DRI</span>
    </div>

    <div class="absolute left-[15%] top-[72%] w-[33%] flex items-end justify-center gap-1.5">
      <span class="font-condensed text-[10cqw] font-bold leading-none">{{ statSho }}</span>
      <span class="font-condensed text-[8.5cqw] font-medium tracking-[.02em] leading-none">SHO</span>
    </div>

    <div class="absolute left-[52%] top-[72%] w-[33%] flex items-end justify-center gap-1.5">
      <span class="font-condensed text-[10cqw] font-bold leading-none">{{ statDef }}</span>
      <span class="font-condensed text-[8.5cqw] font-medium tracking-[.02em] leading-none">DEF</span>
    </div>

    <div class="absolute left-[15%] top-[79.5%] w-[33%] flex items-end justify-center gap-1.5">
      <span class="font-condensed text-[10cqw] font-bold leading-none">{{ statPas }}</span>
      <span class="font-condensed text-[8.5cqw] font-medium tracking-[.02em] leading-none">PAS</span>
    </div>

    <div class="absolute left-[52%] top-[79.5%] w-[33%] flex items-end justify-center gap-1.5">
      <span class="font-condensed text-[10cqw] font-bold leading-none">{{ statPhy }}</span>
      <span class="font-condensed text-[8.5cqw] font-medium tracking-[.02em] leading-none">PHY</span>
    </div>
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
    position: { type: String, default: 'CAM' },
    trophyCount: { type: Number, required: true },
    completedPercentage: { type: Number, required: true },
    totalGames: { type: Number, required: true },
    totalPositions: { type: Number, required: true }
  },
  data() {
    return {
      imageError: false,
      flagError: false
    }
  },
  computed: {
    cardTheme() {
      const maxStat = Math.max(this.statPac, this.statSho, this.statPas, this.statDri, this.statDef, this.statPhy);
      // Require at least 75 OVR and a massive 20+ point stat spike for In-Form
      const isSpike = (maxStat - this.overallRating) >= 20 && this.overallRating >= 75;

      if (this.overallRating >= 90) {
        return { // Icon
          bg: '/cards/legend.png',
          color: '#3e3012', 
          outerGlow: 'rgba(243, 214, 136, 0.6)', 
          innerGlow: 'rgba(255, 255, 255, 0.6)'
        }
      } else if (this.overallRating >= 85) {
        return { // TOTY
          bg: '/cards/toty.png',
          color: '#e4cd91', 
          outerGlow: 'rgba(59, 122, 255, 0.6)', 
          innerGlow: 'rgba(59, 122, 255, 0.5)'
        }
      } else if (isSpike) {
        return { // In-Form
          bg: '/cards/founder-red.png',
          color: '#ffffff', 
          outerGlow: 'rgba(224, 62, 82, 0.6)', 
          innerGlow: 'rgba(224, 62, 82, 0.5)'
        }
      } else if (this.overallRating >= 75) {
        return { // Gold
          bg: '/cards/gold.png',
          shapeMask: '/cards/legend.png',
          color: '#3e3012', 
          outerGlow: 'rgba(255, 215, 0, 0.4)', 
          innerGlow: 'rgba(255, 215, 0, 0.6)',
          borderGradient: 'linear-gradient(135deg, #f9df9f, #d4af37, #f9df9f, #aa7c11, #f9df9f)'
        }
      } else if (this.overallRating >= 65) {
        return { // Silver
          bg: '/cards/silver.png',
          shapeMask: '/cards/legend.png',
          color: '#1a1a1a', 
          outerGlow: 'rgba(255, 255, 255, 0.3)', 
          innerGlow: 'rgba(255, 255, 255, 0.5)',
          borderGradient: 'linear-gradient(135deg, #ffffff, #c0c0c0, #ffffff, #808080, #ffffff)'
        }
      } else {
        return { // Bronze
          bg: '/cards/bronze.png',
          shapeMask: '/cards/legend.png',
          color: '#2a1a10', 
          outerGlow: 'rgba(205, 127, 50, 0.4)', 
          innerGlow: 'rgba(205, 127, 50, 0.5)',
          borderGradient: 'linear-gradient(135deg, #ffb370, #cd7f32, #ffb370, #8b5a2b, #ffb370)'
        }
      }
    },
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
    statPac() {
      return Math.min(99, Math.round(40 + Math.min(45, Math.pow(this.totalGames, 0.4) * 1.5) + (this.completedPercentage * 0.14))) || 1
    },
    statSho() {
      return Math.min(99, Math.round(35 + Math.min(45, Math.sqrt(this.trophyCount) * 2.5) + (this.completedPercentage * 0.2))) || 1
    },
    statPas() {
      return Math.min(99, Math.round(30 + (this.completedPercentage * 0.6) + Math.min(10, Math.sqrt(this.totalGames) * 0.1))) || 1
    },
    statDri() {
      const avgMoves = this.totalGames > 0 ? this.totalPositions / this.totalGames : 0
      return Math.min(99, Math.round(35 + Math.min(45, avgMoves * 1.1) + (this.completedPercentage * 0.19))) || 1
    },
    statDef() {
      return Math.min(99, Math.round(35 + Math.min(45, Math.pow(this.totalPositions, 0.3) * 0.6) + (this.completedPercentage * 0.2))) || 1
    },
    statPhy() {
      return Math.min(99, Math.round(35 + Math.min(40, Math.sqrt(this.totalGames) * 0.5) + (this.completedPercentage * 0.25))) || 1
    }
  },
  methods: {
    handleImageError() {
      this.imageError = true
    }
  }
}
</script>
