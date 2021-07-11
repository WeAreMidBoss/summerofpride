<template>
	<div class="schedule" data-aos="slide-up">
        <transition name="fade" v-on:enter="enter">
            <swiper v-if="!loading" class="swiper" ref="swiperSchedule" :options="swiperOptions" >
                <swiper-slide v-for="(block, index) in schedules" class="swiper-slide" :key="index" >
                    <span class="schedule-day">{{ getDay(block.b1Start) }}</span>
                    <table class="schedule-table">
                    <tbody>
                        <tr :class="isTime(block.b1Start, getIdByName(block.b1Name)) ? 'active':''">
                            <td class="schedule-hours">
                                <div class="d-flex flex-column justify-content-between h-100">
                                    <div class="flex-row justify-content-center align-items-center" :class="isTime(block.b1Start, getIdByName(block.b1Name)) ? 'active d-flex':'d-none'">
                                        <div class="live-time d-flex flex-column justify-content-center" :class="isTime(block.b1Start, getIdByName(block.b1Name)) ? 'active':''">
                                            <div>STREAM LIVE</div>
                                            <div>TUNE IN NOW!</div>
                                        </div>
                                        <a class="active-twitch-logo" :href="profiles[getIdByName(block.b1Name)].twitch" target="_blank"><img src="../assets/img/Twitch-logo.svg" alt="Twitch Logo" /></a>
                                    </div>
                                    <div class="d-flex flex-row align-items-center justify-content-center">
                                        <div class="d-flex flex-column">
                                            <span class="start-time">{{ convertDateToLocal(block.b1Start) }} </span>
                                            <span class="end-time"> {{ calculateEndTime(block.b1Start) }}</span>
                                        </div>
                                        <div class="d-flex p-2 flex-column align-items-center" @click="showStreamerInfo(getIdByName(block.b1Name))">
                                            <img class="schedule-profile-img" :src="`${publicPath}streamers/${profiles[getIdByName(block.b1Name)].img}`" />
                                            <span class="schedule-streamer-name" >{{ profiles[getIdByName(block.b1Name)].name }}</span>
                                        </div>
                                        <div class="d-flex flex-column align-items-center">
                                                <img @click="showGameInfo(getGameIdByName(block.b1Game1))" :src="`${publicPath}games/${games[getGameIdByName(block.b1Game1)].img}`" class="schedule-game-img img-fluid" />
                                                <span class="schedule-game-name">{{ games[getGameIdByName(block.b1Game1)].name }}</span>
                                                <span v-if="block.b1Game2"><img @click="showGameInfo(getGameIdByName(block.b1_game2))" :src="`${publicPath}games/${games[getGameIdByName(block.b1Game2)].img}`" class="schedule-game-img img-fluid" /></span>
                                                <span v-if="block.b1Game2" class="schedule-game-name">{{ games[getGameIdByName(block.b1Game2)].name }}</span>
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr :class="isTime(block.b2Start, getIdByName(block.b2Name)) ? 'active':''">
                            <td class="schedule-hours">
                                <div class="d-flex flex-column justify-content-between h-100">
                                    <div class="flex-row justify-content-center align-items-center" :class="isTime(block.b2Start, getIdByName(block.b2Name)) ? 'active d-flex':'d-none'">
                                        <div class="p-2 live-time d-flex flex-column justify-content-center" :class="isTime(block.b2Start, getIdByName(block.b2Name)) ? 'active':''">
                                            <div>STREAM LIVE</div>
                                            <div>TUNE IN NOW!</div>
                                        </div>
                                        <a class="active-twitch-logo" :href="profiles[getIdByName(block.b2Name)].twitch" target="_blank"><img src="../assets/img/Twitch-logo.svg" alt="Twitch Logo" /></a>
                                    </div>
                                    <div class="d-flex flex-row align-items-center justify-content-center">
                                        <div class="d-flex flex-column">
                                            <span class="start-time">{{ convertDateToLocal(block.b2Start) }} </span>
                                            <span class="end-time"> {{ calculateEndTime(block.b2Start) }}</span>
                                        </div>
                                        <div class="d-flex p-2 flex-column align-items-center" @click="showStreamerInfo(getIdByName(block.b2Name))">
                                            <img class="schedule-profile-img" :src="`${publicPath}streamers/${profiles[getIdByName(block.b2Name)].img}`" />
                                            <span class="schedule-streamer-name" >{{ profiles[getIdByName(block.b2Name)].name }}</span>
                                        </div>
                                        <div class="d-flex flex-column align-items-center">
                                                <img @click="showGameInfo(getGameIdByName(block.b2Game1))" :src="`${publicPath}games/${games[getGameIdByName(block.b2Game1)].img}`" class="schedule-game-img img-fluid" />
                                                <span class="schedule-game-name">{{ games[getGameIdByName(block.b2Game1)].name }}</span>
                                                <span v-if="block.b2Game2"><img @click="showGameInfo(getGameIdByName(block.b2_game2))" :src="`${publicPath}games/${games[getGameIdByName(block.b2Game2)].img}`" class="schedule-game-img img-fluid" /></span>
                                                <span v-if="block.b2Game2" class="schedule-game-name">{{ games[getGameIdByName(block.b2Game2)].name }}</span>
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr :class="isTime(block.b3Start, getIdByName(block.b3Name)) ? 'active':''">
                            <td class="schedule-hours">
                                <div class="d-flex flex-column justify-content-between h-100">
                                    <div class="flex-row justify-content-center align-items-center" :class="isTime(block.b3Start, getIdByName(block.b3Name)) ? 'active d-flex':'d-none'">
                                        <div class="p-2 live-time d-flex flex-column justify-content-center" :class="isTime(block.b3Start, getIdByName(block.b3Name)) ? 'active':''">
                                            <div>STREAM LIVE</div>
                                            <div>TUNE IN NOW!</div>
                                        </div>
                                        <a class="active-twitch-logo" :href="profiles[getIdByName(block.b3Name)].twitch" target="_blank"><img src="../assets/img/Twitch-logo.svg" alt="Twitch Logo" /></a>
                                    </div>
                                    <div class="d-flex flex-row align-items-center justify-content-center">
                                        <div class="d-flex flex-column">
                                            <span class="start-time">{{ convertDateToLocal(block.b3Start) }} </span>
                                            <span class="end-time"> {{ calculateEndTime(block.b3Start) }}</span>
                                        </div>
                                        <div class="d-flex p-2 flex-column align-items-center" @click="showStreamerInfo(getIdByName(block.b3Name))">
                                            <img class="schedule-profile-img" :src="`${publicPath}streamers/${profiles[getIdByName(block.b3Name)].img}`" />
                                            <span class="schedule-streamer-name" >{{ profiles[getIdByName(block.b3Name)].name }}</span>
                                        </div>
                                        <div class="d-flex flex-column align-items-center">
                                                <img @click="showGameInfo(getGameIdByName(block.b3Game1))" :src="`${publicPath}games/${games[getGameIdByName(block.b3Game1)].img}`" class="schedule-game-img img-fluid" />
                                                <span class="schedule-game-name">{{ games[getGameIdByName(block.b3Game1)].name }}</span>
                                                <span v-if="block.b3Game2"><img @click="showGameInfo(getGameIdByName(block.b3_game2))" :src="`${publicPath}games/${games[getGameIdByName(block.b3Game2)].img}`" class="schedule-game-img img-fluid" /></span>
                                                <span v-if="block.b3Game2" class="schedule-game-name">{{ games[getGameIdByName(block.b3Game2)].name }}</span>
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr :class="isTime(block.b4Start, getIdByName(block.b4Name)) ? 'active':''">
                            <td class="schedule-hours">
                                <div class="d-flex flex-column justify-content-between h-100">
                                    <div class="flex-row justify-content-center align-items-center" :class="isTime(block.b4Start, getIdByName(block.b4Name)) ? 'active d-flex':'d-none'">
                                        <div class="p-2 live-time d-flex flex-column justify-content-center" :class="isTime(block.b4Start, getIdByName(block.b4Name)) ? 'active':''">
                                            <div>STREAM LIVE</div>
                                            <div>TUNE IN NOW!</div>
                                        </div>
                                        <a class="active-twitch-logo" :href="profiles[getIdByName(block.b4Name)].twitch" target="_blank"><img src="../assets/img/Twitch-logo.svg" alt="Twitch Logo" /></a>
                                    </div>
                                    <div class="d-flex flex-row align-items-center justify-content-center">
                                        <div class="d-flex flex-column">
                                            <span class="start-time">{{ convertDateToLocal(block.b4Start) }} </span>
                                            <span class="end-time"> {{ calculateEndTime(block.b4Start) }}</span>
                                        </div>
                                        <div class="d-flex p-2 flex-column align-items-center" @click="showStreamerInfo(getIdByName(block.b4Name))">
                                            <img class="schedule-profile-img" :src="`${publicPath}streamers/${profiles[getIdByName(block.b4Name)].img}`" />
                                            <span class="schedule-streamer-name" >{{ profiles[getIdByName(block.b4Name)].name }}</span>
                                        </div>
                                        <div class="d-flex flex-column align-items-center">
                                                <img @click="showGameInfo(getGameIdByName(block.b4Game1))" :src="`${publicPath}games/${games[getGameIdByName(block.b4Game1)].img}`" class="schedule-game-img img-fluid" />
                                                <span class="schedule-game-name">{{ games[getGameIdByName(block.b4Game1)].name }}</span>
                                                <span v-if="block.b4Game2"><img @click="showGameInfo(getGameIdByName(block.b4_game2))" :src="`${publicPath}games/${games[getGameIdByName(block.b4Game2)].img}`" class="schedule-game-img img-fluid" /></span>
                                                <span v-if="block.b4Game2" class="schedule-game-name">{{ games[getGameIdByName(block.b4Game2)].name }}</span>
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr :class="isTime(block.b5Start, getIdByName(block.b5Name)) ? 'active':''">
                            <td class="schedule-hours">
                                <div class="d-flex flex-column justify-content-between h-100">
                                    <div class="flex-row justify-content-center align-items-center" :class="isTime(block.b5Start, getIdByName(block.b5Name)) ? 'active d-flex':'d-none'">
                                        <div class="p-2 live-time d-flex flex-column justify-content-center" :class="isTime(block.b5Start, getIdByName(block.b5Name)) ? 'active':''">
                                            <div>STREAM LIVE</div>
                                            <div>TUNE IN NOW!</div>
                                        </div>
                                        <a class="active-twitch-logo" :href="profiles[getIdByName(block.b5Name)].twitch" target="_blank"><img src="../assets/img/Twitch-logo.svg" alt="Twitch Logo" /></a>
                                    </div>
                                    <div class="d-flex flex-row align-items-center justify-content-center">
                                        <div class="d-flex flex-column">
                                            <span class="start-time">{{ convertDateToLocal(block.b5Start) }} </span>
                                            <span class="end-time"> {{ calculateEndTime(block.b5Start) }}</span>
                                        </div>
                                        <div class="d-flex p-2 flex-column align-items-center" @click="showStreamerInfo(getIdByName(block.b5Name))">
                                            <img class="schedule-profile-img" :src="`${publicPath}streamers/${profiles[getIdByName(block.b5Name)].img}`" />
                                            <span class="schedule-streamer-name" >{{ profiles[getIdByName(block.b5Name)].name }}</span>
                                        </div>
                                        <div class="d-flex flex-column align-items-center">
                                                <img @click="showGameInfo(getGameIdByName(block.b5Game1))" :src="`${publicPath}games/${games[getGameIdByName(block.b5Game1)].img}`" class="schedule-game-img img-fluid" />
                                                <span class="schedule-game-name">{{ games[getGameIdByName(block.b5Game1)].name }}</span>
                                                <span v-if="block.b5Game2"><img @click="showGameInfo(getGameIdByName(block.b5_game2))" :src="`${publicPath}games/${games[getGameIdByName(block.b5Game2)].img}`" class="schedule-game-img img-fluid" /></span>
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
                initialSlide: 1,
                startingDate: '2021-07-01', // first day of the event
				swiperOptions: {
                    initialSlide: 0,
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
                var difference = date2.getTime() - date1.getTime();
                difference = difference / ((1000 * 60 * 60) * 24);
                difference = Math.round(difference);
                console.log(difference);
                if (difference >= 0 && difference <= 31) {
                    return difference;
                } else {
                    return 10;
                }
                /*if (date1.getMonth() === date2.getMonth()) {
                    return date2.getDate();
                } else {
                    return 1;
                }*/
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
    .live-time-container {

    }
     .live-time-container.active {
 
    }
    .live-time {
        margin-right: 20px;
        color: #f5e362;
        font-size: 1.6em;
        line-height: 0.9;
        position:relative;
    }
    .live-time.active {
    }
    .live-time::after {
        display: block;
        content: '';
        width: 0;
        height: 0;
        position:absolute;
        right:-20px;
        top:15%;
        border-style: solid;
        border-width: 35px 0 35px 20px;
        border-color: transparent transparent transparent #f5e462;
    }
    .live-time div:first-child {
        font-size:1.05em;
    }
    .active-twitch-logo {
        width: 60%;
    }
    /*** Regular schedule styling***/
    .schedule-table {
        width: 100%;
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
        width: auto;
        height: 180px;
    }
    .schedule-twitch-logo {
        flex-basis: 50%;
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
        width: 100%;
        display:block;
        box-sizing: border-box;
        padding: 0 5px;
    }
    .schedule-table tr {
        border-bottom: 5px solid transparent;
    }
    .schedule-table tr:first-child {border-color: #f5cd49;}
    .schedule-table tr:nth-child(2) {border-color: #f8874c;}
    .schedule-table tr:nth-child(3) {border-color: #f77166;}
    .schedule-table tr:nth-child(4) {border-color: #f4496a;}

    .open-twitch {
        margin: 0;
        padding: 0;
        display: block;
    }
    
    /*.schedule-table tr:nth-child(even) {background-color: #fff;}*/

@media (max-width: 1200px) {
    .start-time, .end-time {
        font-size: 2em;
    }
}
@media (max-width: 1024px) {
    .live-time  {
        font-size: 1em;
        margin-right:15px;
    }
    .live-time:after {
        right:-15px;
        top:12%;
        border-style: solid;
        border-width: 25px 0 25px 15px;
        border-color: transparent transparent transparent #f5e462;
    }
    .schedule-profile-img {
        height: 110px;
    }
    .schedule-game-img {
        height: 110px;
    }
    .schedule-streamer-name, .schedule-game-name {
        display:block;
        font-size: 0.4em;
    }
}
@media (max-width: 768px) {

    .live-time  {
        font-size: 1.2em;
    }
    .live-time:after {
        right:-20px;
        top:5%;
        border-style: solid;
        border-width: 35px 0 35px 20px;
        border-color: transparent transparent transparent #f5e462;
    }
    .schedule-table {
        width: 100%;
    }
    .schedule-table tr {
        width:100%;
        padding: 10px 0;
    }
    .schedule-day {
        font-size: 2em;
    }
    .schedule-hours {
        text-align: right;
    }
    .schedule-profile-img {
        width: auto;
        height: 120px;
    }
    .schedule-game-img {
        height: 120px;
    }
    .schedule .swiper-button-prev, .schedule  .swiper-button-next {
        top: 3.8%;
    }
}

@media (max-width: 575px) {
    .schedule-table tr:nth-child(3) .schedule-hours, .schedule-table tr:nth-child(4) .schedule-hours {
        margin-left: 0;
        
    }
    .start-time, .active > .schedule-hours > .start-time, .end-time, .active > .schedule-hours > .end-time, .live-time  {
        font-size: 0.8em;
    }
    .live-time  {
        margin-right:10px;
        font-size: 0.5em;
    }
    .live-time:after {
        right:-5px;
        top:15%;
        border-style: solid;
        border-width: 15px 0 15px 10px;
        border-color: transparent transparent transparent #f5e462;
    }
    .swiper {
        width: 90%;
    }
    .schedule-table {
        width: 100%;
    }
    .schedule-table tr {
        width:100%;
        padding:0;
    }
    .schedule-hours{
        margin-top: -5px;
    }
    .start-time,.end-time, .bullet {
    }
    .schedule-profile-img {
        width: auto;
        height: 60px;
    }
    .schedule-game-img {
        height: 60px;
    }
    .schedule-game-name, .schedule-streamer-name {
        font-size: 0.25em;
        padding: 0 1px;
        white-space: initial;
    }
    .schedule .swiper-button-prev, .schedule  .swiper-button-next {
        top: 1.7%;
    }
}
</style>