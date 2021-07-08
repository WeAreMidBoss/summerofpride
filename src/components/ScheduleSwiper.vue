<template>
	<div class="schedule" data-aos="slide-up">
        <transition name="fade" v-on:enter="enter">
            <swiper v-if="!loading" class="swiper" ref="swiperSchedule" :options="swiperOptions" >
                <swiper-slide v-for="(block, index) in schedules" class="swiper-slide" :key="index" >
                    <span class="schedule-day">{{ getDay(block.b1Start) }}</span>
                    <table class="schedule-table">
                    <tbody>
                        <tr class="d-flex flex-column flex-xl-row flex-lg-row flex-md-row flex-sm-row justify-content-around justify-content-md-center justify-content-lg-center justify-content-xl-center h-100" :class="isTime(block.b1Start, getIdByName(block.b1Name)) ? 'active':''">
                            <th class="schedule-hours my-auto" scope="row">
                                 <div class="d-flex justify-content-center h-100">
                                    <div class="my-auto">
                                        <div>
                                             <span class="live-time text-center" :class="isTime(block.b1Start, getIdByName(block.b1Name)) ? 'active':''">LIVE NOW!</span>
                                        </div>
                                        <div class="d-flex flex-row flex-xl-column flex-lg-column flex-md-column flex-sm-column h-100">
                                            <div>
                                                <span class="start-time">{{ convertDateToLocal(block.b1Start) }} </span>
                                            </div>
                                            <div class="d-sm-none bullet">•</div>
                                            <div>
                                                <span class="end-time"> {{ calculateEndTime(block.b1Start) }}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </th>
                            <td @click="showStreamerInfo(getIdByName(block.b1Name))">
                                <div class="d-flex justify-content-center h-100">
                                    <div class="d-flex flex-column my-auto">
                                            <div><img :src="`${publicPath}streamers/${profiles[getIdByName(block.b1Name)].img}`" class="schedule-profile-img" /></div>
                                            <span class="schedule-streamer-name" >{{ profiles[getIdByName(block.b1Name)].name }}</span>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div class="d-flex justify-content-center h-100">
                                    <div class="d-flex flex-column my-auto">
                                        <div>
                                            <img @click="showGameInfo(getGameIdByName(block.b1Game1))" :src="`${publicPath}games/${games[getGameIdByName(block.b1Game1)].img}`" class="schedule-game-img" />
                                        </div>
                                        <div>
                                            <span class="schedule-game-name">{{ games[getGameIdByName(block.b1Game1)].name }}</span>
                                        </div>
                                        <div>
                                            <span v-if="block.b1Game2"><img @click="showGameInfo(getGameIdByName(block.b1_game2))" :src="`${publicPath}games/${games[getGameIdByName(block.b1Game2)].img}`" class="schedule-game-img schedule-game-two-img" /></span>
                                        </div>
                                        <div>
                                            <span v-if="block.b1Game2" class="schedule-game-name">{{ games[getGameIdByName(block.b1Game2)].name }}</span>
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr class="d-flex flex-column flex-xl-row flex-lg-row flex-md-row flex-sm-row justify-content-around justify-content-md-center justify-content-lg-center justify-content-xl-center h-100" :class="isTime(block.b2Start, getIdByName(block.b2Name)) ? 'active':''">
                            <th class="schedule-hours my-auto" scope="row">
                                 <div class="d-flex justify-content-center h-100">
                                    <div class="my-auto">
                                        <div>
                                             <span class="live-time text-center" :class="isTime(block.b2Start, getIdByName(block.b2Name)) ? 'active':''">LIVE NOW!</span>
                                        </div>
                                        <div class="d-flex flex-row flex-xl-column flex-lg-column flex-md-column flex-sm-column h-100">
                                            <div>
                                                <span class="start-time">{{ convertDateToLocal(block.b2Start) }} </span>
                                            </div>
                                            <div class="d-sm-none bullet">•</div>
                                            <div>
                                                <span class="end-time"> {{ calculateEndTime(block.b2Start) }}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </th>
                            <td @click="showStreamerInfo(getIdByName(block.b2Name))">
                                <div class="d-flex justify-content-center h-100">
                                    <div class="d-flex flex-column my-auto">
                                            <div><img :src="`${publicPath}streamers/${profiles[getIdByName(block.b2Name)].img}`" class="schedule-profile-img" /></div>
                                            <span class="schedule-streamer-name" >{{ profiles[getIdByName(block.b2Name)].name }}</span>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div class="d-flex justify-content-center h-100">
                                    <div class="d-flex flex-column my-auto">
                                        <div>
                                            <img @click="showGameInfo(getGameIdByName(block.b2Game1))" :src="`${publicPath}games/${games[getGameIdByName(block.b2Game1)].img}`" class="schedule-game-img" />
                                        </div>
                                        <div>
                                            <span class="schedule-game-name">{{ games[getGameIdByName(block.b2Game1)].name }}</span>
                                        </div>
                                        <div>
                                            <span v-if="block.b2Game2"><img @click="showGameInfo(getGameIdByName(block.b2_game2))" :src="`${publicPath}games/${games[getGameIdByName(block.b2Game2)].img}`" class="schedule-game-img schedule-game-two-img" /></span>
                                        </div>
                                        <div>
                                            <span v-if="block.b2Game2" class="schedule-game-name">{{ games[getGameIdByName(block.b2Game2)].name }}</span>
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr class="d-flex flex-column flex-xl-row flex-lg-row flex-sm-row flex-md-row justify-content-around justify-content-md-center justify-content-lg-center justify-content-xl-center h-100" :class="isTime(block.b3Start, getIdByName(block.b3Name)) ? 'active':''">
                            <th class="schedule-hours my-auto" scope="row">
                                 <div class="d-flex justify-content-center h-100">
                                    <div class="my-auto">
                                        <div>
                                             <span class="live-time text-center" :class="isTime(block.b3Start, getIdByName(block.b3Name)) ? 'active':''">LIVE NOW!</span>
                                        </div>
                                        <div class="d-flex flex-row flex-xl-column flex-lg-column flex-md-column flex-sm-column h-100">
                                            <div>
                                                <span class="start-time">{{ convertDateToLocal(block.b3Start) }} </span>
                                            </div>
                                            <div class="d-sm-none bullet">•</div>
                                            <div>
                                                <span class="end-time"> {{ calculateEndTime(block.b3Start) }}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </th>
                            <td @click="showStreamerInfo(getIdByName(block.b3Name))">
                                <div class="d-flex justify-content-center h-100">
                                    <div class="d-flex flex-column my-auto">
                                            <div><img :src="`${publicPath}streamers/${profiles[getIdByName(block.b3Name)].img}`" class="schedule-profile-img" /></div>
                                            <span class="schedule-streamer-name" >{{ profiles[getIdByName(block.b3Name)].name }}</span>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div class="d-flex justify-content-center h-100">
                                    <div class="d-flex flex-column my-auto">
                                        <div>
                                            <img @click="showGameInfo(getGameIdByName(block.b3Game1))" :src="`${publicPath}games/${games[getGameIdByName(block.b3Game1)].img}`" class="schedule-game-img" />
                                        </div>
                                        <div>
                                            <span class="schedule-game-name">{{ games[getGameIdByName(block.b3Game1)].name }}</span>
                                        </div>
                                        <div>
                                            <span v-if="block.b3Game2"><img @click="showGameInfo(getGameIdByName(block.b3_game2))" :src="`${publicPath}games/${games[getGameIdByName(block.b3Game2)].img}`" class="schedule-game-img schedule-game-two-img" /></span>
                                        </div>
                                        <div>
                                            <span v-if="block.b3Game2" class="schedule-game-name">{{ games[getGameIdByName(block.b3Game2)].name }}</span>
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr class="d-flex flex-column flex-xl-row flex-lg-row flex-sm-row flex-md-row justify-content-around justify-content-md-center justify-content-lg-center justify-content-xl-center h-100" :class="isTime(block.b4Start, getIdByName(block.b4Name)) ? 'active':''">
                            <th class="schedule-hours my-auto" scope="row">
                                 <div class="d-flex justify-content-center h-100">
                                    <div class="my-auto">
                                        <div>
                                             <span class="live-time text-center" :class="isTime(block.b4Start, getIdByName(block.b4Name)) ? 'active':''">LIVE NOW!</span>
                                        </div>
                                        <div class="d-flex flex-row flex-xl-column flex-lg-column flex-md-column flex-sm-column h-100">
                                            <div>
                                                <span class="start-time">{{ convertDateToLocal(block.b4Start) }} </span>
                                            </div>
                                            <div class="d-sm-none bullet">•</div>
                                            <div>
                                                <span class="end-time"> {{ calculateEndTime(block.b4Start) }}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </th>
                            <td @click="showStreamerInfo(getIdByName(block.b4Name))">
                                <div class="d-flex justify-content-center h-100">
                                    <div class="d-flex flex-column my-auto">
                                            <div><img :src="`${publicPath}streamers/${profiles[getIdByName(block.b4Name)].img}`" class="schedule-profile-img" /></div>
                                            <span class="schedule-streamer-name" >{{ profiles[getIdByName(block.b4Name)].name }}</span>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div class="d-flex justify-content-center h-100">
                                    <div class="d-flex flex-column my-auto">
                                        <div>
                                            <img @click="showGameInfo(getGameIdByName(block.b4Game1))" :src="`${publicPath}games/${games[getGameIdByName(block.b4Game1)].img}`" class="schedule-game-img" />
                                        </div>
                                        <div>
                                            <span class="schedule-game-name">{{ games[getGameIdByName(block.b4Game1)].name }}</span>
                                        </div>
                                        <div>
                                            <span v-if="block.b4Game2"><img @click="showGameInfo(getGameIdByName(block.b4_game2))" :src="`${publicPath}games/${games[getGameIdByName(block.b4Game2)].img}`" class="schedule-game-img schedule-game-two-img" /></span>
                                        </div>
                                        <div>
                                            <span v-if="block.b4Game2" class="schedule-game-name">{{ games[getGameIdByName(block.b4Game2)].name }}</span>
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr class="d-flex flex-column flex-xl-row flex-lg-row flex-sm-row flex-md-row justify-content-around justify-content-md-center justify-content-lg-center justify-content-xl-center h-100" :class="isTime(block.b5Start, getIdByName(block.b5Name)) ? 'active':''">
                            <th class="schedule-hours my-auto" scope="row">
                                 <div class="d-flex justify-content-center h-100">
                                    <div class="my-auto">
                                        <div>
                                             <span class="live-time text-center" :class="isTime(block.b5Start, getIdByName(block.b5Name)) ? 'active':''">LIVE NOW!</span>
                                        </div>
                                        <div class="d-flex flex-row flex-xl-column flex-lg-column flex-md-column flex-sm-column h-100">
                                            <div>
                                                <span class="start-time">{{ convertDateToLocal(block.b5Start) }} </span>
                                            </div>
                                            <div class="d-sm-none bullet">•</div>
                                            <div>
                                                <span class="end-time"> {{ calculateEndTime(block.b5Start) }}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </th>
                            <td @click="showStreamerInfo(getIdByName(block.b5Name))">
                                <div class="d-flex justify-content-center h-100">
                                    <div class="d-flex flex-column my-auto">
                                            <div><img :src="`${publicPath}streamers/${profiles[getIdByName(block.b5Name)].img}`" class="schedule-profile-img" /></div>
                                            <span class="schedule-streamer-name" >{{ profiles[getIdByName(block.b5Name)].name }}</span>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div class="d-flex justify-content-center h-100">
                                    <div class="d-flex flex-column my-auto">
                                        <div>
                                            <img @click="showGameInfo(getGameIdByName(block.b5Game1))" :src="`${publicPath}games/${games[getGameIdByName(block.b5Game1)].img}`" class="schedule-game-img" />
                                        </div>
                                        <div>
                                            <span class="schedule-game-name">{{ games[getGameIdByName(block.b5Game1)].name }}</span>
                                        </div>
                                        <div>
                                            <span v-if="block.b5Game2"><img @click="showGameInfo(getGameIdByName(block.b5_game2))" :src="`${publicPath}games/${games[getGameIdByName(block.b5Game2)].img}`" class="schedule-game-img schedule-game-two-img" /></span>
                                        </div>
                                        <div>
                                            <span v-if="block.b5Game2" class="schedule-game-name">{{ games[getGameIdByName(block.b5Game2)].name }}</span>
                                        </div>
                                    </div>
                                </div>
                            </td>
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
                localDate = localDate.toLocaleString('en-US', { hour: '2-digit', hour12: true });

                return localDate;
            },
            calculateEndTime(dateString) {
                var utcDate = dateString;  // ISO-8601 formatted date returned from server
                var localDate = new Date(utcDate);
                localDate.setHours(localDate.getHours() + 3);
                localDate = localDate.toLocaleString('en-US', { hour: '2-digit', hour12: true });

                return localDate;
            },
            getDay(dateString) {
                var utcDate = dateString;  // ISO-8601 formatted date returned from server
                var localDate = new Date(utcDate);
                localDate = localDate.toLocaleString('en-US', { day: 'numeric', weekday: 'long', month: 'long' });
               
                return localDate;
            },
            getIdByName(n) {
            let obj = this.profiles.findIndex(obj => obj.name == n);
                if (obj !== -1) {
                    return obj;
                } else {
                    return 0;
                }
            },
            getGameIdByName(n) {
            let obj = this.games.findIndex(obj => obj.name == n);
                if (obj !== -1) {
                    return obj;
                } else {
                    return 0;
                }
            },
			getInitialSlide(date) {
                var date1 = new Date(date);
                var date2 = new Date();
                if (date1.getMonth() === date2.getMonth()) {
                    return date2.getDate();
                } else {
                    return 1;
                }
            },
			isTime(date, streamerId) { // ISO-8601 formatted date returned from server
                var date1 = new Date(date);
                var date2 = new Date();
                var difference = date2.getTime() - date1.getTime();
                difference = Math.floor((difference / (1000 * 60 * 60)) % 24);
                
                if (this.getDay(date1) == this.getDay(date2) && difference >= 0 && difference < 3) {
                    var newChannel = this.profiles[streamerId].twitch;
                    newChannel = newChannel.split('/')[3];
                    console.log('Twitch channel: '+ newChannel);
                    this.$emit('newChannel', newChannel);
                    return true;
                } else {
                    return false;
                }
            },
			isLongName(name) { // ISO-8601 formatted date returned from server
                if (name.length > 14) {
                    return true;
                } else {
                    return false;
                }
            }
		}
	}
