<template>
  <div class="relative min-h-screen">
    <!-- Background glowing orbs -->
    <div class="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div class="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] max-w-[800px] max-h-[800px] rounded-full bg-brand/20 blur-[120px] mix-blend-screen opacity-70"></div>
      <div class="absolute top-[30%] -right-[20%] w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] rounded-full bg-brand/15 blur-[120px] mix-blend-screen opacity-60"></div>
      <div class="absolute -bottom-[20%] left-[10%] w-[80vw] h-[80vw] max-w-[900px] max-h-[900px] rounded-full bg-brand/10 blur-[150px] mix-blend-screen opacity-50"></div>
    </div>

    <!-- Top Right Nav -->
    <div class="absolute top-3 right-3 md:top-4 md:right-6 z-50 flex items-center gap-4 md:gap-6">
      <button @click="showHowItWorks = true" class="text-ink-soft hover:text-ink border-b border-ink-soft/40 hover:border-ink/60 transition-colors font-sans text-xs md:text-sm font-medium flex items-center gap-1 pb-0.5 cursor-pointer bg-transparent">
        how it works <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
      </button>
      
      <a href="https://github.com/AyushSinha2603/project-rosen" target="_blank" class="group flex items-center gap-3 bg-surface-2 hover:bg-surface border border-line p-1.5 md:pr-2.5 rounded-full transition-all duration-300 shadow-sm scale-90 md:scale-100 origin-right">
        <div class="flex items-center gap-2 pl-3 hidden md:flex">
          <span class="text-ink-soft font-sans text-[13px] mr-1 hidden lg:inline-block">Show your support by</span>
          <svg class="text-ink-dim" viewBox="0 0 16 16" width="18" height="18" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
          <span class="font-bold tracking-wide text-sm font-sans text-ink flex items-center">
            <span class="bg-brand text-black px-1.5 py-0.5 mr-1 leading-none">Star on</span> GitHub
          </span>
        </div>
        <!-- Mobile icon fallback -->
        <div class="flex items-center gap-2 pl-2 md:hidden">
          <svg class="text-ink-dim" viewBox="0 0 16 16" width="16" height="16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
        </div>
        
        <div class="flex items-center gap-1.5 bg-bg group-hover:bg-bg-deep transition-colors border border-line px-3 py-1 rounded-full text-[13px] font-bold font-sans text-ink">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="#e3b341" stroke="#e3b341" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
          <span v-if="githubStars !== null">{{ githubStars > 999 ? (githubStars/1000).toFixed(1) + 'k' : githubStars }}</span>
          <span v-else class="text-ink-mute">...</span>
        </div>
      </a>
    </div>

    <div
      v-cloak
      class="container mx-auto my-8 w-11/12 relative z-10"
    :class="{
      'is-download-complete': isDownloadComplete,
    }"
  >
    <div class="text-center">
      <h1 class="text-6xl md:text-8xl mb-2 text-ink font-display tracking-widest uppercase inline-block text-shadow-sm">
        <a href="/" class="hover:text-brand transition-colors">Project rosen</a>
      </h1>
      
      <div class="mt-8 mb-4">
        <p id="about" class="md:text-2xl mt-4 text-ink-soft inline-block font-light">How many of these chess accomplishments have you completed?</p>
      </div>
    </div>

    <div
      class="my-12 bg-surface/80 backdrop-blur-md border border-line rounded-2xl mx-auto p-6 md:p-10 shadow-2xl text-ink font-light md:w-3/4"
      v-if="!isDownloading && !isDownloadComplete"
    >
      <form @submit.prevent="startDownload">
        <div class="flex flex-row mb-4">
          <div class="basis-1/4 text-2xl md:text-5xl text-center font-bold italic">
            1
            <ArrowIcon />
          </div>
          <div class="basis-3/4">
            <div class="text-xl">
              Select which site:

              <div class="text-ink mt-2 font-black text-2xl flex gap-4 flex-wrap">
                <label class="cursor-pointer bg-surface-2 px-6 py-3 rounded-xl border border-line hover:border-brand hover:text-brand transition-colors flex items-center gap-2">
                  <input type="radio" name="site" value="lichess" v-model="inputs.type" class="accent-brand" />
                  Lichess
                </label>
                <label class="cursor-pointer bg-surface-2 px-6 py-3 rounded-xl border border-line hover:border-brand hover:text-brand transition-colors ml-0 md:ml-4 flex items-center gap-2">
                  <input type="radio" name="site" value="chesscom" v-model="inputs.type" class="accent-brand" />
                  Chess.com
                </label>
                <label class="cursor-pointer bg-surface-2 px-6 py-3 rounded-xl border border-line hover:border-brand hover:text-brand transition-colors ml-0 md:ml-4 flex items-center gap-2">
                  <input type="radio" name="site" value="both" v-model="inputs.type" class="accent-brand" />
                  Both
                </label>
              </div>
            </div>
            <div class="mt-2">
              {{ inputs.type === 'both' ? 'Enter Lichess username:' : 'Enter username:' }}

              <input
                type="text"
                class="block w-full px-6 py-4 text-xl text-ink bg-surface-2 border border-line focus:border-brand focus:ring-1 focus:ring-brand focus:outline-none placeholder-ink-mute mt-4 rounded-xl shadow-inner transition-all"
                :placeholder="inputs.type === 'both' ? 'Lichess username here' : 'Username here'"
                spellcheck="false"
                data-lpignore="true"
                v-model="inputs.value"
              />
              <div class="mt-8" v-if="inputs.type === 'both'">
                Enter Chess.com username:
                <input
                  type="text"
                  class="block w-full px-6 py-4 text-xl text-ink bg-surface-2 border border-line focus:border-brand focus:ring-1 focus:ring-brand focus:outline-none placeholder-ink-mute mt-4 rounded-xl shadow-inner transition-all"
                  placeholder="Chess.com Username here"
                  spellcheck="false"
                  data-lpignore="true"
                  v-model="inputs.valueChesscom"
                />
              </div>
              <div class="mt-8">
                Choose Nationality (Optional):
                <select v-model="inputs.countryCode" class="block w-full px-6 py-4 text-xl text-ink bg-surface-2 border border-line focus:border-brand focus:ring-1 focus:ring-brand focus:outline-none mt-4 rounded-xl shadow-inner transition-all">
                  <option value="">None</option>
                  <option value="ar">Argentina</option>
                  <option value="br">Brazil</option>
                  <option value="ca">Canada</option>
                  <option value="de">Germany</option>
                  <option value="es">Spain</option>
                  <option value="fr">France</option>
                  <option value="gb">United Kingdom</option>
                  <option value="in">India</option>
                  <option value="it">Italy</option>
                  <option value="jp">Japan</option>
                  <option value="mx">Mexico</option>
                  <option value="nl">Netherlands</option>
                  <option value="pt">Portugal</option>
                  <option value="us">United States</option>
                </select>
              </div>
              <div class="text-lg mt-6 bg-surface-2 border border-line rounded-xl p-4 inline-block text-ink-soft">
                Or
                <span class="text-brand hover:text-brand-hi cursor-pointer transition-colors font-medium" @click.prevent="formFill('lichess', 'EricRosen')">
                  click here to see EricRosen's on Lichess
                </span>
                or
                <span class="text-brand hover:text-brand-hi cursor-pointer transition-colors font-medium" @click.prevent="formFill('chesscom', 'IMRosen')"> his Chess.com </span>
              </div>
            </div>
          </div>
        </div>

        <div class="flex flex-row mb-4">
          <div class="basis-1/4 text-2xl md:text-5xl text-center font-bold italic">
            2
            <ArrowIcon />
          </div>
          <div class="basis-3/4">
            <lichess-login v-on:set-lichess-oauth-token="setLichessOauthToken"></lichess-login>
          </div>
        </div>

        <div class="flex flex-row">
          <div class="basis-1/4 text-2xl md:text-5xl text-center font-bold italic">
            3
            <ArrowIcon />
          </div>
          <div class="basis-3/4">
            <div class="text-xl mt-1 mb-8 bg-surface-2 border border-line rounded-xl p-4 inline-block">
              Check games since
              <select
                v-model.number="inputs.filters.sinceHoursAgo"
                class="bg-surface border border-line text-brand py-2 px-4 ml-2 cursor-pointer rounded-lg focus:outline-none hover:border-brand-hi transition-colors font-bold"
              >
                <option :value="6">6 hours ago</option>
                <option :value="24">24 hours ago</option>
                <option :value="24 * 7">last week</option>
                <option :value="24 * 31">last month</option>
                <option :value="24 * 31 * 3">last 3 months</option>
                <option :value="24 * 31 * 6">last 6 months</option>
                <option :value="24 * 365">last 12 months</option>
                <option :value="0">forever</option>
              </select>
            </div>

            <button
              type="submit"
              class="px-8 py-6 bg-brand text-bg font-display tracking-wider text-2xl uppercase rounded-xl hover:bg-brand-hi hover:shadow-[0_0_20px_rgba(57,211,83,0.4)] active:scale-95 transition-all w-full md:w-auto flex items-center justify-center gap-4"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="4"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              Click here to analyze
            </button>

            <div v-if="errors.form" class="mt-2 font-bold text-red-500">
              <svg xmlns="http://www.w3.org/2000/svg" class="inline h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
              {{ errors.form }}
            </div>
          </div>
        </div>
      </form>

      <!-- <RecentUpdates @form-fill="formFill" /> -->
    </div>

    <download-progress
      v-if="isDownloading && !isDownloadComplete"
      :title="player.username"
      :positions="counts.totalMoves"
      :downloaded="counts.downloaded"
      :total="counts.totalGames"
      :hideProgressBar="inputs.filters.sinceHoursAgo"
      @cancel-download="cancelDownload"
    ></download-progress>

    <div v-if="errors.api.message" class="text-center bg-red-900/50 border border-red-500 text-red-200 text-xl rounded-2xl p-8 mt-12">
      There was an error from the {{ inputs.type === 'lichess' ? 'Lichess' : 'Chess.com' }} API:
      <strong class="bg-black text-white px-2 py-1 ml-2">{{ errors.api }}</strong>

      <p class="mt-4 text-red-100 bg-red-950 border border-red-800 rounded-xl p-4 inline-block">Try only running 1 Rosen Score report at a time. You may have to wait before trying again.</p>
    </div>

    <div v-if="player.username" class="mt-16 bg-surface-2 border border-line rounded-2xl p-10 text-center shadow-xl mb-12 text-ink">
      <h2 class="text-2xl">
        <username-formatter :title="player.title" :username="player.username"></username-formatter>
        has
        <strong class="font-bold">{{ trophyCount.toLocaleString() }}</strong>
        Rosen
        <template v-if="trophyCount === 1"> Trophy </template>
        <template v-else> Trophies </template>
      </h2>

      <div class="mb-1">
        on
        <strong>{{ inputs.type === 'both' ? 'both platforms' : inputs.type === 'lichess' ? 'Lichess' : 'Chess.com' }}</strong>
        and has completed
        <strong> {{ totalAccomplishmentsCompletedPercentage }}%</strong>
        of the goals ({{ totalAccomplishmentsCompleted }}
        out of
        {{ trophyTypeCount }})
      </div>

      <div class="mb-1" v-if="sinceDateFormatted">since {{ sinceDateFormatted }}</div>

      <trophy-collection :count="trophyCount" size="large" class="mt-8 mb-8"></trophy-collection>

      <div class="text-xl mt-8 bg-surface border border-line rounded-xl p-4 inline-block text-ink-soft">
        <strong>{{ counts.totalMoves.toLocaleString() }}</strong>
        positions and
        <strong>{{ counts.downloaded.toLocaleString() }}</strong>
        games analyzed
      </div>
    </div>

    <div class="md:flex md:flex-row md:space-x-4">
      <div class="basis-1/2">
        <h2 class="heading">Make Eric Proud</h2>
        <div class="grid grid-cols-2 gap-2">
          <accomplishment-score
            @register-new-trophy="onRegisterNewTrophy"
            title="Oh No My Queen"
            desc="Sacrifice your Queen for mate"
            :trophies="playerTrophiesByType['ohNoMyQueen'] || {}"
            gameLink="https://lichess.org/heNcmap1#39"
            youtubeLink="https://youtu.be/x24BFszZ5Zw?t=189"
          ></accomplishment-score>
          <accomplishment-score
            @register-new-trophy="onRegisterNewTrophy"
            title="Stalemate Tricks"
            desc="Stalemate from a losing position"
            :trophies="playerTrophiesByType['stalemateTricks'] || {}"
            gameLink="https://lichess.org/LahQPSJt#134"
            youtubeLink="https://www.youtube.com/watch?v=aNDNwB2nruA"
          ></accomplishment-score>
          <accomplishment-score
            @register-new-trophy="onRegisterNewTrophy"
            title="Rosen Trap"
            desc="King goes to the corner instead of capturing the queen"
            :trophies="playerTrophiesByType['rosenTrap'] || {}"
            gameLink="https://lichess.org/fBcFhVs4#90"
            youtubeLink="https://youtu.be/ixAw0ED-Sfs"
          ></accomplishment-score>
          <accomplishment-score
            @register-new-trophy="onRegisterNewTrophy"
            title="Castle Fork"
            desc="Castle with check and then your king captures a piece"
            :trophies="playerTrophiesByType['castleFork'] || {}"
            gameLink="https://lichess.org/xEjSVeYp#41"
            youtubeLink="https://www.youtube.com/watch?v=_nvoEbgzsb0"
          ></accomplishment-score>
        </div>

        <h2 class="heading">Pawn Structures</h2>
        <div class="grid grid-cols-2 gap-2">
          <accomplishment-score
            @register-new-trophy="onRegisterNewTrophy"
            title="Connect 5"
            desc="Connect 5 of your pawns diagonally"
            :trophies="playerTrophiesByType['connectDiagonally:5'] || {}"
            gameLink="https://lichess.org/FL2vDAZL#37"
          ></accomplishment-score>
          <accomplishment-score
            @register-new-trophy="onRegisterNewTrophy"
            title="Pawn Diamond"
            desc="Does your pawn diamond last forever?"
            :trophies="playerTrophiesByType['pawnDiamond'] || {}"
            gameLink="https://lichess.org/d43FgnVj/black#32"
            youtubeLink="https://youtu.be/J3TSlTZpBfc?t=456"
          ></accomplishment-score>
          <accomplishment-score
            @register-new-trophy="onRegisterNewTrophy"
            title="Connect 6"
            desc="Connect 6 of your pawns diagonally"
            :trophies="playerTrophiesByType['connectDiagonally:6'] || {}"
            gameLink="https://lichess.org/CXvrZTzL#73"
          ></accomplishment-score>
          <accomplishment-score
            @register-new-trophy="onRegisterNewTrophy"
            title="Double Pawn Diamond"
            :trophies="playerTrophiesByType['doublePawnDiamond'] || {}"
            gameLink="https://lichess.org/V0NGitnD/black#66"
          ></accomplishment-score>
          <accomplishment-score
            @register-new-trophy="onRegisterNewTrophy"
            title="Pawn X"
            desc="X-formation with pawns"
            :trophies="playerTrophiesByType['pawnX'] || {}"
            gameLink="https://lichess.org/2gQ8HOw1#65"
          ></accomplishment-score>
          <accomplishment-score
            @register-new-trophy="onRegisterNewTrophy"
            title="Solid Pawn Diamond"
            desc="A 5 carat pawn diamond"
            :trophies="playerTrophiesByType['pawnDiamondSolid'] || {}"
            gameLink="https://lichess.org/Ak0Bhmx8/black#46"
          ></accomplishment-score>
          <accomplishment-score
            @register-new-trophy="onRegisterNewTrophy"
            title="Pawn Cube"
            desc="Is your pawn cube indestructible?"
            :trophies="playerTrophiesByType['pawnCube'] || {}"
            gameLink="https://lichess.org/lhkF3hJB/black#22"
            youtubeLink="https://www.youtube.com/watch?v=Q7fQQB1bgxQ"
          ></accomplishment-score>
          <accomplishment-score
            @register-new-trophy="onRegisterNewTrophy"
            title="Center Pawn Cube"
            desc="Pawn cube in the exact center of the board"
            :trophies="playerTrophiesByType['pawnCubeCenter'] || {}"
            gameLink="https://lichess.org/EXwOWSu5/black#48"
            youtubeLink="https://youtu.be/x8t-MlIWE3w?t=573"
          ></accomplishment-score>
          <accomplishment-score
            @register-new-trophy="onRegisterNewTrophy"
            title="Quadrupled Pawns"
            desc="4 pawns on the same file"
            :trophies="playerTrophiesByType['quadrupledPawns'] || {}"
            gameLink="https://lichess.org/aqADXuJT#85"
            youtubeLink="https://youtu.be/3jyX_8JX9xg?t=9581"
          ></accomplishment-score>
          <accomplishment-score
            @register-new-trophy="onRegisterNewTrophy"
            title="Connect 8 on 4th Rank"
            :trophies="playerTrophiesByType['connectEightOnRank:4'] || {}"
            gameLink="https://lichess.org/ZRXFIlZI#87"
            youtubeLink="https://youtu.be/AuIElYfxrEk?t=537"
          ></accomplishment-score>
          <accomplishment-score
            @register-new-trophy="onRegisterNewTrophy"
            title="Connect 8 on 5th Rank"
            :trophies="playerTrophiesByType['connectEightOnRank:5'] || {}"
            gameLink="https://lichess.org/ZRXFIlZI#109"
            youtubeLink="https://youtu.be/AuIElYfxrEk?t=594"
          ></accomplishment-score>
          <accomplishment-score
            @register-new-trophy="onRegisterNewTrophy"
            title="Connect 8 on 6th Rank"
            :trophies="playerTrophiesByType['connectEightOnRank:6'] || {}"
            gameLink="https://lichess.org/ZRXFIlZI#129"
            youtubeLink="https://youtu.be/AuIElYfxrEk?t=612"
          ></accomplishment-score>
          <accomplishment-score
            @register-new-trophy="onRegisterNewTrophy"
            title="Connect 8 on 7th Rank"
            :trophies="playerTrophiesByType['connectEightOnRank:7'] || {}"
            gameLink="https://lichess.org/ZRXFIlZI#149"
            youtubeLink="https://youtu.be/AuIElYfxrEk?t=687"
          ></accomplishment-score>
          <accomplishment-score
            @register-new-trophy="onRegisterNewTrophy"
            title="6 Pawns on the Same File"
            :trophies="playerTrophiesByType['sixPawnsInTheSameFile'] || {}"
            gameLink="https://lichess.org/JCD2jmRs#91"
          ></accomplishment-score>
        </div>

        <h2 class="heading">Piece Structures</h2>
        <div class="grid grid-cols-2 gap-2">
          <accomplishment-score
            @register-new-trophy="onRegisterNewTrophy"
            title="Knight Cube"
            :trophies="playerTrophiesByType['knightCube'] || {}"
            gameLink="https://lichess.org/KFZm4x4A/black#176"
            youtubeLink="https://www.youtube.com/watch?v=FqAako5iZN4"
          ></accomplishment-score>
          <accomplishment-score
            @register-new-trophy="onRegisterNewTrophy"
            title="Knight Rectangle"
            :trophies="playerTrophiesByType['knightRectangle'] || {}"
            gameLink="https://lichess.org/zqOlQeBs#207"
            youtubeLink="https://youtu.be/m_ZKrW0FVZM?t=5587"
          ></accomplishment-score>
        </div>

        <h2 class="heading">Alphabet Openings</h2>
        <div class="grid grid-cols-2 gap-2">
          <accomplishment-score
            @register-new-trophy="onRegisterNewTrophy"
            title="Egg"
            desc="Win after spelling &ldquo;egg&rdquo; with pawn moves in the opening"
            :trophies="playerTrophiesByType['alphabet:egg'] || {}"
            gameLink="https://lichess.org/1SHm5hr6/black"
            youtubeLink="https://www.youtube.com/watch?v=J6G3cP991Yc"
          ></accomplishment-score>
          <accomplishment-score
            @register-new-trophy="onRegisterNewTrophy"
            title="Double Egg (EggEgg)"
            desc="Win after spelling &ldquo;eggegg&rdquo; with pawn moves in the opening"
            :trophies="playerTrophiesByType['alphabet:eggegg'] || {}"
            gameLink="https://lichess.org/f2zcFx6P/black"
            youtubeLink="https://www.youtube.com/watch?v=J6G3cP991Yc"
          ></accomplishment-score>
          <accomplishment-score
            @register-new-trophy="onRegisterNewTrophy"
            title="Bad Egg"
            desc="Win after spelling &ldquo;badegg&rdquo; with pawn moves in the opening"
            :trophies="playerTrophiesByType['alphabet:badegg'] || {}"
            gameLink="https://lichess.org/mu679bhr/black"
            youtubeLink="https://youtu.be/jH3pPDnoqnU?t=1472"
          ></accomplishment-score>
          <accomplishment-score
            @register-new-trophy="onRegisterNewTrophy"
            title="BeachCaf&eacute;"
            desc="Win after spelling &ldquo;beachcafe&rdquo; with pawn moves in the opening"
            :trophies="playerTrophiesByType['alphabet:beachcafe'] || {}"
            gameLink="https://lichess.org/p5Ldb6wA"
            youtubeLink="https://www.youtube.com/watch?v=kGYOzdBsjcg"
          ></accomplishment-score>
          <accomplishment-score
            @register-new-trophy="onRegisterNewTrophy"
            title="Beef"
            desc="Win after spelling &ldquo;beef&rdquo; with pawn moves in the opening"
            :trophies="playerTrophiesByType['alphabet:beef'] || {}"
            gameLink="https://lichess.org/dUkHbvOR"
            youtubeLink="https://youtu.be/jH3pPDnoqnU?t=1583"
          ></accomplishment-score>
          <accomplishment-score
            @register-new-trophy="onRegisterNewTrophy"
            title="Cabbage"
            desc="Win after spelling &ldquo;cabbage&rdquo; with pawn moves in the opening"
            :trophies="playerTrophiesByType['alphabet:cabbage'] || {}"
            gameLink="https://lichess.org/LMpwnmLz"
            youtubeLink="https://www.youtube.com/watch?v=GDhtMqBk9M4"
          ></accomplishment-score>
          <accomplishment-score
            @register-new-trophy="onRegisterNewTrophy"
            title="Chad"
            desc="Win after spelling &ldquo;chad&rdquo; with pawn moves in the opening"
            :trophies="playerTrophiesByType['alphabet:chad'] || {}"
            gameLink="https://lichess.org/AaNGZKcj/black"
            youtubeLink="https://youtu.be/jH3pPDnoqnU?t=1305"
          ></accomplishment-score>
          <accomplishment-score
            @register-new-trophy="onRegisterNewTrophy"
            title="Headache"
            desc="Win after spelling &ldquo;headache&rdquo; with pawn moves in the opening"
            :trophies="playerTrophiesByType['alphabet:headache'] || {}"
            gameLink="https://lichess.org/SdbD4znE"
          ></accomplishment-score>
        </div>
      </div>
      <div class="basis-1/2">
        <h2 class="heading">Checkmates</h2>
        <div class="grid grid-cols-2 gap-2">
          <accomplishment-score
            @register-new-trophy="onRegisterNewTrophy"
            title="Checkmate with a Pawn"
            desc="A pawn delivers mate"
            :trophies="playerTrophiesByType['pawnCheckmate'] || {}"
            gameLink="https://lichess.org/52RAfF6v#99"
            youtubeLink="https://www.youtube.com/watch?v=mx9SCz4yDdE"
          ></accomplishment-score>
          <accomplishment-score
            @register-new-trophy="onRegisterNewTrophy"
            title="Checkmate with King"
            desc="Move your king with a discovery or by castling"
            :trophies="playerTrophiesByType['checkmateWithKing'] || {}"
            gameLink="https://lichess.org/JCR11y6i/black#148"
          ></accomplishment-score>
          <accomplishment-score
            @register-new-trophy="onRegisterNewTrophy"
            title="Smothered Mate"
            :trophies="playerTrophiesByType['smotheredMate'] || {}"
            gameLink="https://lichess.org/YOdmkxyk#59"
          ></accomplishment-score>
          <accomplishment-score
            @register-new-trophy="onRegisterNewTrophy"
            title="Smothered Pork Checkmate"
            desc="Smother + Pin + Fork"
            :trophies="playerTrophiesByType['smotheredPorkMate'] || {}"
            gameLink="https://lichess.org/39vtGApM#47"
            youtubeLink="https://www.youtube.com/watch?v=OAnC3gt_DqE"
          ></accomplishment-score>
          <accomplishment-score
            @register-new-trophy="onRegisterNewTrophy"
            title="En Passant Checkmate"
            desc="Checkmate by capturing en passant"
            :trophies="playerTrophiesByType['enPassantCheckmate'] || {}"
            gameLink="https://lichess.org/LY5WQjXL/black#72"
            youtubeLink="https://youtu.be/6zT83p6pMHg?t=390"
          ></accomplishment-score>
          <accomplishment-score
            @register-new-trophy="onRegisterNewTrophy"
            title="g5#"
            desc="Pawn checkmate on g5"
            :trophies="playerTrophiesByType['g5mate'] || {}"
            gameLink="https://lichess.org/UbOofpwX/black#74"
            youtubeLink="https://youtu.be/3l6BeM45ay8?t=898"
          ></accomplishment-score>
          <accomplishment-score
            @register-new-trophy="onRegisterNewTrophy"
            title="Double-Check Checkmate"
            desc="2 pieces are attacking the king and it's checkmate"
            :trophies="playerTrophiesByType['doubleCheckCheckmate'] || {}"
            gameLink="https://lichess.org/OtlF3AfG#27"
            youtubeLink="https://youtu.be/8ly5yA6tiEY?t=1082"
          ></accomplishment-score>
          <accomplishment-score
            @register-new-trophy="onRegisterNewTrophy"
            title="Block a Check with Checkmate"
            desc="Call an ambulance... but not for me"
            :trophies="playerTrophiesByType['blockCheckWithCheckmate'] || {}"
            gameLink="https://lichess.org/DrC87aK3#81"
            youtubeLink="https://youtu.be/kDGY77nkZHc?t=276"
          ></accomplishment-score>
          <accomplishment-score
            @register-new-trophy="onRegisterNewTrophy"
            title="O-O#"
            desc="Castle kingside with mate"
            :trophies="playerTrophiesByType['castleKingsideWithCheckmate'] || {}"
            gameLink="https://lichess.org/BJvbtS9B#49"
            youtubeLink="https://youtu.be/UxZc7ZF2uOY?t=207"
          ></accomplishment-score>
          <accomplishment-score
            @register-new-trophy="onRegisterNewTrophy"
            title="O-O-O#"
            desc="Castle queenside with mate"
            :trophies="playerTrophiesByType['castleQueensideWithCheckmate'] || {}"
            gameLink="https://lichess.org/7fmGBmKz/black#28"
          ></accomplishment-score>
          <accomplishment-score
            @register-new-trophy="onRegisterNewTrophy"
            title="Promote to Bishop Checkmate"
            :trophies="playerTrophiesByType['promoteToBishopCheckmate'] || {}"
            gameLink="https://lichess.org/9jkxqDKV#95"
            youtubeLink="https://youtu.be/vSPxtspv57Q?t=11974"
          ></accomplishment-score>
          <accomplishment-score
            @register-new-trophy="onRegisterNewTrophy"
            title="Promote to Knight Checkmate"
            :trophies="playerTrophiesByType['promoteToKnightCheckmate'] || {}"
            gameLink="https://lichess.org/USOysGtc#77"
            youtubeLink="https://youtu.be/RUJk3N6yF4g?t=3055"
          ></accomplishment-score>
          <accomplishment-score
            @register-new-trophy="onRegisterNewTrophy"
            title="Bishop + Knight Checkmate"
            :trophies="playerTrophiesByType['bishopAndKnightMate'] || {}"
            gameLink="https://lichess.org/PDfvROnh#205"
          ></accomplishment-score>
          <accomplishment-score
            @register-new-trophy="onRegisterNewTrophy"
            title="2-Bishop Checkmate"
            desc="Checkmate when you only have 2 bishops"
            :trophies="playerTrophiesByType['twoBishopMate'] || {}"
            gameLink="https://lichess.org/FuPe9gyS/black#128"
          ></accomplishment-score>
          <accomplishment-score
            @register-new-trophy="onRegisterNewTrophy"
            title="4-Knight Checkmate"
            :trophies="playerTrophiesByType['fourKnightMate'] || {}"
            gameLink="https://lichess.org/KFZm4x4A/black#180"
            youtubeLink="https://www.youtube.com/watch?v=FqAako5iZN4"
          ></accomplishment-score>
          <accomplishment-score
            @register-new-trophy="onRegisterNewTrophy"
            title="4-Knight Cube Checkmate"
            desc="You have 4 knights and checkmate from a cube"
            :trophies="playerTrophiesByType['fourKnightCubeMate'] || {}"
            gameLink="https://lichess.org/Rggdy0rY/black#152"
            youtubeLink="https://youtu.be/FqAako5iZN4?t=50"
          ></accomplishment-score>
          <accomplishment-score
            @register-new-trophy="onRegisterNewTrophy"
            title="6-Knight Rectangle Checkmate"
            :trophies="playerTrophiesByType['sixKnightRectangleMate'] || {}"
            gameLink="https://lichess.org/zqOlQeBs#207"
            youtubeLink="https://youtu.be/m_ZKrW0FVZM?t=5611"
          ></accomplishment-score>
          <accomplishment-score
            @register-new-trophy="onRegisterNewTrophy"
            title="Checkmate in 2 Moves"
            desc="Deliver checkmate in 2 moves"
            :trophies="playerTrophiesByType['checkmateAtMoveNumber:2'] || {}"
            gameLink="https://lichess.org/Fnb8yHd2/black"
            youtubeLink="https://www.youtube.com/watch?v=broDeIZMGto"
          ></accomplishment-score>
          <accomplishment-score
            @register-new-trophy="onRegisterNewTrophy"
            title="Checkmate in 3 Moves"
            desc="Deliver checkmate in 3 moves"
            :trophies="playerTrophiesByType['checkmateAtMoveNumber:3'] || {}"
            gameLink="https://lichess.org/BIklhPjL"
          ></accomplishment-score>
          <accomplishment-score
            @register-new-trophy="onRegisterNewTrophy"
            title="Checkmate in 4 Moves"
            desc="Deliver checkmate in 4 moves"
            :trophies="playerTrophiesByType['checkmateAtMoveNumber:4'] || {}"
            gameLink="https://lichess.org/u0SKphmW/black"
          ></accomplishment-score>
          <accomplishment-score
            @register-new-trophy="onRegisterNewTrophy"
            title="Mona Lisa Checkmate"
            desc="Checkmate the opponent with all your pieces on their original squares"
            :trophies="playerTrophiesByType['monaLisaCheckmate'] || {}"
            gameLink="https://www.chess.com/analysis/game/live/121711253019?tab=analysis&flip=false&move=0300"
            youtubeLink="https://youtu.be/XAlcDWQ6iTM?t=387"
          ></accomplishment-score>
        </div>

        <h2 class="heading">There's a Funny Line</h2>
        <div class="grid grid-cols-2 gap-2">
          <accomplishment-score
            @register-new-trophy="onRegisterNewTrophy"
            title="Castle after Move 40"
            desc="It's never too late to castle"
            :trophies="playerTrophiesByType['castleAfterMove40'] || {}"
            gameLink="https://lichess.org/o2rO7Vcj#95"
          ></accomplishment-score>
          <accomplishment-score
            @register-new-trophy="onRegisterNewTrophy"
            title="Promote a Pawn within 8 Moves"
            :trophies="playerTrophiesByType['promotePawnBeforeMoveNumber'] || {}"
            gameLink="https://lichess.org/jBC2lZJt#13"
            youtubeLink="https://youtu.be/F-UG_xAJmPo?t=47"
          ></accomplishment-score>
          <accomplishment-score
            @register-new-trophy="onRegisterNewTrophy"
            title="No Captures before Move 30"
            desc="All the pieces survive till move 30"
            :trophies="playerTrophiesByType['noCapturesBeforeMoveNumber'] || {}"
            gameLink="https://lichess.org/iZCR89Dt#65"
          ></accomplishment-score>
          <accomplishment-score
            @register-new-trophy="onRegisterNewTrophy"
            title="10+ Consecutive Captures on the Same Square"
            :trophies="playerTrophiesByType['consecutiveCapturesSameSquare'] || {}"
            gameLink="https://lichess.org/UIMR4eJL/black#56"
          ></accomplishment-score>
          <accomplishment-score
            @register-new-trophy="onRegisterNewTrophy"
            title="12 Pawn Move Opening Win"
            desc="Win a game after 12+ consecutive pawn moves in the opening"
            :trophies="playerTrophiesByType['pawnStormOpening'] || {}"
            gameLink="https://lichess.org/eplysicB"
            youtubeLink="https://www.youtube.com/watch?v=jr-r-0UU-WQ"
          ></accomplishment-score>
          <accomplishment-score
            @register-new-trophy="onRegisterNewTrophy"
            title="Royal Family Fork"
            desc="Knight forks K+Q+R and 1 other piece"
            :trophies="playerTrophiesByType['royalFamilyFork'] || {}"
            gameLink="https://lichess.org/VNAD1RDx#47"
          ></accomplishment-score>
        </div>

        <h2 class="heading">Speed</h2>
        <div class="grid grid-cols-2 gap-2">
          <accomplishment-score
            @register-new-trophy="onRegisterNewTrophy"
            title="Checkmate with 0.1 seconds"
            desc="Checkmate with &#8530; second left (non-increment games)"
            :trophies="playerTrophiesByType['checkmateWithTenthSecondLeft'] || {}"
            gameLink="https://lichess.org/g9MdhRYy/black#126"
          ></accomplishment-score>
          <accomplishment-score
            @register-new-trophy="onRegisterNewTrophy"
            title="Avoid-the-Flag Checkmate"
            desc="Make 20+ moves with 1 second left + checkmate (Lichess only)"
            :trophies="playerTrophiesByType['avoidTheFlagCheckmate'] || {}"
            gameLink="https://lichess.org/Wi5bzNTB#110"
            youtubeLink="https://www.youtube.com/watch?v=KZ6ANZK44no"
          ></accomplishment-score>
        </div>

        <h2 class="heading">Adoption Matches</h2>
        <div class="grid grid-cols-2 gap-2">
          <accomplishment-score
            @register-new-trophy="onRegisterNewTrophy"
            title="Adoption"
            desc="Win 10 consecutive games against the same opponent"
            :units="['Match', 'Matches']"
            :trophies="playerTrophiesByType['adoptionMatch:10'] || {}"
          ></accomplishment-score>
          <accomplishment-score
            @register-new-trophy="onRegisterNewTrophy"
            title="Double Adoption"
            desc="Win 20 consecutive games against the same opponent"
            :units="['Match', 'Matches']"
            :trophies="playerTrophiesByType['adoptionMatch:20'] || {}"
          ></accomplishment-score>
        </div>

        <h2 class="heading">I feel so dirty</h2>
        <div class="grid grid-cols-2 gap-2">
          <accomplishment-score
            @register-new-trophy="onRegisterNewTrophy"
            title="Clutch Pawn"
            desc="Win with 1 pawn while down 10+ points in material"
            :trophies="playerTrophiesByType['clutchPawn'] || {}"
            gameLink="https://lichess.org/tgMQgOSk#149"
            youtubeLink="https://youtu.be/ihBnAuO7AtM?t=459"
          ></accomplishment-score>
          <accomplishment-score
            @register-new-trophy="onRegisterNewTrophy"
            title="Win with Insufficient Material"
            desc="Flag your opponent with only a knight or bishop (Lichess only)"
            :trophies="playerTrophiesByType['winInsufficientMaterial'] || {}"
            gameLink="https://lichess.org/nYz9xUgc#141"
            youtubeLink="https://www.youtube.com/watch?v=vBf4rA4j8_w&t=15468s"
          ></accomplishment-score>
          <accomplishment-score
            @register-new-trophy="onRegisterNewTrophy"
            title="Flag Opponent Who Had Mate in 1"
            desc="Young children, close your eyes"
            :trophies="playerTrophiesByType['flagOpponentWhoHadMateInOne'] || {}"
            gameLink="https://lichess.org/VwNKF7ie#121"
          ></accomplishment-score>
          <accomplishment-score
            @register-new-trophy="onRegisterNewTrophy"
            title="Lefong"
            desc="Capture a premoved fianchettoed bishop"
            :trophies="playerTrophiesByType['lefongTrap'] || {}"
            gameLink="https://lichess.org/ix4lZu8Q/black#6"
            youtubeLink="https://youtu.be/vBf4rA4j8_w?t=2671"
          ></accomplishment-score>
        </div>
      </div>
    </div>
    <!-- GitFut Scout Report Layout -->
    <div class="max-w-[1100px] mx-auto my-16 px-4" v-if="isDownloadComplete && trophyCount > 0">
      <header class="relative mx-auto mt-4 mb-12 flex max-w-2xl items-start gap-6">
        <div class="relative flex h-24 w-24 flex-col items-center justify-center rounded-2xl border border-white/20 bg-[#0b0930] shadow-2xl shrink-0">
          <span class="font-display text-4xl font-black leading-none text-ink drop-shadow-md">{{ futCardRating }}</span>
          <span class="font-display mt-1 text-[10px] font-bold tracking-widest text-ink-faint">{{ cardTier }}</span>
        </div>
        <div class="min-w-0 flex-1 text-left">
          <h2 class="font-display truncate text-5xl font-black leading-tight text-transparent bg-clip-text bg-gradient-to-r from-ink to-ink-dim">
            {{ player.username || username }}
          </h2>
          <div class="flex items-center gap-3 mt-2">
            <span class="font-display inline-flex items-center rounded-md border border-brand/40 bg-brand/15 px-2 py-1 text-xs font-bold tracking-widest text-brand">{{ playerStyle.pos }}</span>
            <span class="text-sm font-medium text-ink-dim">{{ playerStyle.title }}</span>
          </div>
          <p class="mt-2 text-sm text-ink-faint">
            <span class="font-display mr-2 text-xs font-bold tracking-widest text-brand">{{ playerStyle.status }}</span> {{ playerStyle.desc }}
          </p>
        </div>
      </header>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <!-- Left Column: Attributes -->
        <div class="lg:col-span-4 flex flex-col gap-6">
          <section class="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5">
            <div class="mb-3 flex items-center gap-2">
              <span class="h-[2px] w-4 rounded-full bg-brand"></span>
              <h3 class="font-display text-xs font-bold tracking-widest text-ink-faint">ATTRIBUTES</h3>
            </div>
            <div class="flex items-center justify-between border-b border-white/[0.06] py-3">
              <span class="text-[13.5px] text-ink-dim">Games Analyzed</span>
              <span class="font-display text-sm font-bold tracking-wide text-ink-soft">{{ counts.downloaded }}</span>
            </div>
            <div class="flex items-center justify-between border-b border-white/[0.06] py-3">
              <span class="text-[13.5px] text-ink-dim">Total Moves</span>
              <span class="font-display text-sm font-bold tracking-wide text-ink-soft">{{ counts.totalMoves }}</span>
            </div>
            <div class="flex items-center justify-between border-b border-white/[0.06] py-3">
              <span class="text-[13.5px] text-ink-dim">Trophies Earned</span>
              <span class="font-display text-sm font-bold tracking-wide text-ink-soft">{{ trophyCount }}</span>
            </div>
            <div class="flex items-center justify-between py-3">
              <span class="text-[13.5px] text-ink-dim">Completion</span>
              <span class="font-display text-sm font-bold tracking-wide text-ink-soft">{{ totalAccomplishmentsCompletedPercentage }}%</span>
            </div>
          </section>
        </div>

        <!-- Center Column: FutCard -->
        <div class="lg:col-span-4 flex justify-center flex-col items-center">
          <div ref="futCardContainer" class="bg-transparent inline-block transition-transform duration-300 hover:scale-[1.03]">
            <fut-card
              :username="player.username || username"
              :avatarUrl="avatarUrl"
              :countryCode="inputs.countryCode"
              :overallRating="futCardRating"
              :position="playerStyle.pos"
              :trophyCount="trophyCount"
              :completed-percentage="totalAccomplishmentsCompletedPercentage"
              :total-games="counts.downloaded"
              :total-positions="counts.totalMoves"
            ></fut-card>
          </div>
          <button
            @click.prevent="downloadFutCard"
            class="mt-8 px-6 py-3 w-full bg-brand text-bg font-display tracking-widest text-xl uppercase rounded-xl hover:bg-brand-hi hover:shadow-[0_0_20px_rgba(57,211,83,0.4)] active:scale-95 transition-all"
          >
            Download Card
          </button>
        </div>

        <!-- Right Column: Metrics -->
        <div class="lg:col-span-4 flex flex-col gap-6">
          <section class="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5 w-full">
            <div class="mb-4 flex items-center gap-2">
              <span class="h-[2px] w-4 rounded-full bg-brand"></span>
              <h3 class="font-display text-xs font-bold tracking-widest text-ink-faint">SCOUTING METRICS</h3>
            </div>
            
            <div class="flex flex-col gap-5 pt-2">
              <!-- Bar 1 -->
              <div>
                <div class="flex items-baseline justify-between gap-3 mb-2">
                  <span class="text-[13px] text-ink-dim">Pace</span>
                  <span class="font-display text-lg font-bold leading-none tabular-nums text-ink-soft">{{ computedStats.pac }}</span>
                </div>
                <div class="h-1 overflow-hidden rounded-full bg-white/[0.07]">
                  <div class="h-full rounded-full bg-gradient-to-r from-brand/50 to-brand" :style="`width: ${computedStats.pac}%`"></div>
                </div>
              </div>
              <!-- Bar 2 -->
              <div>
                <div class="flex items-baseline justify-between gap-3 mb-2">
                  <span class="text-[13px] text-ink-dim">Shooting</span>
                  <span class="font-display text-lg font-bold leading-none tabular-nums text-ink-soft">{{ computedStats.sho }}</span>
                </div>
                <div class="h-1 overflow-hidden rounded-full bg-white/[0.07]">
                  <div class="h-full rounded-full bg-gradient-to-r from-brand/50 to-brand" :style="`width: ${computedStats.sho}%`"></div>
                </div>
              </div>
              <!-- Bar 3 -->
              <div>
                <div class="flex items-baseline justify-between gap-3 mb-2">
                  <span class="text-[13px] text-ink-dim">Passing</span>
                  <span class="font-display text-lg font-bold leading-none tabular-nums text-ink-soft">{{ computedStats.pas }}</span>
                </div>
                <div class="h-1 overflow-hidden rounded-full bg-white/[0.07]">
                  <div class="h-full rounded-full bg-gradient-to-r from-brand/50 to-brand" :style="`width: ${computedStats.pas}%`"></div>
                </div>
              </div>
              <!-- Bar 4 -->
              <div>
                <div class="flex items-baseline justify-between gap-3 mb-2">
                  <span class="text-[13px] text-ink-dim">Dribbling</span>
                  <span class="font-display text-lg font-bold leading-none tabular-nums text-ink-soft">{{ computedStats.dri }}</span>
                </div>
                <div class="h-1 overflow-hidden rounded-full bg-white/[0.07]">
                  <div class="h-full rounded-full bg-gradient-to-r from-brand/50 to-brand" :style="`width: ${computedStats.dri}%`"></div>
                </div>
              </div>
              <!-- Bar 5 -->
              <div>
                <div class="flex items-baseline justify-between gap-3 mb-2">
                  <span class="text-[13px] text-ink-dim">Defending</span>
                  <span class="font-display text-lg font-bold leading-none tabular-nums text-ink-soft">{{ computedStats.def }}</span>
                </div>
                <div class="h-1 overflow-hidden rounded-full bg-white/[0.07]">
                  <div class="h-full rounded-full bg-gradient-to-r from-brand/50 to-brand" :style="`width: ${computedStats.def}%`"></div>
                </div>
              </div>
              <!-- Bar 6 -->
              <div>
                <div class="flex items-baseline justify-between gap-3 mb-2">
                  <span class="text-[13px] text-ink-dim">Physical</span>
                  <span class="font-display text-lg font-bold leading-none tabular-nums text-ink-soft">{{ computedStats.phy }}</span>
                </div>
                <div class="h-1 overflow-hidden rounded-full bg-white/[0.07]">
                  <div class="h-full rounded-full bg-gradient-to-r from-brand/50 to-brand" :style="`width: ${computedStats.phy}%`"></div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
    </div>

    <!-- How it works modal -->
    <div v-if="showHowItWorks" class="fixed inset-0 z-[100] flex items-center justify-center p-4" v-cloak>
      <div @click="showHowItWorks = false" class="absolute inset-0 bg-[#02001e]/80 backdrop-blur-sm"></div>
      
      <div class="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto scrollbar-thin bg-[#0b0930] border border-[#262358] rounded-2xl shadow-2xl p-8 md:p-10">
        <button @click="showHowItWorks = false" class="absolute top-4 right-4 bg-[#130f3d] border border-[#262358] text-ink-soft hover:text-ink w-8 h-8 flex items-center justify-center rounded-lg transition-colors cursor-pointer z-10">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>
        
        <div class="space-y-12">
          <!-- Intro -->
          <div>
            <div class="text-brand text-xs font-bold tracking-[0.2em] mb-2 uppercase">Your Tactical Identity</div>
            <h2 class="font-display text-5xl md:text-6xl text-ink leading-[0.85] uppercase mb-6 tracking-wide">Data, not opinions.<br/>Your raw stats<span class="text-brand">.</span></h2>
            <p class="text-ink-dim font-sans text-[15px] leading-relaxed max-w-xl">We analyze six core dimensions from your live chess data to build your ultimate player card. Your playstyle emerges naturally from the numbers — meaning your card is as unique as your opening repertoire.</p>
          </div>

          <!-- Section 1 -->
          <div>
            <div class="flex items-center gap-3 mb-2">
              <div class="h-px w-6 bg-brand"></div>
              <div class="text-brand text-xs font-bold tracking-[0.2em] uppercase">Dynamic Scaling</div>
            </div>
            <h3 class="font-display text-2xl text-ink uppercase mb-3 tracking-wide">Graded on your own curve.</h3>
            <p class="text-ink-soft font-sans text-sm leading-relaxed pb-6 border-b border-[#262358]">Every attribute is weighed against the context of your overall profile. Your highest stats emphasize where you truly excel, creating a balanced and realistic card that reflects your personal journey on the board.</p>
          </div>

          <!-- Section 2 -->
          <div>
            <div class="flex items-center gap-3 mb-2">
              <div class="h-px w-6 bg-brand"></div>
              <div class="text-brand text-xs font-bold tracking-[0.2em] uppercase">Playstyle Archetypes</div>
            </div>
            <h3 class="font-display text-2xl text-ink uppercase mb-3 tracking-wide">Everyone leans somewhere.</h3>
            <p class="text-ink-soft font-sans text-sm leading-relaxed pb-6 border-b border-[#262358]">Whether you are a relentless Speed Demon or a tactical Maestro, your dominant stats dictate your position on the pitch and your assigned archetype. The system reads your tendencies, you don't pick them.</p>
          </div>

          <!-- Section 3 -->
          <div>
            <div class="flex items-center gap-3 mb-2">
              <div class="h-px w-6 bg-brand"></div>
              <div class="text-brand text-xs font-bold tracking-[0.2em] uppercase">The road to 90+</div>
            </div>
            <h3 class="font-display text-2xl text-ink uppercase mb-3 tracking-wide">Consistency is king.</h3>
            <p class="text-ink-soft font-sans text-sm leading-relaxed pb-8 border-b border-[#262358]">Reaching the elite 90+ overall tiers requires thousands of games and the mastery of multiple unique accomplishments. A legend rating is built on a massive track record, not just a weekend winning streak.</p>
          </div>

          <!-- Grid Section -->
          <div>
            <div class="text-ink-soft text-xs font-bold tracking-[0.2em] mb-6 uppercase">What feeds the six</div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 pb-8 border-b border-[#262358]">
              <div class="flex gap-4">
                <div class="bg-[#131d20] border border-[#1b2b2b] text-[#39d353] font-display text-sm px-2 py-1 h-fit rounded font-bold">PAC</div>
                <div class="text-ink-dim text-sm font-sans leading-snug">The sheer volume of games played at lightning speed.</div>
              </div>
              <div class="flex gap-4">
                <div class="bg-[#131d20] border border-[#1b2b2b] text-[#39d353] font-display text-sm px-2 py-1 h-fit rounded font-bold">SHO</div>
                <div class="text-ink-dim text-sm font-sans leading-snug">Rare trophies earned and your biggest tactical hits.</div>
              </div>
              <div class="flex gap-4">
                <div class="bg-[#131d20] border border-[#1b2b2b] text-[#39d353] font-display text-sm px-2 py-1 h-fit rounded font-bold">PAS</div>
                <div class="text-ink-dim text-sm font-sans leading-snug">Overall accomplishment completion percentage.</div>
              </div>
              <div class="flex gap-4">
                <div class="bg-[#131d20] border border-[#1b2b2b] text-[#39d353] font-display text-sm px-2 py-1 h-fit rounded font-bold">DRI</div>
                <div class="text-ink-dim text-sm font-sans leading-snug">Average moves per game — deep tactical maneuvering.</div>
              </div>
              <div class="flex gap-4">
                <div class="bg-[#131d20] border border-[#1b2b2b] text-[#39d353] font-display text-sm px-2 py-1 h-fit rounded font-bold">DEF</div>
                <div class="text-ink-dim text-sm font-sans leading-snug">Total volume of moves across all your games.</div>
              </div>
              <div class="flex gap-4">
                <div class="bg-[#131d20] border border-[#1b2b2b] text-[#39d353] font-display text-sm px-2 py-1 h-fit rounded font-bold">PHY</div>
                <div class="text-ink-dim text-sm font-sans leading-snug">A lifetime of endurance across thousands of matches.</div>
              </div>
            </div>
          </div>

          <!-- The Ladder -->
          <div>
            <div class="text-ink-soft text-xs font-bold tracking-[0.2em] mb-6 uppercase">The Ladder</div>
            <div class="flex flex-wrap items-center gap-3 font-display tracking-widest text-sm font-bold">
              <div class="bg-[#2a1b13] text-[#cd7f32] px-3 py-1 rounded">BRONZE</div>
              <div class="text-ink-mute">→</div>
              <div class="bg-[#242b32] text-[#c9d1d9] px-3 py-1 rounded">SILVER</div>
              <div class="text-ink-mute">→</div>
              <div class="bg-[#332709] text-[#e3b341] px-3 py-1 rounded">GOLD</div>
            </div>
            <div class="mt-8 p-5 bg-brand/5 border border-brand/20 rounded-xl">
              <div class="flex items-center gap-2 mb-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#39d353" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                <h4 class="text-brand font-bold text-sm uppercase tracking-wider">Privacy & Security</h4>
              </div>
              <p class="text-ink-dim text-[13px] font-sans leading-relaxed">
                Project Rosen strictly reads publicly available game data from the Lichess and Chess.com APIs. We do <strong>not</strong> require you to authenticate, we do <strong>not</strong> access any private account information, and we do <strong>not</strong> store your data on our servers. Your stats are generated purely on-the-fly directly in your browser.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Chess as ChessJS } from 'chess.js'

