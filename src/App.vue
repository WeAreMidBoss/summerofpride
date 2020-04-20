<template>
  <div id="app">
    <Nav />
    <header>
    </header>
    <main role="main">

      <div class="jumbotron">
        <img class="d-none d-sm-block" src="./assets/img/SummerOfPride2020_Banner.jpg" alt="Summer of Pride" />
      </div>

      <div id="main-content">
        <div class="container">
          <div class="row">
            <div class="col-sm-12">
              <h2 class="text-center">Get Ready for the Summer of Pride!</h2>
              <p>The Summer of Pride is an upcoming series of LGBTQIA+ (queer) streamers playing queer games, all throughout the month of June. These fun gaymers will be playing some of the best and most unique games that showcase positive representation of queer characters and stories. Tune in and discover some really great games, and follow some really fun streamer personalities.</p>

              <!-- Begin MailChimp Signup Form -->
              <div class="col-sm-12 mail-list-container">
                <div id="mc_embed_signup">
                <form action="https://midboss.us5.list-manage.com/subscribe/post?u=56b65e1f2b3ba5e696ffa9e29&amp;id=748c34fc41" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                    <div id="mc_embed_signup_scroll">
                  <label for="mce-EMAIL"><h3>Stay Up-to-Date On the Event!</h3></label>
                  <input type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" placeholder="email address" required>
                    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_56b65e1f2b3ba5e696ffa9e29_748c34fc41" tabindex="-1" value=""></div>
                    <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button">
                    </div>
                </form>
                </div>
              </div>
              <!--End mc_embed_signup-->

              <h2 class="text-center">STREAMERS</h2>
              
              <div class="streamers">
                <div class="swiper-wrapper">
                <swiper class="swiper" ref="mySwiper" :options="swiperOptions" @clickSlide="showModal">
                    <swiper-slide v-for="streamer in profiles" class="swiper-slide" :key="streamer.id" >
                      <img :src="streamer.img" />
                    </swiper-slide>
                </swiper>
                </div>
              </div>

              <h2 class="text-center">GAMES</h2>

              <div class="games">
                  <swiper class="swiper" ref="swiperGames" :options="swiperOptionsGames" @clickSlide="showModalGame">
                    <swiper-slide v-for="(g, index) in games" class="swiper-slide" :key="index" >
                      <img :src="g.img" />
                    </swiper-slide>
                </swiper>
                </div>

            </div>
          </div>
        </div>
      </div>
      <Footer />
      <Modal
          v-show="isModalVisible"
          @close="closeModal"
          :profile="this.profile"
        />
        <ModalGames
          v-show="isModalGameVisible"
          @close="closeModalGame"
          :game="this.game"
        />
    </main>
  </div>
</template>

<script>
import streamers from './assets/streamers.js'
import gameList from './assets/games.js'
import './assets/css/summerofpride.css'

import Modal from './components/Modal.vue'
import ModalGames from './components/ModalGames.vue'
import Nav from './components/Nav.vue'
import Footer from './components/Footer.vue'

import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'


export default {
  name: 'App',
  components: {
    Modal,
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
      isModalVisible: false,
      isModalGameVisible: false,
      profile: [],
      profiles: streamers,
      game: [],
      games: gameList,
      swiperOptions: {
        autoplay: {
          delay: 2500,
        },
        slidesPerView: 6,
        spaceBetween: 30,
        //loop: true
      },
      swiperOptionsGames: {
        autoplay: {
          delay: 2500,
        },
        slidesPerView: 3,
        spaceBetween: 30,
        //loop: true
      }
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper
    }
  },
  mounted() {
    console.log('Current Swiper instance object', this.swiper)
    /*this.swiper.slideTo(1, 1000, false)*/
  },
  methods: {
    showModal() {
      console.log(this.$refs.mySwiper.$swiper.clickedIndex);
      this.isModalVisible = true;
      this.profile = this.profiles[this.$refs.mySwiper.$swiper.clickedIndex];
    },
    closeModal() {
      this.isModalVisible = false;
    },
    showModalGame() {
      console.log(this.$refs.swiperGames.$swiper.clickedIndex);
      this.isModalGameVisible = true;
      this.game = this.games[this.$refs.swiperGames.$swiper.clickedIndex];
    },
    closeModalGame() {
      this.isModalGameVisible = false;
    }
  }
}
</script>
<style>
  @import'~bootstrap/dist/css/bootstrap.css';
</style>