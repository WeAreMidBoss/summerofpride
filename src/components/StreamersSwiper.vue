<template>
	<div class="streamers" data-aos="slide-left">
		<swiper class="swiper" ref="mySwiper" :options="swiperOptions" data-toggle="modal" data-target="#modal-streamers">
			<swiper-slide v-for="(streamer, index) in profiles" class="swiper-slide" @click.native="showStreamerInfo(index)" :key="index" >
				<img :src="getImage(streamer.img)" />
				<span class="streamer-name">{{ streamer.name }}</span>
			</swiper-slide>
			<div class="streamers-pagination swiper-pagination" slot="pagination"></div>
		</swiper>
		<div class="streamers-button-prev swiper-button-prev" slot="button-prev"></div>
		<div class="streamers-button-next swiper-button-next" slot="button-next"></div>
	</div>
</template>
 
<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
	export default {
		name: 'StreamersSwiper',
		props: ['profiles'],
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
			getImage(path) {
				return require("@/assets/img/streamers/"+path)
			},
			showStreamerInfo(id) {
				this.$parent.showStreamerInfo(id);
			}
		}
	}
</script>
 
<style scoped>
</style>