<template>
	<div class="schedule" data-aos="slide-up">
        <transition name="fade" v-on:enter="enter">
            <swiper v-if="!loading" class="swiper" ref="swiperSchedule" :options="swiperOptions" >
                <swiper-slide v-for="(block, index) in schedules" class="swiper-slide" :key="index" >
                    <span class="schedule-day">{{ getDay(block.b1Start) }}</span>
                    <table class="schedule-table">
                    <tbody>
                        <tr :class="isTime(block.b1Start) ? 'active':''">
                            <th class="schedule-hours" scope="row"><span class="live-time" :class="isTime(block.b1Start) ? 'active':''">LIVE NOW!</span><span class="start-time">{{ convertDateToLocal(block.b1Start) }} </span><span class="end-time"> {{ calculateEndTime(block.b1Start) }}</span></th>
                            <td @click="showStreamerInfo(getIdByName(block.b1Name))"><img :src="`${publicPath}streamers/${profiles[getIdByName(block.b1Name)].img}`" class="schedule-profile-img" />
                            <span class="schedule-streamer-name" :class="isLongName(profiles[getIdByName(block.b1Name)].name) ? 'large-width': ''">{{ profiles[getIdByName(block.b1Name)].name }}</span></td>
                            <td><img @click="showGameInfo(getGameIdByName(block.b1Game1))" :src="`${publicPath}games/${games[getGameIdByName(block.b1Game1)].img}`" class="schedule-game-img" />
                            <span class="schedule-game-name">{{ games[getGameIdByName(block.b1Game1)].name }}</span>
                            <span v-if="block.b1Game2"><img @click="showGameInfo(getGameIdByName(block.b1_game2))" :src="`${publicPath}games/${games[getGameIdByName(block.b1Game2)].img}`" class="schedule-game-img schedule-game-two-img" /></span>
                            <span v-if="block.b1Game2" class="schedule-game-name">{{ games[getGameIdByName(block.b1Game2)].name }}</span></td>
                        </tr>
                        <tr :class="isTime(block.b2Start) ? 'active':''">
                            <th class="schedule-hours" scope="row"><span class="live-time" :class="isTime(block.b2Start) ? 'active':''">LIVE NOW!</span><span class="start-time">{{ convertDateToLocal(block.b2Start) }} </span><span class="end-time"> {{ calculateEndTime(block.b2Start) }}</span></th>
                            <td @click="showStreamerInfo(getIdByName(block.b2Name))"><img :src="`${publicPath}streamers/${profiles[getIdByName(block.b2Name)].img}`" class="schedule-profile-img" />
                            <span class="schedule-streamer-name" :class="isLongName(profiles[getIdByName(block.b2Name)].name) ? 'large-width': ''">{{ profiles[getIdByName(block.b2Name)].name }}</span></td>
                            <td><img @click="showGameInfo(getGameIdByName(block.b2Game1))" :src="`${publicPath}games/${games[getGameIdByName(block.b2Game1)].img}`" class="schedule-game-img" />
                            <span class="schedule-game-name">{{ games[getGameIdByName(block.b2Game1)].name }}</span>
                            <span v-if="block.b2Game2"><img @click="showGameInfo(getGameIdByName(block.b2Game2))" :src="`${publicPath}games/${games[getGameIdByName(block.b2Game2)].img}`" class="schedule-game-img schedule-game-two-img" /></span>
                            <span v-if="block.b2Game2" class="schedule-game-name">{{ games[getGameIdByName(block.b2Game2)].name }}</span></td>
                        </tr>
                        <tr :class="isTime(block.b3Start) ? 'active':''">
                            <th class="schedule-hours" scope="row"><span class="live-time" :class="isTime(block.b3Start) ? 'active':''">LIVE NOW!</span><span class="start-time">{{ convertDateToLocal(block.b3Start) }} </span><span class="end-time"> {{ calculateEndTime(block.b3Start) }}</span></th>
                            <td @click="showStreamerInfo(getIdByName(block.b3Name))"><img :src="`${publicPath}streamers/${profiles[getIdByName(block.b3Name)].img}`" class="schedule-profile-img" />
                            <span class="schedule-streamer-name" :class="isLongName(profiles[getIdByName(block.b3Name)].name) ? 'large-width': ''">{{ profiles[getIdByName(block.b3Name)].name }}</span></td>
                            <td><img @click="showGameInfo(getGameIdByName(block.b3Game1))" :src="`${publicPath}games/${games[getGameIdByName(block.b3Game1)].img}`" class="schedule-game-img" />
                            <span class="schedule-game-name">{{ games[getGameIdByName(block.b3Game1)].name }}</span>
                            <span v-if="block.b3Game2"><img @click="showGameInfo(getGameIdByName(block.b3_game2))" :src="`${publicPath}games/${games[getGameIdByName(block.b3Game2)].img}`" class="schedule-game-img schedule-game-two-img" /></span>
                            <span v-if="block.b3Game2" class="schedule-game-name">{{ games[getGameIdByName(block.b3Game2)].name }}</span></td>
                        </tr>
                        <tr :class="isTime(block.b4Start) ? 'active':''">
                            <th class="schedule-hours" scope="row"><span class="live-time" :class="isTime(block.b4Start) ? 'active':''">LIVE NOW!</span><span class="start-time">{{ convertDateToLocal(block.b4Start) }} </span><span class="end-time"> {{ calculateEndTime(block.b4Start) }}</span></th>
                            <td @click="showStreamerInfo(getIdByName(block.b4Name))"><img :src="`${publicPath}streamers/${profiles[getIdByName(block.b4Name)].img}`" class="schedule-profile-img" />
                            <span class="schedule-streamer-name" :class="isLongName(profiles[getIdByName(block.b4Name)].name) ? 'large-width': ''">{{ profiles[getIdByName(block.b4Name)].name }}</span></td>
                            <td><img @click="showGameInfo(getGameIdByName(block.b4Game1))" :src="`${publicPath}games/${games[getGameIdByName(block.b4Game1)].img}`" class="schedule-game-img" />
                            <span class="schedule-game-name">{{ games[getGameIdByName(block.b4Game1)].name }}</span>
                            <span v-if="block.b4Game2"><img @click="showGameInfo(getGameIdByName(block.b4_game2))" :src="`${publicPath}games/${games[getGameIdByName(block.b4Game2)].img}`" class="schedule-game-img schedule-game-two-img" /></span>
                            <span v-if="block.b4Game2" class="schedule-game-name">{{ games[getGameIdByName(block.b4Game2)].name }}</span></td>
                        </tr>
                        <tr :class="isTime(block.b5Start) ? 'active':''">
                            <th class="schedule-hours" scope="row"><span class="live-time" :class="isTime(block.b5Start) ? 'active':''">LIVE NOW!</span><span class="start-time">{{ convertDateToLocal(block.b5Start) }} </span><span class="end-time"> {{ calculateEndTime(block.b5Start) }}</span></th>
                            <td @click="showStreamerInfo(getIdByName(block.b5Name))"><img :src="`${publicPath}streamers/${profiles[getIdByName(block.b5Name)].img}`" class="schedule-profile-img" />
                            <span class="schedule-streamer-name" :class="isLongName(profiles[getIdByName(block.b5Name)].name) ? 'large-width': ''">{{ profiles[getIdByName(block.b5Name)].name }}</span></td>
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
                /*var date = this.parseDate(dateString.toString());
                var utcDate = new Date(date);
                utcDate = utcDate.toLocaleString('en-US', { hour: '2-digit', hour12: true });
                console.log('localdate: '+utcDate); 
                return utcDate;*/
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
                //onsole.log('difference:'+difference);
                this.initialSlideSet = true;
                if (difference >= 0 && difference <= 32) {
                    return difference;
                } else {
                    return 1;
                }
            },
			isTime(date) { // ISO-8601 formatted date returned from server
                var date1 = new Date(date);
                var date2 = new Date();
                var difference = date2.getTime() - date1.getTime();
                difference = Math.floor((difference / (1000 * 60 * 60)) % 24);
                if (this.getDay(date1) == this.getDay(date2) && difference >= 0 && difference < 3) {
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
    .active > .schedule-hours > .start-time {
        color: #fff;
    }
    .active > .schedule-hours > .end-time {
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
    .live-time {
        display: none;
        color: #f5e362;
        font-size: 1.6em;
        margin-bottom: -30px;
    }
    .live-time.active {
        display: block;
    }
    .live-time::after {
        display: block;
        position: absolute;
        content: '';
        width: 0;
        height: 0;
        margin-top: -15px;
        margin-left: 90px;
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

    .schedule-table th, .schedule-table td {
        padding: 5px 0;
    }
    .schedule-hours{
        white-space: nowrap;
        font-weight: normal;
        text-align: right;
        padding-right: 40px!important;
    }

    .start-time {
        display: block;
        margin:0;
        padding: 0;
        color: #f77166;
        font-size: 3.5em;
    }
    .end-time {
        display: block;
        margin:-75px 0 0;
        padding: 0;
        color: #f4496a;
        font-size: 3.5em;
    }

    .schedule-game-img{
        display:block;
        width: auto!important;
        height: 180px!important;
        border-color: transparent !important;
        border-width: 1px !important;
        border-style: solid !important;
        margin: 0 auto;
    }

    .schedule-game-two-img{
        margin: 0 auto;
        margin-top:15px;
        border-color: transparent !important;
        border-width: 1px !important;
        border-style: solid !important;
    }

    .schedule-profile-img{
        width: 120px!important;
        height: auto!important;
        border-color: transparent !important;
        border-width: 1px !important;
        border-style: solid !important;
    }
    .schedule-table tr:not(:last-child) {
        border-bottom: 5px solid #f4446b;
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
        display: block;
        text-align: center;
        color:#fff;
        background-color: #F37664;
        font-family: 'Montserrat', sans-serif;
        font-size: 14px;
        margin-top:5px;
    }

    .schedule-game-name{
        max-width: 85%!important;
        margin: 0 auto;
        margin-top: 5px;
    }

    .schedule-streamer-name{
        max-width: 75%!important;
        position: relative;
        margin: 0 auto;
        margin-top: 5px;
    }

    .large-width {
        max-width: 92%!important;
    }

    .schedule-table tr:first-child {border-color: #f5cd49;}
    .schedule-table tr:nth-child(2) {border-color: #f8874c;}
    .schedule-table tr:nth-child(3) {border-color: #f77166;}
    .schedule-table tr:nth-child(even) {background-color: #fff;}

@media (min-width: 768px) and (max-width: 1200px) {
    .live-time::after {
        margin-left: 30px;
    }
    .schedule-hours{
        padding-right: 0!important;
    }
    .schedule-game-name{
        max-width: 93%!important;
    }
    .schedule-streamer-name{
        max-width: 85%!important;
    }
}
@media (min-width: 576px) and (max-width: 768px) {
    .schedule-table {
        width: 100%;
    }
    .schedule-table tr {
        width:100%;
    }
    .live-time::after {
        margin-left: 5px;
    }
    .schedule-hours{
        text-align: center;
        padding-right: 0!important;
    }
    .schedule-game-img{
        display: block;
        width: auto!important;
        height: 120px!important;
    }
    
    .schedule-profile-img{
        margin: 15px 0;
        width: 90px!important;
        height: auto!important;
    }
    .schedule-table tr > th:first-child {
        display:block;
        display: table-cell;
    }
    .schedule-table td div {
        display: block;
        height: 100px;
        display: table-cell;
    }
    .schedule .swiper-button-prev, .schedule  .swiper-button-next {
        top: 3.8%;
    }

  .schedule-streamer-name{
        max-width: 100%!important;
        margin-bottom: 30px;
        padding: 0 5px 0 5px;
    }
  .schedule-game-name{
        max-width: 100%!important;
        margin: 0 auto;
        margin-top: 5px;
    }

}

@media (max-width: 575px) {
    .start-time, .active > .schedule-hours > .start-time {
        font-size: 2.5em;
    }
    .end-time, .active > .schedule-hours > .end-time {
        font-size: 2.5em;
        margin:-55px 0 0;
    }
    .schedule-table {
        width: 100%;
    }
    .schedule-table tr {
        width:100%;
    }
    .schedule-hours{
        text-align: center;
        padding-right: 0!important;
    }
    .live-time {
        margin-bottom: -20px;
    }
    .live-time::after {
        margin-left: 85px;
    }
    .schedule-game-img{
        display: block;
        width: auto!important;
        height: 120px!important;
    }
    .schedule-game-name{
        max-width: 100%!important;
        margin: 0 auto;
        margin-top: 5px;
    }
    .schedule-profile-img{
        margin: 0;
        width: 90px!important;
        height: auto!important;
    }
    
    .schedule-table td {
        padding: 0;
        display:inline-block;
    }
    .schedule-table td:last-child {
        padding-bottom: 40px;
    }
    .schedule-table tr > th:first-child {
        display:block;
    }
    .schedule-table td div {
        display: block;
        height: 100px;
        display: table-cell;
    }
    .schedule .swiper-button-prev, .schedule  .swiper-button-next {
        top: 1.7%;
    }

    .schedule-streamer-name{
        max-width: 100%!important;
        margin-bottom: 30px;
        padding: 0 5px 0 5px;
    }
}
</style>