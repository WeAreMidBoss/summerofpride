<template>
  <div id="app">
    <Nav />
    <main role="main">
    <!-- DESKTOP JUMBOTRON -->
      <div class="jumbotron" data-aos="zoom-in">
        <img class="d-none d-sm-block" src="./assets/img/SeasonOfPride2022_Banner.jpg" alt="Season of Pride" />
        <img class="d-sm-none" src="./assets/img/SeasonOfPride2022_Mobile.jpg" alt="Season of Pride" />
      </div>

      <div id="main-content">
        <div class="container">
          <div class="row">
            <div class="col-sm-12">
              <h1 class="text-center" data-aos="slide-up">Get Ready for the Season of Pride!</h1>
              <p class="align-middle" data-aos="slide-up">The Season of Pride is a month-long event of LGBTQIA+ (queer) streamers playing queer games, throughout the month of July. 
                    These fun “gaymers” will be playing some of the best and most unique games that showcase positive representation of queer characters and stories. 
                    Tune in and discover some really great games, and follow some really fun streamer personalities.  Scheduled streams are listed below in the calendar, but our stream team will be fundraising throughout the month, every day. </p>
              <p data-aos="slide-up">This year, we’re also supporting eight wonderful charities—<a href="https://www.thetrevorproject.org/" target="_blank">The Trevor Project</a>, 
              <a href="https://www.translifeline.org/" target="_blank">Trans Lifeline</a>, <a href="https://gaymerx.org/" target="_blank">GaymerX</a>, 
              <a href="https://mermaidsuk.org.uk/" target="_target">Mermaids</a>, <a href="https://www.minus18.org.au/" target="_target">Minus18</a>, 
              <a href="https://www.blackgirlscode.com/" target="_target">Black Girls Code</a>, <a href="https://www.getwigi.com/" target="_target">Women In Games International</a>, 
              and <a href="https://girlswhocode.com/" target="_target">Girls Who Code</a>.</p> 
              
              <p data-aos="slide-up">Tune into any stream and share your support if you can.</p>
              
              <div align="center" class="charities row">
                <div class="charity col"><div><a href="https://gaymerx.org/" target="_target"><img class="" src="./assets/img/gaymerx.png" alt="GaymerX" /></a></div> <div align="center" class="donate"><a href="https://donate.tiltify.com/+season-of-pride-2022/season-of-pride-2022-gaymerx" target="_target">DONATE</a></div></div> 
                <div class="charity col"><div><a href="https://www.thetrevorproject.org/" target="_target"><img class="" src="./assets/img/trevorproject.png" alt="The Trevor Project" /></a></div> <div class="donate"><a href="https://donate.tiltify.com/+season-of-pride-2022/season-of-pride-2022-trevor-project" target="_target">DONATE</a></div></div> 
                <div class="charity col"><div><a href="https://www.translifeline.org/" target="_target"><img class="" src="./assets/img/translifeline.png" alt="Trans Lifeline" /></a></div> <div class="donate"><a href="https://donate.tiltify.com/+season-of-pride-2022/season-of-pride-2022-trans-lifeline" target="_target">DONATE</a></div></div> 
                <div class="charity col"><div><a href="https://mermaidsuk.org.uk/" target="_target"><img class="" src="./assets/img/mermaids.png" alt="Mermaids" /></a></div> <div align="center" class="donate"><a href="https://donate.tiltify.com/+season-of-pride-2022/season-of-pride-2022-mermaids" target="_target">DONATE</a></div></div> 
                <div class="charity col"><div><a href="https://www.minus18.org.au/" target="_target"><img class="" src="./assets/img/minus18.png" alt="Minus 18" /></a></div> <div class="donate"><a href="https://donate.tiltify.com/+season-of-pride-2022/season-of-pride-2022-minus-18" target="_target">DONATE</a></div></div> 
                <div class="charity col"><div><a href="https://www.blackgirlscode.com/" target="_target"><img class="" src="./assets/img/blackgirlscode.png" alt="Black Girls Code" /></a></div> <div class="donate"><a href="https://donate.tiltify.com/+season-of-pride-2022/season-of-pride-2022-black-girls-code" target="_target">DONATE</a></div></div> 
                <div class="charity col"><div><a href="https://www.getwigi.com/" target="_target"><img class="" src="./assets/img/wigi.png" alt="Womein In Games International" /></a></div> <div class="donate"><a href="https://donate.tiltify.com/+season-of-pride-2022/season-of-pride-wigi" target="_target">DONATE</a></div></div> 
                <div class="charity col"><div><a href="https://girlswhocode.com/" target="_target"><img class="" src="./assets/img/girlswhocode.png" alt="Girls Who Code" /></a></div> <div align="center" class="donate"><a href="https://donate.tiltify.com/+season-of-pride-2022/season-of-pride-girls-who-code" target="_target">DONATE</a></div></div> 
              </div>
              <hr>

              <!-- Begin Signup Form -->
              <div id="signup">
                <form action="https://sendy.midboss.com/subscribe" method="POST" accept-charset="utf-8">
                <label for="EMAIL"><h3>Stay Up-to-Date On the Event!</h3></label>
                <input type="email" placeholder="Email address" name="email" class="email" id="email" required/>
                <div style="display:none;">
                <label for="hp">HP</label><br/>
                <input type="text" name="hp" id="hp"/>
                </div>
                <input type="hidden" name="list" value="E9sjIVmjwtjVvvEpuPkZrg"/>
                <input type="hidden" name="subform" value="yes"/>
                <input type="submit" name="submit" id="submit" value="Subscribe" class="button"/>
                </form>
              </div>
              <!--End Signup Form-->

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
              <a href="https://annapurnainteractive.com/" target="_target"><img class="" src="./assets/img/annapurna.png" alt="Anna Purna" /></a> 
              <a href="https://igda.org/" target="_target"><img class="" src="./assets/img/igda.png" alt="IGDA" /></a> 
              <a href="https://www.cartoonnetwork.com/" target="_target"><img class="" src="./assets/img/CN_GAMES.png" alt="Cartoon Network Games" /></a> <br> 
              
              <a href="https://www.humblebundle.com/" target="_target"><img class="" src="./assets/img/humble.png" alt="Humble Bundle" /></a> 
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
import streamers from './assets/streamers.json'
import games from './assets/gamesFinal.json'
import schedule from './assets/scheduleFinal.json'
//import schedule from './assets/schedule-demo.js'

