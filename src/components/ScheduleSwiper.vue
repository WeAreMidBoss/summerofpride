<template>
	<div class="schedule" data-aos="slide-up">
        <transition name="fade" v-on:enter="enter">
            <swiper v-if="!loading" class="swiper" ref="swiperSchedule" :options="swiperOptions" >
                <swiper-slide v-for="(block, index) in schedules" class="swiper-slide" :key="index" >
                    <span class="schedule-day">{{ getDay(block.b1Start) }}</span>
                    <table class="schedule-table">
                    <tbody>
                        <tr :class="isTime(block.b1Start) ? 'active':''">
                            <th class="schedule-hours" scope="row">{{ convertDateToLocal(block.b1Start) + " - " + calculateEndTime(block.b1Start) }}</th>
                            <td @click="showStreamerInfo(getIdByName(block.b1Name))"><img :src="`${publicPath}streamers/${profiles[getIdByName(block.b1Name)].img}`" class="schedule-profile-img" />
                            <span class="schedule-streamer-name">{{ profiles[getIdByName(block.b1Name)].name }}</span></td>
                            <td><img @click="showGameInfo(getGameIdByName(block.b1Game1))" :src="`${publicPath}games/${games[getGameIdByName(block.b1Game1)].img}`" class="schedule-game-img" />
                            <span class="schedule-game-name">{{ games[getGameIdByName(block.b1Game1)].name }}</span>
                            <span v-if="block.b1Game2"><img @click="showGameInfo(getGameIdByName(block.b1_game2))" :src="`${publicPath}games/${games[getGameIdByName(block.b1Game2)].img}`" class="schedule-game-img schedule-game-two-img" /></span>
                            <span v-if="block.b1Game2" class="schedule-game-name">{{ games[getGameIdByName(block.b1Game2)].name }}</span></td>
                        </tr>
                        <tr :class="isTime(block.b2Start) ? 'active':''">
                            <th class="schedule-hours" scope="row">{{ convertDateToLocal(block.b2Start) + " - " + calculateEndTime(block.b2Start) }}</th>
                            <td @click="showStreamerInfo(getIdByName(block.b2Name))"><img :src="`${publicPath}streamers/${profiles[getIdByName(block.b2Name)].img}`" class="schedule-profile-img" />
                            <span class="schedule-streamer-name">{{ profiles[getIdByName(block.b2Name)].name }}</span></td>
                            <td><img @click="showGameInfo(getGameIdByName(block.b2Game1))" :src="`${publicPath}games/${games[getGameIdByName(block.b2Game1)].img}`" class="schedule-game-img" />
                            <span class="schedule-game-name">{{ games[getGameIdByName(block.b2Game1)].name }}</span>
                            <span v-if="block.b2Game2"><img @click="showGameInfo(getGameIdByName(block.b2Game2))" :src="`${publicPath}games/${games[getGameIdByName(block.b2Game2)].img}`" class="schedule-game-img schedule-game-two-img" /></span>
                            <span v-if="block.b2Game2" class="schedule-game-name">{{ games[getGameIdByName(block.b2Game2)].name }}</span></td>
                        </tr>
                        <tr :class="isTime(block.b3Start) ? 'active':''">
                            <th class="schedule-hours" scope="row">{{ convertDateToLocal(block.b3Start) + " - " + calculateEndTime(block.b3Start) }}</th>
                            <td @click="showStreamerInfo(getIdByName(block.b3Name))"><img :src="`${publicPath}streamers/${profiles[getIdByName(block.b3Name)].img}`" class="schedule-profile-img" />
                            <span class="schedule-streamer-name">{{ profiles[getIdByName(block.b3Name)].name }}</span></td>
                            <td><img @click="showGameInfo(getGameIdByName(block.b3Game1))" :src="`${publicPath}games/${games[getGameIdByName(block.b3Game1)].img}`" class="schedule-game-img" />
                            <span class="schedule-game-name">{{ games[getGameIdByName(block.b3Game1)].name }}</span>
                            <span v-if="block.b3Game2"><img @click="showGameInfo(getGameIdByName(block.b3_game2))" :src="`${publicPath}games/${games[getGameIdByName(block.b3Game2)].img}`" class="schedule-game-img schedule-game-two-img" /></span>
                            <span v-if="block.b3Game2" class="schedule-game-name">{{ games[getGameIdByName(block.b3Game2)].name }}</span></td>
                        </tr>
                        <tr :class="isTime(block.b4Start) ? 'active':''">
                            <th class="schedule-hours" scope="row">{{ convertDateToLocal(block.b4Start) + " - " + calculateEndTime(block.b4Start) }}</th>
                            <td @click="showStreamerInfo(getIdByName(block.b4Name))"><img :src="`${publicPath}streamers/${profiles[getIdByName(block.b4Name)].img}`" class="schedule-profile-img" />
                            <span class="schedule-streamer-name">{{ profiles[getIdByName(block.b4Name)].name }}</span></td>
                            <td><img @click="showGameInfo(getGameIdByName(block.b4Game1))" :src="`${publicPath}games/${games[getGameIdByName(block.b4Game1)].img}`" class="schedule-game-img" />
                            <span class="schedule-game-name">{{ games[getGameIdByName(block.b4Game1)].name }}</span>
                            <span v-if="block.b4Game2"><img @click="showGameInfo(getGameIdByName(block.b4_game2))" :src="`${publicPath}games/${games[getGameIdByName(block.b4Game2)].img}`" class="schedule-game-img schedule-game-two-img" /></span>
                            <span v-if="block.b4Game2" class="schedule-game-name">{{ games[getGameIdByName(block.b4Game2)].name }}</span></td>
                        </tr>
                        <tr :class="isTime(block.b5Start) ? 'active':''">
                            <th class="schedule-hours" scope="row">{{ convertDateToLocal(block.b5Start) + " - " + calculateEndTime(block.b5Start) }}</th>
                            <td @click="showStreamerInfo(getIdByName(block.b5Name))"><img :src="`${publicPath}streamers/${profiles[getIdByName(block.b5Name)].img}`" class="schedule-profile-img" />
                            <span class="schedule-streamer-name">{{ profiles[getIdByName(block.b5Name)].name }}</span></td>
                            <td><img @click="showGameInfo(getGameIdByName(block.b5Game1))" :src="`${publicPath}games/${games[getGameIdByName(block.b5Game1)].img}`" class="schedule-game-img" />
                            <span class="schedule-game-name">{{ games[getGameIdByName(block.b5Game1)].name }}</span>
                            <span v-if="block.b5Game2"><img @click="showGameInfo(getGameIdByName(block.b5Game2))" :src="`${publicPath}games/${games[getGameIdByName(block.b5Game2)].img}`" class="schedule-game-img schedule-game-two-img" /></span>
                            <span v-if="block.b5Game2" class="schedule-game-name">{{ games[getGameIdByName(block.b5Game2)].name }}</span></td>
                        </tr>
                    </tbody>
                    </table>
                </swiper-slide>
                <div class="schedule-pagination swiper-pagination" slot="pagination"></div>        
            </swiper>
        </transition>
        <div class="schedule-button-prev swiper-button-prev" slot="button-prev"></div>
        <div class="schedule-button-next swiper-button-next" slot="button-next"></div>
    </div>
