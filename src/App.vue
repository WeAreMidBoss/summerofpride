<template>
  <div id="app">
    <header>
      <Nav />
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

              <h3 class="text-center">STREAMERS</h3>
              
              <div class="streamers">
                <div class="swiper-wrapper">
                <swiper class="swiper" ref="mySwiper" :options="swiperOptions">
                    <swiper-slide v-for="streamer in profiles" class="swiper-slide" @click-slide="showModal(streamer.id)" :key="streamer.id" >
                      <img :src="streamer.img" />
                    </swiper-slide>
                  <div class="swiper-pagination" slot="pagination"></div>
                </swiper>
                </div>
              </div>

              <p>...and many more!</p>

              <h3 class="text-center">GAMES</h3>

              <div class="row streamers">
                <div class="col-md-2 col-4 col-md-offset-1"><img class="alignnone size-full img-fluid  aligncenter" src="imgs/Game2.jpg"/></div>
                <div class="col-md-2 col-4"><img class="alignnone size-full img-fluid aligncenter" src="imgs/Game13.jpg"/></div>
                <div class="col-md-2 col-4"><img class="alignnone size-full img-fluid aligncenter" src="imgs/Game4.jpg"/></div>
                <div class="col-md-2 col-4"><img class="alignnone size-full img-fluid aligncenter" src="imgs/Game14.jpg"/></div>
                <div class="col-md-2 col-4"><img class="alignnone size-full img-fluid aligncenter" src="imgs/Game8.jpg"/></div>
                <div class="col-md-2 col-4"><img class="alignnone size-full img-fluid aligncenter" src="imgs/Game7.jpg"/></div>
                </div>

              <p>...and many more!</p>

              <!-- Begin MailChimp Signup Form -->
                <div id="mc_embed_signup">
                <form action="https://midboss.us5.list-manage.com/subscribe/post?u=56b65e1f2b3ba5e696ffa9e29&amp;id=748c34fc41" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                    <div id="mc_embed_signup_scroll">
                  <label for="mce-EMAIL"><h2>Stay Up-to-Date On the Event!</h2></label>
                  <input type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" placeholder="email address" required>
                    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_56b65e1f2b3ba5e696ffa9e29_748c34fc41" tabindex="-1" value=""></div>
                    <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
                    </div>
                </form>
                </div>
                <!--End mc_embed_signup-->
              
          
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
    </main>
  </div>
</template>

<script>
import streamers from './assets/streamers.js'
import './assets/css/summerofpride.css'

import Modal from './components/Modal.vue'
import Nav from './components/Nav.vue'
import Footer from './components/Footer.vue'

import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'


export default {
  name: 'App',
  components: {
    Modal,
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
      profile: [],
      profiles: streamers,
      swiperOptions: {
        autoplay: {
          delay: 2500,
        },
        slidesPerView: 6,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
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
    showModal(id) {
      this.isModalVisible = true;
      this.profile = this.profiles[id];
    },
    closeModal() {
      this.isModalVisible = false;
    }
  }
}
</script>
<style>
  @import'~bootstrap/dist/css/bootstrap.css';
</style>