import { games, player, Game, Profile, addLichessOauthToken, cancelFetch } from 'chess-fetcher'

import { toPng } from 'html-to-image'

import AccomplishmentScore from './components/AccomplishmentScore.vue'
import ArrowIcon from './components/ArrowIcon.vue'
import ChangelogDate from './components/ChangelogDate.vue'
import DownloadProgress from './components/DownloadProgress.vue'
import LichessLogin from './components/LichessLogin.vue'
import UsernameFormatter from './components/UsernameFormatter.vue'
import RecentUpdates from './components/RecentUpdates.vue'
import TrophyCollection from './components/TrophyCollection.vue'
import FutCard from './components/FutCard.vue'
import { smotheredMate, smotheredPorkMate } from './goals/smothered-mate'
import adoptionMatch from './goals/adoption-match'
import { blockCheckWithCheckmate } from './goals/block-check-with-checkmate'
import { checkmateAtMoveNumber } from './goals/checkmate-at-move-number'
import { doubleCheckCheckmate } from './goals/double-check-checkmate'
import {
  quadrupledPawns,
  pawnCube,
  pawnCubeCenter,
  pawnX,
  pawnDiamond,
  pawnDiamondSolid,
  doublePawnDiamond,
  knightCube,
  knightRectangle,
  sixPawnsInTheSameFile,
  connectEightOnRank,
  connectDiagonally,
} from './goals/piece-structures'
import { royalFamilyFork } from './goals/royal-family-fork'
import { stalemateTricks, bishopAndKnightMate, twoBishopMate, fourKnightMate, fourKnightCubeMate, sixKnightRectangleMate } from './goals/game-checks'
import { winInsufficientMaterial, clutchPawn, flagOpponentWhoHadMateInOne } from './goals/dirty-wins'
import { noCapturesBeforeMoveNumber } from './goals/first-capture'
import {
  castleAfterMove40,
  pawnCheckmate,
  g5mate,
  enPassantCheckmate,
  castleKingsideWithCheckmate,
  castleQueensideWithCheckmate,
  checkmateWithKing,
  promoteToBishopCheckmate,
  promoteToKnightCheckmate,
  promotePawnBeforeMoveNumber,
} from './goals/move-checks'
import { pawnStormOpening } from './goals/pawn-storm-opening'
import { castleFork } from './goals/castle-fork'
import { avoidTheFlagCheckmate, checkmateWithTenthSecondLeft } from './goals/avoid-the-flag-checkmate'
import { consecutiveCapturesSameSquare } from './goals/consecutive-captures'
import { ohNoMyQueen } from './goals/oh-no-my-queen'
import { lefongTrap } from './goals/lefong-trap'
import { rosenTrap } from './goals/rosen-trap'
import { alphabetOpening } from './goals/alphabet-openings'
import { PlayerTrophiesByType, ReportSource, TrophyCacheFile, TrophyCheckResult } from './types/types'
import { formatSinceDate } from './utils/format-since-date'
import { monaLisaCheckmate } from './goals/mona-lisa-checkmate'

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export default {
  components: {
    AccomplishmentScore,
    ArrowIcon,
    ChangelogDate,
    DownloadProgress,
    LichessLogin,
    UsernameFormatter,
    RecentUpdates,
    TrophyCollection,
    FutCard,
  },
  data() {
    return {
      showHowItWorks: false,
      inputs: {
        type: 'lichess' as ReportSource | 'both',
        value: '',
        valueChesscom: '',
        countryCode: '',
        filters: {
          sinceHoursAgo: 0,
        },
      },

      player: <Profile>{},

      errors: {
        form: '',
        api: <DOMException>{},
      },
      avatarUrl: '',

      trophyTypeCount: 0,
      githubStars: 1 as number | null,
      playerTrophiesByType: {} as PlayerTrophiesByType,

      isDownloading: false,
      isDownloadComplete: false,
      counts: {
        totalGames: 0,
        downloaded: 0,
        totalMoves: 0,
      },

      usingCacheBeforeTimestamp: 0,
    }
  },

  computed: {
    computedStats() {
      const games = this.counts.totalGames || 0
      const moves = this.counts.totalMoves || 0
      const trophies = this.trophyCount || 0
      const comp = this.totalAccomplishmentsCompletedPercentage || 0
      
      const pac = Math.min(99, Math.round(40 + Math.min(45, Math.pow(games, 0.4) * 1.5) + (comp * 0.14)))
      const sho = Math.min(99, Math.round(35 + Math.min(45, Math.sqrt(trophies) * 2.5) + (comp * 0.2)))
      const pas = Math.min(99, Math.round(30 + (comp * 0.6) + Math.min(10, Math.sqrt(games) * 0.1)))
      const avgMoves = games > 0 ? moves / games : 0
      const dri = Math.min(99, Math.round(35 + Math.min(45, avgMoves * 1.1) + (comp * 0.19)))
      const def = Math.min(99, Math.round(35 + Math.min(45, Math.pow(moves, 0.3) * 0.6) + (comp * 0.2)))
      const phy = Math.min(99, Math.round(35 + Math.min(40, Math.sqrt(games) * 0.5) + (comp * 0.25)))
      
      return { pac, sho, pas, dri, def, phy }
    },
    username(): string {
      return this.inputs.value.trim().toLowerCase()
    },
    usernameChesscom(): string {
      return this.inputs.valueChesscom.trim().toLowerCase()
    },
    sinceDateFormatted(): string {
      if (this.inputs.filters.sinceHoursAgo) {
        let now = new Date().getTime()
        return formatSinceDate(now - this.inputs.filters.sinceHoursAgo * 60 * 60 * 1000)
      }

      return ''
    },
    totalAccomplishmentsCompleted(): number {
      return Object.keys(this.playerTrophiesByType).length
    },
    totalAccomplishmentsCompletedPercentage(): number {
      return Math.round((this.totalAccomplishmentsCompleted / this.trophyTypeCount) * 100)
    },
    trophyCount(): number {
      return Object.values(this.playerTrophiesByType)
        .map((o) => Object.values(o))
        .flat().length
    },
    futCardRating(): number {
      const { pac, sho, pas, dri, def, phy } = this.computedStats
      const average = (pac + sho + pas + dri + def + phy) / 6
      const boost = Math.max(0, 15 - (average * 0.15))
      return Math.min(99, Math.max(40, Math.floor(average + boost)))
    },
    cardTier(): string {
      if (this.futCardRating >= 85) return 'GOLD'
      if (this.futCardRating >= 65) return 'SILVER'
      return 'BRONZE'
    },
    playerStyle(): any {
      if (!this.counts.totalGames) return { pos: 'CAM', title: 'Chess Prodigy', status: 'FIRST-TEAM READY', desc: 'A tactician exploring unique chess positions and accomplishments.' }
      
      const { pac, sho, pas, dri, def, phy } = this.computedStats
      const stats = [
        { name: 'PAC', value: pac, pos: 'ST', title: 'Speed Demon', status: 'PACE MERCHANT', desc: 'A relentless player who grinds out games at lightning speed.' },
        { name: 'SHO', value: sho, pos: 'CF', title: 'Trophy Hunter', status: 'LETHAL FINISHER', desc: 'A sharp tactician who easily secures rare accomplishments.' },
        { name: 'PAS', value: pas, pos: 'CM', title: 'Completionist', status: 'MAESTRO', desc: 'A well-rounded player focused on mastering all accomplishments.' },
        { name: 'DRI', value: dri, pos: 'CAM', title: 'Tactical Prodigy', status: 'CREATIVE FORCE', desc: 'A creative tactician exploring deep and unique chess positions.' },
        { name: 'DEF', value: def, pos: 'CB', title: 'Defensive Anchor', status: 'BRICK WALL', desc: 'A solid defender who grinds out long, grueling chess matches.' },
        { name: 'PHY', value: phy, pos: 'CDM', title: 'Endurance King', status: 'BOX-TO-BOX', desc: 'An absolute unit who grinds chess games relentlessly.' }
      ]
      
      let highest = stats[0]
      for (const stat of stats) {
        if (stat.value > highest.value) highest = stat
      }
      
      return highest
    },
  },

  watch: {
    inputs: {
      handler(value) {
        window.localStorage.setItem('savedForm', JSON.stringify(value))
      },
      deep: true,
    },
  },

  mounted() {
    let savedForm = JSON.parse(window.localStorage.getItem('savedForm') ?? '{}')

    if (savedForm.type) {
      this.inputs.type = savedForm.type
    }

    if (savedForm.value) {
      this.inputs.value = savedForm.value
    }

    if (savedForm.filters) {
      this.inputs.filters = savedForm.filters
    }

    const params = new URLSearchParams(window.location.search)

    const site = params.get('site')
    if (site === 'lichess' || site === 'chesscom') {
      this.inputs.type = site
    }

    const username = params.get('username')
    if (username) {
      this.inputs.value = username
    }

    try {
      fetch('https://api.github.com/repos/AyushSinha2603/project-rosen')
        .then(res => res.json())
        .then(data => {
          if (data && typeof data.stargazers_count === 'number') {
            this.githubStars = data.stargazers_count
          }
        })
    } catch (e) {}
  },

  methods: {
    async downloadFutCard() {
      const container = this.$refs.futCardContainer as any
      if (container) {
        // Find the root element of the FutCard component
        const el = container.firstElementChild
        if (el) {
          try {
            const dataUrl = await toPng(el, {
              backgroundColor: 'transparent',
              pixelRatio: 2 // High resolution
            })
            const link = document.createElement('a')
            let filenameUsername = this.player.username || this.username
            filenameUsername = filenameUsername.replace(/ \(.+\)/g, '')
            link.download = `rosen-score-card-${filenameUsername}.png`
            link.href = dataUrl
            link.click()
          } catch (e) {
            console.error('Failed to generate FUT card:', e)
          }
        }
      }
    },

    onRegisterNewTrophy(): void {
      this.trophyTypeCount++
    },

    formFill(type: ReportSource, value: string): void {
      this.inputs.type = type
      this.inputs.value = value
      this.inputs.filters.sinceHoursAgo = 0
    },

    setLichessOauthToken(token: string): void {
      addLichessOauthToken(token)
    },

    cancelDownload(): void {
      cancelFetch()

      this.isDownloading = false
      this.isDownloadComplete = true
    },

    async startDownload(): Promise<void> {
      if (!this.username) {
        this.errors.form = 'Enter a username in Step #1'
        return
      }
      // Check if "Both" is selected but the second box is empty
      if (this.inputs.type === 'both' && !this.usernameChesscom) {
        this.errors.form = 'Enter both usernames in Step #1'
        return
      }

      // Auto correct Eric's usernames
      if (this.username === 'ericrosen' && this.inputs.type === 'chesscom') {
        this.inputs.value = 'IMRosen'
      } else if (this.username === 'imrosen' && this.inputs.type === 'lichess') {
        this.inputs.value = 'EricRosen'
      }

      this.isDownloading = true
      this.counts.totalGames = 0 // Reset to 0 so we can safely add them together

      // Fetch Avatar from chess.com if not purely Lichess
      if (this.inputs.type !== 'lichess') {
        let avatarSearchUser = this.username
        if (this.inputs.type === 'both' && this.usernameChesscom) {
          avatarSearchUser = this.usernameChesscom
        }
        try {
          const avatarRes = await fetch(`https://api.chess.com/pub/player/${avatarSearchUser}`)
          if (avatarRes.ok) {
            const avatarData = await avatarRes.json()
            this.avatarUrl = avatarData.avatar || ''
          } else {
            this.avatarUrl = ''
          }
        } catch (e) {
          this.avatarUrl = ''
        }
      } else {
        this.avatarUrl = ''
      }

      // 1. Build an array of URLs to fetch
      let urls: string[] = []

      if (this.inputs.type === 'lichess' || this.inputs.type === 'both') {
        urls.push(`https://lichess.org/@/${this.username}`)
      }

      if (this.inputs.type === 'chesscom') {
        urls.push(`https://www.chess.com/member/${this.username}`)
      } else if (this.inputs.type === 'both') {
        urls.push(`https://www.chess.com/member/${this.usernameChesscom}`) // Use the second box!
      }

      let completedFetches = 0

      // 2. Loop through our URLs and fetch them
      urls.forEach((url) => {
        player(url)
          .then(async (player: Profile) => {
            this.player = player

            // Format display names with their respective platforms
            if (this.inputs.type === 'both') {
              if (this.username !== this.usernameChesscom) {
                // Different usernames: Ghost(Lichess) & Ghost2(Chess.com)
                this.player.username = `${this.inputs.value} (Lichess) & ${this.inputs.valueChesscom} (Chess.com)`
                this.player.title = ''
              } else {
                // Same username on both
                this.player.username = `${this.inputs.value} (Both Platforms)`
              }
            } else {
              // Normal behavior for single platform
              window.document.title += ` - ${player.title || ''} ${player.username}`
            }

            const playerGameCount: number = player.counts?.all ?? 0

            // Use += instead of = so the games add up from both accounts
            if (player.site === 'chess.com') {
              this.counts.totalGames += Math.ceil(playerGameCount * 1.2)
            } else {
              this.counts.totalGames += playerGameCount
            }

            if (!this.inputs.filters.sinceHoursAgo) {
              await this.getCachedGames(url)
            }

            let sinceTimestamp = this.inputs.filters.sinceHoursAgo ? new Date().getTime() - this.inputs.filters.sinceHoursAgo * 60 * 60 * 1000 : 0

            if (this.usingCacheBeforeTimestamp) {
              sinceTimestamp = this.usingCacheBeforeTimestamp
            }

            games(url, this.checkGameForTrophies, {
              since: sinceTimestamp,
              pgnInJson: true,
              clocks: true,
            })
              .then(() => {
                completedFetches++
                // 3. Only finish the download when ALL urls are done
                if (completedFetches === urls.length) {
                  this.isDownloadComplete = true
                  this.counts.downloaded = this.counts.totalGames
                }
              })
              .catch((e: DOMException) => {
                if (e.message.includes('aborted')) {
                  return
                }
                this.errors.api = e
              })
          })
          .catch((e: DOMException) => {
            this.errors.api = e
          })
      })
    },

    async getCachedGames(url: string) {
      const caches = new Map<string, string>()

      // caches.set('https://lichess.org/@/german11', '/cache/lichess/german11.json')
      caches.set('https://lichess.org/@/chess-network', '/cache/lichess/chess-network.json')
      caches.set('https://lichess.org/@/dianamirza', '/cache/lichess/dianamirza.json')
      caches.set('https://lichess.org/@/drnykterstein', '/cache/lichess/drnykterstein.json')
      caches.set('https://lichess.org/@/ericrosen', '/cache/lichess/ericrosen.json')
      caches.set('https://lichess.org/@/massterofmayhem', '/cache/lichess/massterofmayhem.json')
      caches.set('https://lichess.org/@/penguingim1', '/cache/lichess/penguingim1.json')
      caches.set('https://lichess.org/@/saltyclown', '/cache/lichess/saltyclown.json')

      caches.set('https://www.chess.com/member/alexandrabotez', '/cache/chesscom/alexandrabotez.json')
      caches.set('https://www.chess.com/member/chessbrah', '/cache/chesscom/chessbrah.json')
      caches.set('https://www.chess.com/member/danielnaroditsky', '/cache/chesscom/danielnaroditsky.json')
      caches.set('https://www.chess.com/member/gothamchess', '/cache/chesscom/gothamchess.json')
      caches.set('https://www.chess.com/member/hannahsayce', '/cache/chesscom/hannahsayce.json')
      caches.set('https://www.chess.com/member/hikaru', '/cache/chesscom/hikaru.json')
      caches.set('https://www.chess.com/member/imrosen', '/cache/chesscom/imrosen.json')
      caches.set('https://www.chess.com/member/knvb', '/cache/chesscom/knvb.json')
      caches.set('https://www.chess.com/member/magnuscarlsen', '/cache/chesscom/magnuscarlsen.json')
      caches.set('https://www.chess.com/member/saltyclown', '/cache/chesscom/saltyclown.json')
      caches.set('https://www.chess.com/member/witty_alien', '/cache/chesscom/witty_alien.json')

      if (!caches.has(url)) {
        return
      }

      await fetch(caches.get(url)!)
        .then((response) => response.json())
        .then((result: TrophyCacheFile) => {
          this.usingCacheBeforeTimestamp = result.cache_updated_at
          this.counts.downloaded = result.games_analyzed
          this.counts.totalMoves = result.moves_analyzed
          this.playerTrophiesByType = result.trophies
        })
    },

    exportAsJson(): void {
      let contents: TrophyCacheFile = {
        cache_updated_at: Date.now(),
        games_analyzed: this.counts.downloaded,
        moves_analyzed: this.counts.totalMoves,
        trophies: this.playerTrophiesByType,
      }

      this.downloadFile(`${this.username}.json`, JSON.stringify(contents, null, 2), 'application/json')
    },

    exportAsCsv(): void {
      let rows: {
        trophy: string
        date: string
        opponent: string
        link: string
      }[] = []

      for (const [trophyName, accomplishment] of Object.entries(this.playerTrophiesByType)) {
        for (const trophy of Object.values(accomplishment)) {
          rows.push({
            trophy: trophyName,
            date: trophy.date,
            opponent: (trophy.opponent.title + ' ' + trophy.opponent.username).trim(),
            link: trophy.link,
          })
        }
      }

      const header = Object.keys(rows[0]).join(',')
      const values = rows.map((o) => Object.values(o).join(',')).join('\n')
      const csv = header + '\n' + values

      this.downloadFile(`${this.username}.csv`, csv, 'text/csv')
    },

    downloadFile(filename: string, contents: string, contentType: string): void {
      let element = document.createElement('a')
      element.setAttribute('href', 'data:' + contentType + ';charset=utf-8,' + encodeURIComponent(contents))
      element.setAttribute('download', filename)

      element.style.display = 'none'
      document.body.appendChild(element)
      element.click()
      document.body.removeChild(element)
    },

    checkForTrophy(game: Game, name: string, results: TrophyCheckResult, onMoveNumber?: number): void {
      for (const result of results) {
        if (
          (result.color === 'w' && game.players.white.username?.toLowerCase() === this.username) ||
          (result.color === 'b' && game.players.black.username?.toLowerCase() === this.username)
        ) {
          this.addTrophyForPlayer(name, game, result.onMoveNumber ?? onMoveNumber ?? 0)
        }
      }
    },

    addTrophyForPlayer(trophyName: string, game: Game, onMoveNumber?: number): void {
      this.playerTrophiesByType[trophyName] = this.playerTrophiesByType[trophyName] || {}

      // if the player was already awarded this trophy for this game, don't add it again
      if (this.playerTrophiesByType[trophyName][game.id]) {
        return
      }

      let opponent
      let link

      if (game.players.white.username?.toLowerCase() === this.username) {
        opponent = game.players.black
        link = game.links.white
      } else {
        opponent = game.players.white
        link = game.links.black
      }

      if (game.site === 'lichess' && onMoveNumber) {
        link += `#${onMoveNumber}`
      } else if (onMoveNumber) {
        link += onMoveNumber - 1
      }

      if (!opponent.username) {
        return
      }

      this.playerTrophiesByType[trophyName][game.id] = {
        date: new Date(game.timestamp).toISOString().split('T')[0], // YYYY-MM-DD format
        opponent: {
          username: opponent.username,
          title: opponent.title ?? '',
        },
        link,
      }
    },

    async checkGameForTrophies(game: Game): Promise<void> {
      // Add a 0ms setTimeout to stop the process from blocking the page
      // Without this, the page may become unresponsive as games are processed
      await wait(0)

      this.counts.downloaded++

      // only standard chess starting position games
      if (!game.isStandard) {
        return
      }

      // ignore games against stockfish, anonymous users, and bots
      if (
        this.player.title !== 'BOT' &&
        (typeof game.players.white.username === 'undefined' ||
          typeof game.players.black.username === 'undefined' ||
          game.players.white.title === 'BOT' ||
          game.players.black.title === 'BOT')
      ) {
        return
      }

      if (game.moves.length === 0) {
        return
      }

      this.checkForTrophy(game, 'castleAfterMove40', castleAfterMove40(game.moves))
      this.checkForTrophy(game, 'pawnCheckmate', pawnCheckmate(game.moves))
      this.checkForTrophy(game, 'g5mate', g5mate(game.moves))

      this.checkForTrophy(game, 'enPassantCheckmate', enPassantCheckmate(game.moves))

      this.checkForTrophy(game, 'castleKingsideWithCheckmate', castleKingsideWithCheckmate(game.moves))
      this.checkForTrophy(game, 'castleQueensideWithCheckmate', castleQueensideWithCheckmate(game.moves))
      this.checkForTrophy(game, 'checkmateWithKing', checkmateWithKing(game.moves))
      this.checkForTrophy(game, 'promoteToBishopCheckmate', promoteToBishopCheckmate(game.moves))
      this.checkForTrophy(game, 'promoteToKnightCheckmate', promoteToKnightCheckmate(game.moves))
      this.checkForTrophy(game, 'promotePawnBeforeMoveNumber', promotePawnBeforeMoveNumber(game.moves, 8))

      this.checkForTrophy(game, 'smotheredMate', smotheredMate(game.moves))
      this.checkForTrophy(game, 'smotheredPorkMate', smotheredPorkMate(game.moves))

      this.checkForTrophy(game, 'blockCheckWithCheckmate', blockCheckWithCheckmate(game.moves))
      this.checkForTrophy(game, 'royalFamilyFork', royalFamilyFork(game.moves))
      this.checkForTrophy(game, 'noCapturesBeforeMoveNumber', noCapturesBeforeMoveNumber(game.moves, 30))

      this.checkForTrophy(game, 'rosenTrap', rosenTrap(game, game.moves))
      this.checkForTrophy(game, 'castleFork', castleFork(game.moves))

      this.checkForTrophy(game, 'avoidTheFlagCheckmate', avoidTheFlagCheckmate(game))
      this.checkForTrophy(game, 'checkmateWithTenthSecondLeft', checkmateWithTenthSecondLeft(game))

      this.checkForTrophy(game, 'consecutiveCapturesSameSquare', consecutiveCapturesSameSquare(game.moves, 10))
      this.checkForTrophy(game, 'ohNoMyQueen', ohNoMyQueen(game.moves))
      this.checkForTrophy(game, 'lefongTrap', lefongTrap(game.moves))
      this.checkForTrophy(game, 'flagOpponentWhoHadMateInOne', flagOpponentWhoHadMateInOne(game, game.moves), game.moves.length)
      this.checkForTrophy(game, 'pawnStormOpening', pawnStormOpening(game, game.moves))

      this.checkForTrophy(game, 'checkmateAtMoveNumber:2', checkmateAtMoveNumber(game.moves, 2))
      this.checkForTrophy(game, 'checkmateAtMoveNumber:3', checkmateAtMoveNumber(game.moves, 3))
      this.checkForTrophy(game, 'checkmateAtMoveNumber:4', checkmateAtMoveNumber(game.moves, 4))

      adoptionMatch.processGame(game)
      this.checkForTrophy(game, 'adoptionMatch:10', adoptionMatch.checkForAdoption(game, 10))
      this.checkForTrophy(game, 'adoptionMatch:20', adoptionMatch.checkForAdoption(game, 20))

      for (const word of ['badegg', 'beachcafe', 'beef', 'cabbage', 'chad', 'egg', 'eggegg', 'headache']) {
        this.checkForTrophy(game, `alphabet:${word}`, alphabetOpening(game, word, game.moves))
      }

      let chessJs = new ChessJS()

      for (const moveNum in game.moves) {
        this.counts.totalMoves++

        const moveNumber = parseInt(moveNum)
        chessJs.move(game.moves[moveNumber].notation.notation)
        const fen = chessJs.fen()

        this.checkForTrophy(game, 'quadrupledPawns', quadrupledPawns(fen), moveNumber + 1)
        this.checkForTrophy(game, 'pawnCube', pawnCube(fen), moveNumber + 1)
        this.checkForTrophy(game, 'pawnCubeCenter', pawnCubeCenter(fen), moveNumber + 1)
        this.checkForTrophy(game, 'pawnX', pawnX(fen), moveNumber + 1)
        this.checkForTrophy(game, 'pawnDiamond', pawnDiamond(fen), moveNumber + 1)
        this.checkForTrophy(game, 'pawnDiamondSolid', pawnDiamondSolid(fen), moveNumber + 1)
        this.checkForTrophy(game, 'doublePawnDiamond', doublePawnDiamond(fen), moveNumber + 1)
        this.checkForTrophy(game, 'knightCube', knightCube(fen), moveNumber + 1)
        this.checkForTrophy(game, 'knightRectangle', knightRectangle(fen), moveNumber + 1)
        this.checkForTrophy(game, 'connectEightOnRank:4', connectEightOnRank(fen, 4), moveNumber + 1)
        this.checkForTrophy(game, 'connectEightOnRank:5', connectEightOnRank(fen, 5), moveNumber + 1)
        this.checkForTrophy(game, 'connectEightOnRank:6', connectEightOnRank(fen, 6), moveNumber + 1)
        this.checkForTrophy(game, 'connectEightOnRank:7', connectEightOnRank(fen, 7), moveNumber + 1)
        this.checkForTrophy(game, 'connectDiagonally:5', connectDiagonally(fen, 5), moveNumber + 1)
        this.checkForTrophy(game, 'connectDiagonally:6', connectDiagonally(fen, 6), moveNumber + 1)
        this.checkForTrophy(game, 'sixPawnsInTheSameFile', sixPawnsInTheSameFile(fen), moveNumber + 1)
      }

      const fen = chessJs.fen()

      this.checkForTrophy(game, 'stalemateTricks', stalemateTricks(game, fen), game.moves.length)
      this.checkForTrophy(game, 'bishopAndKnightMate', bishopAndKnightMate(game, fen), game.moves.length)
      this.checkForTrophy(game, 'twoBishopMate', twoBishopMate(game, fen), game.moves.length)
      this.checkForTrophy(game, 'fourKnightMate', fourKnightMate(game, fen), game.moves.length)
      this.checkForTrophy(game, 'fourKnightCubeMate', fourKnightCubeMate(game, fen), game.moves.length)
      this.checkForTrophy(game, 'sixKnightRectangleMate', sixKnightRectangleMate(game, fen), game.moves.length)

      this.checkForTrophy(game, 'winInsufficientMaterial', winInsufficientMaterial(game, fen), game.moves.length)
      this.checkForTrophy(game, 'clutchPawn', clutchPawn(game, fen), game.moves.length)
      this.checkForTrophy(game, 'doubleCheckCheckmate', doubleCheckCheckmate(game, fen), game.moves.length)
      this.checkForTrophy(game, 'monaLisaCheckmate', monaLisaCheckmate(game, fen), game.moves.length)
    },
  },
}
</script>
