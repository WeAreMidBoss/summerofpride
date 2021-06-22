<template>
	<div class="games" data-aos="slide-right">
        <transition name="fade">
            <swiper v-if="!loading" class="swiper" ref="swiperGames" :options="swiperOptions" data-toggle="modal" data-target="#modal-games">
                <swiper-slide v-for="(game, index) in games" class="swiper-slide" @click.native="showGameInfo(index)" :key="index" >
                    <img :src="`${publicPath}/games/${game.img}`" />
                    <span class="game-name">{{ game.name }}</span>
                </swiper-slide>        
                <div class="games-pagination swiper-pagination" slot="pagination"></div>  
            </swiper>
        </transition>
        <div class="games-button-prev swiper-button-prev" slot="button-prev"></div>
        <div class="games-button-next swiper-button-next" slot="button-next"></div>
    </div>
</template>
 
<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
	export default {
		name: 'GamesSwiper',
		props: ['games', 'loading'],
		components: {
			Swiper,
			SwiperSlide
		},
		directives: {
			swiper: directive
		},
		data (){
			return {
                publicPath: process.env.BASE_URL,
				swiperOptions: {
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
                    },
                },
			}
		},
		methods: {
			showGameInfo(id) {
				this.$parent.showGameInfo(id);
			}
		}
	}
</script>
 
<style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>