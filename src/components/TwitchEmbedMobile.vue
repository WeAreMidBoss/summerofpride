<template>
  <vue-twitch-player 
    :channel="channel" :width="width" :height="height"
  ></vue-twitch-player>
</template>
 
<script>
import VueTwitchPlayer from 'vue-twitch-player';

	export default {
		name: 'TwitchEmbedMobile',
		props: ['channel'],
		components: {
			VueTwitchPlayer
		},
		data(){
			return {
				width: "320",
				height: "180"
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