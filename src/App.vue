<template>
  <div id="app">
    <Nav />
    <main role="main">

      <div class="jumbotron" data-aos="zoom-in">
        <img class="d-none d-sm-block" src="./assets/img/SummerOfPride2020_Banner.jpg" alt="Summer of Pride" />
        <img class="d-sm-none" src="./assets/img/SummerOfPride2020_Mobile.jpg" alt="Summer of Pride" />
      </div>

      <div id="main-content">
        <div class="container">
          <div class="row">
            <div class="col-sm-12">
              <h1 class="text-center" data-aos="slide-up">Get Ready for the Summer of Pride!</h1>
              <p data-aos="slide-up">The Summer of Pride is an upcoming series of LGBTQIA+ (queer) streamers playing queer games, all throughout the month of June. These fun gaymers will be playing some of the best and most unique games that showcase positive representation of queer characters and stories. Tune in and discover some really great games, and follow some really fun streamer personalities.</p>

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

              <h2 class="text-center heading-streamers" data-aos="slide-up">STREAMERS</h2>
              
              <div class="streamers" data-aos="slide-left">
                <swiper class="swiper" ref="mySwiper" :options="swiperOptions" data-toggle="modal" data-target="#modal-streamers">
                    <swiper-slide v-for="(streamer, index) in profiles" class="swiper-slide" @click.native="showStreamerInfo(index)" :key="index" >
                      <img :src="streamer.img" />
                      <span class="streamer-name">{{ streamer.name }}</span>
                    </swiper-slide>
                    <div class="streamers-pagination swiper-pagination" slot="pagination"></div>
                </swiper>
                <div class="streamers-button-prev swiper-button-prev" slot="button-prev"></div>
                <div class="streamers-button-next swiper-button-next" slot="button-next"></div>
              </div>

              <h2 class="text-center heading-games" data-aos="slide-up">GAMES</h2>

              <div class="games" data-aos="slide-right">
                  <swiper class="swiper" ref="swiperGames" :options="swiperOptionsGames" data-toggle="modal" data-target="#modal-games">
                    <swiper-slide v-for="(game, index) in games" class="swiper-slide" @click.native="showGameInfo(index)" :key="index" >
                      <img :src="game.img" />
                      <span class="game-name">{{ game.name }}</span>
                    </swiper-slide>        
                    <div class="games-pagination swiper-pagination" slot="pagination"></div>  
                </swiper>
                <div class="games-button-prev swiper-button-prev" slot="button-prev"></div>
                <div class="games-button-next swiper-button-next" slot="button-next"></div>
                </div>


              <h2 class="text-center heading-games" data-aos="slide-up">SCHEDULE</h2>

              <div class="schedule" data-aos="slide-right">
                  <swiper class="swiper">
                    <swiper-slide v-for="(schedule, index) in schedules" class="swiper-slide" @click.native="showGameInfo(index)" :key="index" >
                      <span class="">Day: {{ schedule.day }}</span>
                      <table class="schedule-table">
                        <tbody>
                          <tr v-for="(block, index) in schedule.blocks" :class="isTime(block.b_start) ? 'active':''" :key="index">
                            <th class="schedule-hours" scope="row">{{ block.b_time }}</th>
                            <td><img :src="profiles[block.b_name].img" class="schedule-img schedule-profile img-fluid" /></td>
                            <td><img :src="games[block.b_game1].img" class="schedule-img schedule-games img-fluid" />
                            <img :src="games[block.b_game2].img" v-if="block.b_game2" class="schedule-img schedule-games img-fluid" /></td>
                            <td><div class="">Watch now!</div></td>
                          </tr>
                        </tbody>
                      </table>
                    </swiper-slide>        
                    <div class="" slot="pagination"></div>  
                </swiper>
                <div class="" slot="button-prev"></div>
                <div class="" slot="button-next"></div>
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
        v-if="isModalGameVisible"
        @close="closeGameInfo"
        :game="this.game"
      />
    </main>
  </div>
</template>

<script>
import streamers from './assets/streamers.js'
import gameList from './assets/games.js'
import scheduleTable from './assets/schedule.js'

import ModalStreamers from './components/ModalStreamers.vue'
import ModalGames from './components/ModalGames.vue'
import Nav from './components/Nav.vue'
import Footer from './components/Footer.vue'

import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

import AOS from 'aos'
import 'aos/dist/aos.css'

import './assets/css/summerofpride.css'

export default {
  name: 'App',
  components: {
    ModalStreamers,
    ModalGames,
    Nav,
    Footer,
    Swiper,
    SwiperSlide
  },
  directives: {
    swiper: directive
  },
  data() {
    return {
      animated: false,
      showStreamerModal: false,
      isModalGameVisible: false,
      schedule: [],
      schedules: scheduleTable,
      profile: [],
      profiles: streamers,
      game: [],
      games: gameList,
      swiperOptions: {
        autoplay: {
          delay: 3000,
          speed: 2500
        },
        loop: true,
        navigation: {
          nextEl: '.streamers-button-next',
          prevEl: '.streamers-button-prev'
        },
        pagination: {
          el: '.streamers-pagination',
          dynamicBullets: true,
          clickable: true
        },
        breakpoints: {
          1: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 30,
          }
        }
      },
      swiperOptionsGames: {
        autoplay: {
          delay: 3000,
          speed: 2500
        },
        loop: true,
        navigation: {
          nextEl: '.games-button-next',
          prevEl: '.games-button-prev'
        },
        pagination: {
          el: '.games-pagination',
          dynamicBullets: true,
          clickable: true
        },
        breakpoints: {
          575: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }
      }
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper
    }
  },
  created() {
    AOS.init({
      once: true,
      disable: 'mobile'
    }),
    this.shuffle(this.profiles),
    this.shuffle(this.games)
  },
  mounted() {
    console.log('Current Swiper instance object', this.swiper);
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
      this.showStreamerModal = true;
      /*let index = this.profiles.findIndex( filterProfile=> filterProfile['id'] === id);*/
      this.profile = this.profiles[id];
    },
    closeStreamerInfo() {
      this.showStreamerModal = false;
    },
    showGameInfo(id) {
      this.isModalGameVisible = true;
      this.game = this.games[id];
    },
    closeGameInfo() {
      this.isModalGameVisible = false;
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
    disableScrolling(){
      var x=window.scrollX;
      var y=window.scrollY;
      window.onscroll=function(){window.scrollTo(x, y);};
    },
    enableScrolling(){
      window.onscroll=function(){};
    },
    isTime(date1) {
      var date2 = new Date();
      var diference = date2.getTime() - date1.getTime();
      console.log(diference);
      if (diference < 3) {
        return true;
      } else {
        return false;
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