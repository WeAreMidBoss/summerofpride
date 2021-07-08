<template>
  <div id="app">
    <Nav />
    <main role="main">
    <!-- DESKTOP JUMBOTRON -->
    <div v-if="mobile == 0">
      <div class="jumbotron d-none d-xl-block" :style="{ backgroundImage: 'url(' + require('@/assets/img/SeasonOfPride2021_Banner.jpg') + ')' }" data-aos="zoom-in">
        <!--<img class="d-none d-sm-block" src="./assets/img/SeasonOfPride2021_Banner.jpg" alt="Season of Pride" />
        <img class="d-sm-none" src="./assets/img/SeasonOfPride2021_Mobile.jpg" alt="Season of Pride" />-->
        <div class="container h-100">
          <div class="d-flex justify-content-center h-100 flex-row-reverse">
            <div class="my-auto">
              <h1 class="text-center" data-aos="slide-up">Get Ready for the Season of Pride!</h1>
              <div class="d-flex justify-content-center h-100 flex-row-reverse">
                <div class="p-2 twitch-embed" style="min-width: 640px; min-height:360px;">
                  <!--<clip-loader :loading="scheduleLoading" :color="clipLoaderColor" :size="clipLoaderSize" class="twitch-embed-loader"></clip-loader>-->
                    <twitch-embed :channel="channel"></twitch-embed>
                  </div>
                <div class="p-2 my-auto">
                  <p class="align-middle" data-aos="slide-up">The Season of Pride is a month-long event of LGBTQIA+ (queer) streamers playing queer games, throughout the month of July. 
                    These fun “gaymers” will be playing some of the best and most unique games that showcase positive representation of queer characters and stories. 
                    Tune in and discover some really great games, and follow some really fun streamer personalities.</p>
                  </div>
              </div>
            </div>
          </div>
        </div>  
      </div>
    </div>
    <div v-else>
      <!-- MOBILE JUMBOTRON -->
      <div class="jumbotron d-xl-none" data-aos="zoom-in">
        <!--<img class="d-none d-sm-block" src="./assets/img/SeasonOfPride2021_Banner.jpg" alt="Season of Pride" />-->
        <img src="./assets/img/SeasonOfPride2021_Mobile.jpg" alt="Season of Pride" />  
      </div>

       <div class="d-xl-none">
          <h1 class="mobile-h1 text-center" data-aos="slide-up">Get Ready for the Season of Pride!</h1>
          <div v-if="mobile == 1">
            <twitch-embed-ipad class="twitch-embed-mobile" :channel="channel"></twitch-embed-ipad>
          </div>
          <div v-else>
            <twitch-embed-mobile class="twitch-embed-mobile" :channel="channel"></twitch-embed-mobile>
          </div>
          <p data-aos="slide-up">The Season of Pride is a month-long event of LGBTQIA+ (queer) streamers playing queer games, throughout the month of July. These fun “gaymers” will be playing some of the best and most unique games that showcase positive representation of queer characters and stories. Tune in and discover some really great games, and follow some really fun streamer personalities.</p>
        </div>
    </div>

      <div id="main-content">
        <div class="container">
          <div class="row">
            <div class="col-sm-12">

              <p data-aos="slide-up">This year, we’re also supporting three wonderful charities—<a href="https://www.thetrevorproject.org/" target="_blank">The Trevor Project</a>, <a href="https://www.translifeline.org/" target="_blank">Trans Lifeline</a> and <a href="https://gaymerx.org/" target="_blank">GaymerX</a>. Tune into any stream and share your support if you can.</p>
              
              <div align="center" class="charities row">
                <div class="charity col"><div><a href="https://gaymerx.org/" target="_target"><img class="" src="./assets/img/gaymerx.png" alt="GaymerX" /></a></div> <div align="center" class="donate"><a href="https://donate.tiltify.com/+season-of-pride-2021/gaymerx-2021" target="_target">DONATE</a></div></div> 
                <div class="charity col"><div><a href="https://www.thetrevorproject.org/" target="_target"><img class="" src="./assets/img/trevorproject.png" alt="The Trevor Project" /></a></div> <div class="donate"><a href="https://donate.tiltify.com/+season-of-pride-2021/trevor-project-2021" target="_target">DONATE</a></div></div> 
                <div class="charity col"><div><a href="https://www.translifeline.org/" target="_target"><img class="" src="./assets/img/translifeline.png" alt="Trans Lifeline" /></a></div> <div class="donate"><a href="https://donate.tiltify.com/+season-of-pride-2021/trans-lifeline-2021" target="_target">DONATE</a></div></div> 
              </div>
              <hr>
              <!-- Begin MailChimp Signup Form -->
              <div class="col-sm-12 mail-list-container" data-aos="zoom-out">
                <div id="mc_embed_signup">
                <form action="https://midboss.us5.list-manage.com/subscribe/post?u=56b65e1f2b3ba5e696ffa9e29&amp;id=748c34fc41" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                    <div id="mc_embed_signup_scroll">
                  <label for="mce-EMAIL"><h3>Stay Up-to-Date On the Event!</h3></label>
                  <input type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" placeholder="Email address" required>
                    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_56b65e1f2b3ba5e696ffa9e29_748c34fc41" tabindex="-1" value=""></div>
                    <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button">
                    </div>
                </form>
                </div>
              </div>
              <!--End mc_embed_signup-->
              <hr>
              <h2 class="text-center heading-streamers" data-aos="slide-up">STREAMERS</h2>

              <!--load streamer swiper-->
              <sync-loader :loading="streamersLoading" :color="loaderColor" :size="loaderSize"></sync-loader>
              <streamers-swiper :loading="streamersLoading" :profiles="profiles"></streamers-swiper>
              
              <h2 class="text-center heading-games" data-aos="slide-up">GAMES</h2>

              <!--load games swiper-->
              <sync-loader :loading="gamesLoading" :color="loaderColor" :size="loaderSize"></sync-loader>
              <games-swiper :loading="gamesLoading" :games="games"></games-swiper>
   
              <h2 class="text-center heading-games" data-aos="slide-up">SCHEDULE</h2>

              <!--load schedule swiper-->
              <p data-aos="slide-up">Local time: {{ timezone }}</p>

              <sync-loader :loading="scheduleLoading" :color="loaderColor" :size="loaderSize"></sync-loader>
              <schedule-swiper :loading="scheduleLoading" :schedules="schedules" :profiles="profiles" :games="games" @newChannel="updateChannel"></schedule-swiper>
              
              <hr>
              <div class="brands">
              <h1>Supporting Organizations</h1>
              <a href="https://store.steampowered.com/" target="_target"><img class="" src="./assets/img/steam.png" alt="Steam" /></a> 
              <a href="#" target="_target"><img class="" src="./assets/img/annapurna.png" alt="Anna Purna" /></a> 
              <a href="https://igda.org/" target="_target"><img class="" src="./assets/img/igda.png" alt="IGDA" /></a> 
              <a href="https://www.cartoonnetwork.com/" target="_target"><img class="" src="./assets/img/CN_GAMES.png" alt="Cartoon Network Games" /></a> <br> 
              
              <a href="#" target="_target"><img class="" src="./assets/img/sims4.png" alt="The Sims 4" /></a> 
              <a href="https://www.greenmangaming.com/" target="_target"><img class="" src="./assets/img/greenmangaming.png" alt="Green Man Gaming" /></a> 
              <a href="https://www.devolverdigital.com/" target="_target"><img class="" src="./assets/img/Devolver.png" alt="Devolver Digital" /></a>  
              <a href="https://grumpyfacestudios.com/" target="_target"><img class="" src="./assets/img/Grumpyface.png" alt="Grumpyface" /></a>
              </div>

            </div>
          </div>
        </div>
      </div>
      <Footer />
      <ModalStreamers
          v-if="showStreamerModal" 
          @close="closeStreamerInfo"
          :profile="this.profile"
        />
      <ModalGames
        v-if="showGameModal"
        @close="closeGameInfo"
        :game="this.game"
      />
    </main>
  </div>
