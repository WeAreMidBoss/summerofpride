<template>
	<div class="schedule" data-aos="slide-up">
        <swiper class="swiper" ref="swiperSchedule" :options="swiperOptions" >
            <swiper-slide v-for="(block, index) in schedules" class="swiper-slide" :key="index" >
                <span class="schedule-day">{{ block.day }}</span>
                <table class="schedule-table">
                <tbody>
                    <tr :class="isTime(block.b1Start) ? 'active':''">
                        <th class="schedule-hours" scope="row">{{ block.b1Time }}</th>
                        <td @click="showStreamerInfo(getIdByName(block.b1Name))"><img :src="getStreamerImage(profiles[getIdByName(block.b1Name)].img)" class="schedule-profile-img" />
                        <span class="schedule-streamer-name">{{ profiles[getIdByName(block.b1Name)].name }}</span></td>
                        <td><img @click="showGameInfo(getGameIdByName(block.b1Game1))" :src="getGameImage(games[getGameIdByName(block.b1Game1)].img)" class="schedule-game-img" />
                        <span class="schedule-game-name">{{ games[getGameIdByName(block.b1Game1)].name }}</span>
                        <span v-if="block.b1Game2"><img @click="showGameInfo(getGameIdByName(block.b1_game2))" :src="getGameImage(games[getGameIdByName(block.b1Game2)].img)" class="schedule-game-img schedule-game-two-img" /></span>
                        <span v-if="block.b1Game2" class="schedule-game-name">{{ games[getGameIdByName(block.b1Game2)].name }}</span></td>
                    </tr>
                    <tr :class="isTime(block.b2Start) ? 'active':''">
                        <th class="schedule-hours" scope="row">{{ block.b2Time }}</th>
                        <td @click="showStreamerInfo(getIdByName(block.b2Name))"><img :src="getStreamerImage(profiles[getIdByName(block.b2Name)].img)" class="schedule-profile-img" />
                        <span class="schedule-streamer-name">{{ profiles[getIdByName(block.b2Name)].name }}</span></td>
                        <td><img @click="showGameInfo(getGameIdByName(block.b2Game1))" :src="getGameImage(games[getGameIdByName(block.b2Game1)].img)" class="schedule-game-img" />
                        <span class="schedule-game-name">{{ games[getGameIdByName(block.b2Game1)].name }}</span>
                        <span v-if="block.b2Game2"><img @click="showGameInfo(getGameIdByName(block.b2Game2))" :src="getGameImage(games[getGameIdByName(block.b2Game2)].img)" class="schedule-game-img schedule-game-two-img" /></span>
                        <span v-if="block.b2Game2" class="schedule-game-name">{{ games[getGameIdByName(block.b2Game2)].name }}</span></td>
                    </tr>
                    <tr :class="isTime(block.b3Start) ? 'active':''">
                        <th class="schedule-hours" scope="row">{{ block.b3Time }}</th>
                        <td @click="showStreamerInfo(getIdByName(block.b3Name))"><img :src="getStreamerImage(profiles[getIdByName(block.b3Name)].img)" class="schedule-profile-img" />
                        <span class="schedule-streamer-name">{{ profiles[getIdByName(block.b3Name)].name }}</span></td>
                        <td><img @click="showGameInfo(getGameIdByName(block.b3Game1))" :src="getGameImage(games[getGameIdByName(block.b3Game1)].img)" class="schedule-game-img" />
                        <span class="schedule-game-name">{{ games[getGameIdByName(block.b3Game1)].name }}</span>
                        <span v-if="block.b3Game2"><img @click="showGameInfo(getGameIdByName(block.b3_game2))" :src="getGameImage(games[getGameIdByName(block.b3Game2)].img)" class="schedule-game-img schedule-game-two-img" /></span>
                        <span v-if="block.b3Game2" class="schedule-game-name">{{ games[getGameIdByName(block.b3Game2)].name }}</span></td>
                    </tr>
                    <tr :class="isTime(block.b4Start) ? 'active':''">
                        <th class="schedule-hours" scope="row">{{ block.b4Time }}</th>
                        <td @click="showStreamerInfo(getIdByName(block.b4Name))"><img :src="getStreamerImage(profiles[getIdByName(block.b4Name)].img)" class="schedule-profile-img" />
                        <span class="schedule-streamer-name">{{ profiles[getIdByName(block.b4Name)].name }}</span></td>
                        <td><img @click="showGameInfo(getGameIdByName(block.b4Game1))" :src="getGameImage(games[getGameIdByName(block.b4Game1)].img)" class="schedule-game-img" />
                        <span class="schedule-game-name">{{ games[getGameIdByName(block.b4Game1)].name }}</span>
                        <span v-if="block.b4Game2"><img @click="showGameInfo(getGameIdByName(block.b4_game2))" :src="getGameImage(games[getGameIdByName(block.b4Game2)].img)" class="schedule-game-img schedule-game-two-img" /></span>
                        <span v-if="block.b4Game2" class="schedule-game-name">{{ games[getGameIdByName(block.b4Game2)].name }}</span></td>
                    </tr>
                    <tr :class="isTime(block.b5Start) ? 'active':''">
                        <th class="schedule-hours" scope="row">{{ block.b5Time }}</th>
                        <td @click="showStreamerInfo(getIdByName(block.b5Name))"><img :src="getStreamerImage(profiles[getIdByName(block.b5Name)].img)" class="schedule-profile-img" />
                        <span class="schedule-streamer-name">{{ profiles[getIdByName(block.b5Name)].name }}</span></td>
                        <td><img @click="showGameInfo(getGameIdByName(block.b5Game1))" :src="getGameImage(games[getGameIdByName(block.b5Game1)].img)" class="schedule-game-img" />
                        <span class="schedule-game-name">{{ games[getGameIdByName(block.b5Game1)].name }}</span>
                        <span v-if="block.b5Game2"><img @click="showGameInfo(getGameIdByName(block.b5Game2))" :src="getGameImage(games[getGameIdByName(block.b5Game2)].img)" class="schedule-game-img schedule-game-two-img" /></span>
                        <span v-if="block.b5Game2" class="schedule-game-name">{{ games[getGameIdByName(block.b5Game2)].name }}</span></td>
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
				this.$parent.showGameInfo(id);
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
                var date1 = new Date(date);
                var date2 = new Date();
                var diference = date2.getTime() - date1.getTime();
                console.log(diference);
                if (diference < 3) {
                    return true;
                } else {
                    return false;
                }
            }
		}
	}
</script>
 
<style scoped>
</style>