<template>
	<div class="schedule" data-aos="slide-up">
        <swiper class="swiper" ref="swiperSchedule" :options="swiperOptions" >
            <swiper-slide v-for="(block, index) in schedules" class="swiper-slide" :key="index" >
                <span class="schedule-day">{{ block.day }}</span>
                <table class="schedule-table">
                <tbody>
                    <tr>
                    <th class="schedule-hours" scope="row">{{ block.b1_time }}</th>
                    <td @click="showStreamerInfo(getIdByName(block.b1_name))"><img :src="getStreamerImage(profiles[getIdByName(block.b1_name)].img)" class="schedule-profile-img" />
                    <span class="schedule-streamer-name">{{ profiles[getIdByName(block.b1_name)].name }}</span></td>
                    <td><img @click="showGameInfo(getGameIdByName(block.b1_game1))" :src="getGameImage(games[getGameIdByName(block.b1_game1)].img)" class="schedule-game-img" />
                    <span class="schedule-game-name">{{ games[getGameIdByName(block.b1_game1)].name }}</span>
                    <span v-if="block.b1_game2"><img @click="showGameInfo(getGameIdByName(block.b1_game2))" :src="getGameImage(games[getGameIdByName(block.b1_game2)].img)" class="schedule-game-img schedule-game-two-img" /></span>
                    <span v-if="block.b1_game2" class="schedule-game-name">{{ games[getGameIdByName(block.b1_game2)].name }}</span></td>
                    <td><div class="schedule-watch-now"><a :href="profiles[getIdByName(block.b1_name)].twitch" target="_blank">Watch now!<br /></a></div></td>
                    </tr>
                    <tr>
                    <th class="schedule-hours" scope="row">{{ block.b2_time }}</th>
                    <td @click="showStreamerInfo(getIdByName(block.b2_name))"><img :src="getStreamerImage(profiles[getIdByName(block.b2_name)].img)" class="schedule-profile-img" />
                    <span class="schedule-streamer-name">{{ profiles[getIdByName(block.b2_name)].name }}</span></td>
                    <td><img @click="showGameInfo(getGameIdByName(block.b2_game1))" :src="getGameImage(games[getGameIdByName(block.b2_game1)].img)" class="schedule-game-img" />
                    <span class="schedule-game-name">{{ games[getGameIdByName(block.b2_game1)].name }}</span>
                    <span v-if="block.b2_game2"><img @click="showGameInfo(getGameIdByName(block.b2_game2))" :src="getGameImage(games[getGameIdByName(block.b2_game2)].img)" class="schedule-game-img schedule-game-two-img" /></span>
                    <span v-if="block.b2_game2" class="schedule-game-name">{{ games[getGameIdByName(block.b2_game2)].name }}</span></td>
                    <td><div class="schedule-watch-now"><a :href="profiles[getIdByName(block.b2_name)].twitch" target="_blank">Watch now!<br /></a></div></td>
                    </tr>
                    <tr>
                    <th class="schedule-hours" scope="row">{{ block.b3_time }}</th>
                    <td @click="showStreamerInfo(getIdByName(block.b3_name))"><img :src="getStreamerImage(profiles[getIdByName(block.b3_name)].img)" class="schedule-profile-img" />
                    <span class="schedule-streamer-name">{{ profiles[getIdByName(block.b3_name)].name }}</span></td>
                    <td><img @click="showGameInfo(getGameIdByName(block.b3_game1))" :src="getGameImage(games[getGameIdByName(block.b3_game1)].img)" class="schedule-game-img" />
                    <span class="schedule-game-name">{{ games[getGameIdByName(block.b3_game1)].name }}</span>
                    <span v-if="block.b3_game2"><img @click="showGameInfo(getGameIdByName(block.b3_game2))" :src="getGameImage(games[getGameIdByName(block.b3_game2)].img)" class="schedule-game-img schedule-game-two-img" /></span>
                    <span v-if="block.b3_game2" class="schedule-game-name">{{ games[getGameIdByName(block.b3_game2)].name }}</span></td>
                    <td><div class="schedule-watch-now"><a :href="profiles[getIdByName(block.b3_name)].twitch" target="_blank">Watch now!<br /></a></div></td>
                    </tr>
                    <tr>
                    <th class="schedule-hours" scope="row">{{ block.b4_time }}</th>
                    <td @click="showStreamerInfo(getIdByName(block.b4_name))"><img :src="getStreamerImage(profiles[getIdByName(block.b4_name)].img)" class="schedule-profile-img" />
                    <span class="schedule-streamer-name">{{ profiles[getIdByName(block.b4_name)].name }}</span></td>
                    <td><img @click="showGameInfo(getGameIdByName(block.b4_game1))" :src="getGameImage(games[getGameIdByName(block.b4_game1)].img)" class="schedule-game-img" />
                    <span class="schedule-game-name">{{ games[getGameIdByName(block.b4_game1)].name }}</span>
                    <span v-if="block.b4_game2"><img @click="showGameInfo(getGameIdByName(block.b4_game2))" :src="getGameImage(games[getGameIdByName(block.b4_game2)].img)" class="schedule-game-img schedule-game-two-img" /></span>
                    <span v-if="block.b4_game2" class="schedule-game-name">{{ games[getGameIdByName(block.b4_game2)].name }}</span></td>
                    <td><div class="schedule-watch-now"><a :href="profiles[getIdByName(block.b4_name)].twitch" target="_blank">Watch now!<br /></a></div></td>
                    </tr>
                    <tr>
                    <th class="schedule-hours" scope="row">{{ block.b5_time }}</th>
                    <td @click="showStreamerInfo(getIdByName(block.b5_name))"><img :src="getStreamerImage(profiles[getIdByName(block.b5_name)].img)" class="schedule-profile-img" />
                    <span class="schedule-streamer-name">{{ profiles[getIdByName(block.b5_name)].name }}</span></td>
                    <td><img @click="showGameInfo(getGameIdByName(block.b5_game1))" :src="getGameImage(games[getGameIdByName(block.b5_game1)].img)" class="schedule-game-img" />
                    <span class="schedule-game-name">{{ games[getGameIdByName(block.b5_game1)].name }}</span>
                    <span v-if="block.b5_game2"><img @click="showGameInfo(getGameIdByName(block.b5_game2))" :src="getGameImage(games[getGameIdByName(block.b5_game2)].img)" class="schedule-game-img schedule-game-two-img" /></span>
                    <span v-if="block.b5_game2" class="schedule-game-name">{{ games[getGameIdByName(block.b5_game2)].name }}</span></td>
                    <td><div class="schedule-watch-now"><a :href="profiles[getIdByName(block.b5_name)].twitch" target="_blank">Watch now!<br /></a></div></td>
                    </tr>
                </tbody>
                </table>
            </swiper-slide>
            <div class="schedule-pagination swiper-pagination" slot="pagination"></div>        
        </swiper>
        <div class="schedule-button-prev swiper-button-prev" slot="button-prev"></div>
        <div class="schedule-button-next swiper-button-next" slot="button-next"></div>
    </div>
</template>
 
<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
	export default {
		name: 'ScheduleSwiper',
		props: ['schedules', 'profiles', 'games'],
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
                    loop: true,
                    navigation: {
                    nextEl: '.schedule-button-next',
                    prevEl: '.schedule-button-prev'
                    }
                }
			}
		},
		methods: {
			getStreamerImage(path) {
				return require("@/assets/img/streamers/"+path)
			},
            getGameImage(path) {
				return require("@/assets/img/games/"+path)
			},
			showStreamerInfo(id) {
				this.$parent.showStreamerInfo(id);
			},
			showGameInfo(id) {
				this.$parent.showStreamerInfo(id);
			},
            getIdByName(n) {
            let obj = this.profiles.findIndex(obj => obj.name == n);
            //console.log("Profile",obj);
                if (obj !== -1) {
                    return obj;
                } else {
                    return 0;
                }
            },
            getGameIdByName(n) {
            let obj = this.games.findIndex(obj => obj.name == n);
            //console.log("Game",obj);
                if (obj !== -1) {
                    return obj;
                } else {
                    return 0;
                }
            },
			isTime(date) {
				this.$parent.isTime(date);
			}
		}
	}
</script>
 
<style scoped>
</style>