<template>
	<div class="streamers" data-aos="slide-left">
		<transition name="fade">
		<swiper v-if="!loading" class="swiper" ref="mySwiper" :options="swiperOptions" data-toggle="modal" data-target="#modal-streamers">
			<swiper-slide v-for="(streamer, index) in profiles" class="swiper-slide" @click.native="showStreamerInfo(index)" :key="index" >
				<img :src="`${publicPath}/streamers/${streamer.img}`" />
				<span class="streamer-name">{{ streamer.name }}</span>
			</swiper-slide>
			<div class="streamers-pagination swiper-pagination" slot="pagination"></div>
		</swiper>
		</transition>
		<div class="streamers-button-prev swiper-button-prev" slot="button-prev"></div>
		<div class="streamers-button-next swiper-button-next" slot="button-next"></div>
	</div>
</template>
 
<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
	export default {
		name: 'StreamersSwiper',
		props: ['profiles', 'loading'],
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
			}
		},
		methods: {
			showStreamerInfo(id) {
				this.$parent.showStreamerInfo(id);
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