</template>

<script>
import streamers from './assets/streamers.js'
import games from './assets/games.js'
import schedule from './assets/schedule.js'
//import schedule from './assets/schedule-demo.js'

import Nav from './components/Nav.vue'
import TwitchEmbed from './components/TwitchEmbed.vue'
import TwitchEmbedMobile from './components/TwitchEmbedMobile.vue'
import TwitchEmbedIpad from './components/TwitchEmbedIpad.vue'
import StreamersSwiper from './components/StreamersSwiper.vue'
import GamesSwiper from './components/GamesSwiper.vue'
import ScheduleSwiper from './components/ScheduleSwiper.vue'
import ModalStreamers from './components/StreamersModal.vue'
import ModalGames from './components/GamesModal.vue'
import Footer from './components/Footer.vue'

import axios from 'axios'
import SyncLoader from 'vue-spinner/src/SyncLoader.vue'
//import ClipLoader from 'vue-spinner/src/ClipLoader.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

import './assets/css/summerofpride.css'

export default {
  name: 'App',
  components: {
    Nav,
    TwitchEmbed,
    TwitchEmbedIpad,
    TwitchEmbedMobile,
    Footer,
    StreamersSwiper,
    GamesSwiper,
    ScheduleSwiper,
    ModalStreamers,
    ModalGames,
    SyncLoader,
    //ClipLoader
  },
  data() {
    return {
      animated: false,
      mobile: 0,
      streamersLoading: true,
      gamesLoading: true,
      scheduleLoading: true,
      loaderColor: '#51c6d6',
      loaderSize: '20px',
      clipLoaderColor: '#333',
      clipLoaderSize: '60px',
      showStreamerModal: false,
      showGameModal: false,
      schedule: [],
      schedules: schedule,
      profile: [],
      profiles: streamers,
      game: [],
      games: games,
      channel: 'wearemidboss',
      /*gamesNoB: gameList.filter(g => g.id != 66),*/
      errors:[],
      timezone: ''
    }
  },
  async created() {
    AOS.init({
      once: true,
      disable: 'mobile'
    })
    this.mobile = this.isMobile()
    this.timezone = this.getTimezone()
    try {
      //get streamer's info
      const response = await axios.get('https://api.sheety.co/6bbc237c1ab91b28fd038c18cce46217/soP2021ProcessedData/jsonStreamers')
      this.profiles = response.data.jsonStreamers
      this.shuffle(this.profiles)
      this.streamersLoading = false
    } catch (e) {
      this.errors.push(e)
    }
    try {
      //get game's info
      const response = await axios.get('https://api.sheety.co/6bbc237c1ab91b28fd038c18cce46217/soP2021ProcessedData/jsonGames')
      this.games = response.data.jsonGames
      this.shuffle(this.games)
      this.gamesLoading = false
    } catch (e) {
      this.errors.push(e)
    }
    try {
      //get schedule's info
      const response = await axios.get('https://api.sheety.co/6bbc237c1ab91b28fd038c18cce46217/soP2021ProcessedData/jsonSchedule')
      this.schedules = response.data.jsonSchedule
      this.scheduleLoading = false
    } catch (e) {
      this.errors.push(e)
    }
  },
  mounted() {
    //AOS.refresh;
  },
  watch: {
    showStreamerModal: function() {
      if(this.showStreamerModal){
        this.disableScrolling,
        console.log("disabled")
        return
      } else {
        this.enableScrolling,
        console.log("enabled")
        return
      }
    }
  },
  methods: {
    showStreamerInfo(id) {
      this.profile = this.profiles[id];
      this.showStreamerModal = true;
    },
    closeStreamerInfo() {
      this.showStreamerModal = false;
    },
    showGameInfo(id) {
      this.game = this.games[id];
      this.showGameModal = true;
    },
    closeGameInfo() {
      this.showGameModal = false;
    },
    shuffle(array) {
       var currentIndex = array.length, temporaryValue, randomIndex;

      // While there remain elements to shuffle...
      while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }

      return array;
    },
    getTimezone(){
      return Intl.DateTimeFormat().resolvedOptions().timeZone;
    },
    updateChannel(channel) {
        this.channel = channel
    },
    disableScrolling(){
      var x=window.scrollX;
      var y=window.scrollY;
      window.onscroll=function(){window.scrollTo(x, y);};
    },
    enableScrolling(){
      window.onscroll=function(){};
    },
    isMobile() {
      console.log('width: ' + window.innerWidth)
      if (window.innerWidth >= 768 && window.innerWidth <= 1200) {
        return 1
      } else if (window.innerWidth < 768) {
        return 2
      } else {
        return 0
      }
    },    
  }
}
</script>
<style>
  @import'~bootstrap/dist/css/bootstrap.css';

  .stop-scrolling {
    height: 100%;
    overflow: hidden;
  }
</style>