</template>
 
<script>

import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

	export default {
		name: 'ScheduleSwiper',
		props: ['schedules', 'profiles', 'games', 'loading'],
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
                initialSlideSet: false,
                initialSlide: 0,
                startingDate: '2021-07-01 9:00:00-07:00', // first day of the event
				swiperOptions: {
                    loop: true,
                    navigation: {
                    nextEl: '.schedule-button-next',
                    prevEl: '.schedule-button-prev'
                    }
                }
			}
		},
        computed: {
            swiper() {
                return this.$refs.swiperSchedule.$swiper
            }
        },
        mounted: function() {
            
        },
		methods: {
            enter() {
                // move to slide according to current date
                if (this.initialSlideSet == false) {
                    this.initialSlide = this.getInitialSlide(this.startingDate);
                    this.swiper.slideTo(this.initialSlide); 
                    console.log ('initialSlide:' + this.initialSlide); 
                    /*setTimeout(() => { 
                        this.swiper.slideTo(this.initialSlide); 
                        console.log ('initialSlide:' + this.initialSlide); 
                        }, 2000)
                        */
                    
                }
                
            },
			showStreamerInfo(id) {
				this.$parent.showStreamerInfo(id);
			},
			showGameInfo(id) {
				this.$parent.showGameInfo(id);
			},
            convertDateToLocal(dateString) {
                var utcDate = dateString;  // ISO-8601 formatted date returned from server
                var localDate = new Date(utcDate);
                if(localDate == 'Invalid Date'){
                    utcDate = Date.parse(utcDate.replace("T"," "));
                    localDate = new Date(utcDate);
                }
                localDate = localDate.toLocaleString('en-US', { hour: '2-digit', hour12: true });
                return localDate;
            },
            calculateEndTime(dateString) {
                var utcDate = dateString;  // ISO-8601 formatted date returned from server
                var localDate = new Date(utcDate);
                if(localDate == 'Invalid Date'){
                    utcDate = Date.parse(utcDate.replace("T"," "));
                    localDate = new Date(utcDate);
                }
                localDate.setHours(localDate.getHours() + 3);
                localDate = localDate.toLocaleString('en-US', { hour: '1-digit', hour12: true });
                return localDate;
            },
            getDay(dateString) {
                var utcDate = dateString;  // ISO-8601 formatted date returned from server
                var localDate = new Date(utcDate);
                if(localDate == 'Invalid Date'){
                    utcDate = Date.parse(utcDate.replace("T"," "));
                    localDate = new Date(utcDate);
                }
                localDate = localDate.toLocaleString('en-US', { day: 'numeric', weekday: 'long', month: 'long' });
               
                return localDate;
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
			getInitialSlide(date) {
                var date1 = new Date(date);
                var date2 = new Date();
                var difference = date2.getTime() - date1.getTime();
                difference = Math.round(difference / (1000 * 3600 * 24));
                //console.log('initialSlide:'+difference);
                this.initialSlideSet = true;
                if (difference >= 0 && difference <= 32) {
                    return difference+1;
                } else {
                    return 1;
                }
            },
			isTime(date) { // ISO-8601 formatted date returned from server
                var date1 = new Date(date);
                if(date1 == 'Invalid Date'){
                    date = Date.parse(date.replace("T"," "));
                    date1 = new Date(date);
                    console.log('date: '+date1);
                }
                var date2 = new Date();
                var difference = date2.getTime() - date1.getTime();
                console.log('difference in milli: ' + difference);
                difference = Math.floor((difference / (1000 * 60 * 60)) % 24);
                console.log('difference hh: '+difference);
                if (this.getDay(date1) == this.getDay(date2) && difference >= 0 && difference < 3) {
                    return true;
                } else {
                    return false;
                }
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
    .active {
        /*background-color:blue!important;*/
    }
</style>