</script>
 
<style scoped>
    /*** Animation styles for transitions ***/
    .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to {
    opacity: 0;
    }

    /*** Active stream styling***/

    .active {
        background-color:#f4496a!important;
        border-color: transparent!important;
    }
    .active .start-time {
        color: #fff;
    }
    .active .end-time {
        color: #fff;
    }
    .active .schedule-game-name {
        background-color:#fff!important;
        color: #f4496a!important;
    }
    .active .schedule-streamer-name {
        background-color:#fff!important;
        color: #f4496a!important;
    }
    .active .bullet {
        color: #fff;
    }
    .live-time {
        display: none;
        color: #f5e362;
        font-size: 1.6em;
    }
    .live-time.active {
        display: block;
    }
    .live-time::after {
        display: block;
        content: '';
        width: 0;
        height: 0;
        margin: -15px auto 15px;

        border-style: solid;
        border-width: 10px 80px 0 80px;
        border-color: #f5e462 transparent transparent transparent;
    }

    /*** Regular schedule styling***/
    .schedule-table {
        width: 80%;
        margin: 0 auto;
        font-family: 'Bebas Neue', sans-serif;
        font-size:30px;
        color:#ea276d;
    }

    .schedule-day {
        font-size:45px;
        font-family: 'Bebas Neue', sans-serif;
        color:#ea276d;
    }
    .schedule-table tr {
        padding: 10px 0;
    }
    .schedule-hours{
        white-space: nowrap;
        font-weight: normal;
        text-align: right;
        padding-right: 40px!important;
    }

    .start-time {
        color: #f77166;
    }
    .end-time {
        color: #f4496a;
        
    }
    .bullet {
        color: #f77166;
        font-family: Arial, Helvetica, sans-serif;
        margin: -5px 3px 0;
    }
    .start-time, .end-time {
        font-size: 3.5em;
        line-height: 0.8;
        min-width: 141px;
    }
    .schedule-game-img{
        width: auto;
        height: 180px;
        margin: 0 auto;
    }

    .schedule-game-two-img{
        margin: 0 auto;
    }

    .schedule-profile-img{
        width: 120px;
        height: auto;
    }
    .schedule-twitch-logo {
        width: 75px!important;
        height: auto!important;
        margin-bottom: 20px;

    }
    .schedule-watch-now{
        margin-right: 50px;
    }

    .schedule-streamer-name,.schedule-game-name{
        text-align: center;
        color:#fff;
        background-color: #F37664;
        font-family: 'Montserrat', sans-serif;
        font-size: 14px;
        margin:5px 0;
    }
    .schedule-game-name, .schedule-streamer-name {
        display:block;
        box-sizing: border-box;
        padding: 0 5px;
    }
    .schedule-table tr {
        border-bottom: 5px solid transparent;
    }
    .schedule-table tr:nth-child(3) .schedule-hours, .schedule-table tr:nth-child(4) .schedule-hours {
        margin-left: 45px;
        
    }
    .schedule-table tr:first-child {border-color: #f5cd49;}
    .schedule-table tr:nth-child(2) {border-color: #f8874c;}
    .schedule-table tr:nth-child(3) {border-color: #f77166;}
    .schedule-table tr:nth-child(4) {border-color: #f4496a;}
    
    /*.schedule-table tr:nth-child(even) {background-color: #fff;}*/

@media (min-width: 768px) and (max-width: 1200px) {
    .schedule-table tr:nth-child(3) .schedule-hours, .schedule-table tr:nth-child(4) .schedule-hours {
        margin-left: 23px;
        
    }
    .schedule-hours{
        padding-right: 0!important;
    }
    .start-time, .end-time {
        font-size: 2em;
    }
}
@media (min-width: 576px) and (max-width: 768px) {
    .schedule-table tr:nth-child(3) .schedule-hours, .schedule-table tr:nth-child(4) .schedule-hours {
        margin-left: 23px;
        
    }
    .schedule-table {
        width: 100%;
    }
    .schedule-table tr {
        width:100%;
        padding: 10px 0;
    }
    .schedule-hours {
        text-align: right;
        margin-right: 10px;
    }
    .schedule-profile-img {
        width: auto;
        height: 150px;
    }
    .schedule-game-img {
        height: 150px;
    }
    .schedule .swiper-button-prev, .schedule  .swiper-button-next {
        top: 3.8%;
    }
}

@media (max-width: 575px) {
    .schedule-table tr:nth-child(3) .schedule-hours, .schedule-table tr:nth-child(4) .schedule-hours {
        margin-left: 0;
        
    }
    .start-time, .active > .schedule-hours > .start-time, .end-time, .active > .schedule-hours > .end-time  {
        font-size: 1.2em;
    }
    .schedule-table {
        width: 100%;
    }
    .schedule-table tr {
        width:100%;
        padding: 20px 0;
    }
    .schedule-hours{
        text-align: center;
        padding-right: 0!important;
    }
    .start-time,.end-time {
        min-width: auto;
    }
    .schedule-game-img{
        height: 90px;
    }
    .schedule .swiper-button-prev, .schedule  .swiper-button-next {
        top: 1.7%;
    }
}
</style>