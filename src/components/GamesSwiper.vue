<template>
	<div class="games" data-aos="slide-right">
        <swiper class="swiper" ref="swiperGames" :options="swiperOptions" data-toggle="modal" data-target="#modal-games">
            <swiper-slide v-for="(game, index) in games" class="swiper-slide" @click.native="showGameInfo(index)" :key="index" >
                <img :src="getImage(game.img)" />
                <span class="game-name">{{ game.name }}</span>
            </swiper-slide>        
            <div class="games-pagination swiper-pagination" slot="pagination"></div>  
        </swiper>
        <div class="games-button-prev swiper-button-prev" slot="button-prev"></div>
        <div class="games-button-next swiper-button-next" slot="button-next"></div>
    </div>
</template>
 
<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
	export default {
		name: 'GamesSwiper',
		props: ['games'],
		components: {
			Swiper,
			SwiperSlide
		},
		directives: {
			swiper: directive
		},
		data (){
			return {
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
			getImage(path) {
				return require("@/assets/img/games/"+path)
			},
			showGameInfo(id) {
				this.$parent.showGameInfo(id);
			}
		}
	}
</script>
 
<style scoped>
</style>