import Nav from './components/Nav.vue'
import StreamersSwiper from './components/StreamersSwiper.vue'
import GamesSwiper from './components/GamesSwiper.vue'
import ScheduleSwiper from './components/ScheduleSwiper.vue'
import ModalStreamers from './components/StreamersModal.vue'
import ModalGames from './components/GamesModal.vue'
import Footer from './components/Footer.vue'

//import axios from 'axios'
import SyncLoader from 'vue-spinner/src/SyncLoader.vue'
//import ClipLoader from 'vue-spinner/src/ClipLoader.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

import './assets/css/summerofpride.css'

export default {
  name: 'App',
  components: {
    Nav,
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
      const response =  require('./assets/streamersFinal.json')
      this.profiles = response.jsonStreamers
      this.shuffle(this.profiles)
      this.streamersLoading = false
    } catch (e) {
      this.errors.push(e)
      console.error(e)
    }
    try {
      //get game's info
      const response = require('./assets/gamesFinal.json')
      this.games = response.jsonGames
      this.shuffle(this.games)
      this.gamesLoading = false
    } catch (e) {
      this.errors.push(e)
      console.error(e)
    }
    try {
      //get schedule's info
      const response = require('./assets/scheduleFinal.json')
      this.schedules = response.jsonSchedule
      this.scheduleLoading = false
    } catch (e) {
      this.errors.push(e)
      console.error(e)
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