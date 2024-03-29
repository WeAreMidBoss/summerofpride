<template>
  <div class="modal-backdrop animate__animated animate__faster" :class="isClosing ? 'animate__fadeOut' : 'animate__fadeIn'" @click.self="close">
    <div class="modal-streamers animate__animated animate__faster"
      role="dialog"
      aria-labelledby="modalTitle"
      aria-describedby="modalDescription"
      :class="isClosing ? 'animate__zoomOutDown' : 'animate__zoomInUp'" 
    >
      <header class="modal-streamers-header">
        <slot name="header">
          ...
          <button
            type="button"
            class="btn-close"
            @click="close"
          >
            ✖
          </button>
        </slot>
      </header>
      <section class="modal-streamers-body" v-scroll-lock="!isClosing">
        <slot name="body">
            <div class="row">
              <div class="modal-img-container col-md-12 col-sm-12">
                <img class="modal-img" :src="`${publicPath}streamers/${profile.img}`" />
              </div>
              <div class="modal-description col-md-12 col-sm-12">
                <div class="modal-streamer-title">
                  <span class="modal-name">{{ profile.name }}</span>
                  <span class="modal-pronouns">{{ profile.pronouns }}</span>
                </div>
                <span class="modal-description-text">{{ profile.bio }}</span>
                <span class="modal-description-social text-center"><a :href="profile.twitch" target="_blank" v-if="profile.twitch"><img class="modal-social" src="../assets/img/Twitch.svg" /></a> 
                <a :href="profile.social" target="_blank" v-if="profile.social"><img class="modal-social" src="../assets/img/Twitter.svg" /></a> 
                <a :href="profile.personal" target="_blank" v-if="profile.personal"><img class="modal-social" src="../assets/img/Website.svg" /></a></span>
              </div>
            </div>
          </slot>
      </section>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ModalStreamers',
    props: {
      profile: {
        required: true
      }
    },
    data() {
      return {
        publicPath: process.env.BASE_URL,
        isClosing: false
      }
    },
    methods: {
      close() {
        this.isClosing = true;
        setTimeout(() => {   
          this.$emit('close');
          this.isClosing = false;
        }, 250)
      }
    },
  };
</script>

<style scoped>
  .modal-backdrop {
    position: fixed!important;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3)!important;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .modal-streamers {
    max-width: 600px;
    padding: 0 10px 10px;
    background: #1F517F; /* Old browsers */
    background: -moz-linear-gradient(top, #5AB0C3 0%, #1F517F 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(top, #5AB0C3 0%,#1F517F 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to bottom, #5AB0C3 0%,#1F517F 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    box-shadow: 2px 2px 30px 5px #1F517F;
    /*overflow-x: auto;*/
    display: flex;
    flex-direction: column;
  }

  .modal-streamers-header,
  .modal-streamers-footer {
    /*padding: 5px;*/
    display: flex;
  }
  .modal-streamers-header {
    /*border-bottom: 1px solid #eeeeee;*/
    color: transparent;
    justify-content: space-between;
  }
  .modal-streamers-header span {
    line-height: 10px;
  }
  .modal-streamers-footer {
    /*border-top: 1px solid #eeeeee;*/
    justify-content: flex-end;
  }
  .modal-streamers-body {
    position: relative;
    padding: 20px 10px;
  }
  .btn-close {
    position:relative;
    top:-15px;
    right:-25px;
    width: 32px;
    height: 32px;
    border: none;
    padding: 0;
    font-size: 20px;
    line-height: 32px;
    cursor: pointer;
    font-weight: bold;
    color: #000;
    background: #fff;
    border-radius: 50%;
  }
  .btn-green {
    color: white;
    background: #4AAE9B;
    border: 1px solid #4AAE9B;
    border-radius: 2px;
  }
   .modal-fade-enter,
  .modal-fade-leave-active {
    opacity: 0;
  }
  .modal-fade-enter-active,
  .modal-fade-leave-active {
    transition: opacity .5s ease
  }
  .modal-pronouns, .modal-description-text {
    font-family: 'Montserrat', sans-serif;
  }
  .modal-img {
    max-width:90%;
    height:auto;
    border-color: #B4E7EF !important;
    border-width: 1px !important;
    border-style: solid !important;
    margin-bottom: 10px;
    background: #f2f8fc;

  }
  .modal-description {
    color:#fff;
    font-size: 16px;
    text-align: left;
  }
  .modal-name {
    margin-top: 5px;
    display: block;
    font-family: 'Montserrat', sans-serif;
    font-weight: 900;
    font-style: italic;
    font-size: 34px;
    text-align: center;
  }
  .modal-pronouns {
    color:#B4E7EF;
    display: block;
    font-style: italic;
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    margin-top: 5px;
  }
  .modal-description-text {
    display: block;
    font-family: 'Montserrat', sans-serif;
    margin-top: 10px;
    padding-left: 70px;
    padding-right:70px;
  }

  .modal-description-social {
    display: block;
    margin-top: 20px;
  }
  .modal-description-social a:not(:first-child) {
    margin-left: 10px;
  }
  .modal-description-social img {
    width: 45px;
    height: 45px;
  }
  @media only screen and (max-width: 800px) {
    .modal-streamers {
      max-width: 85%;
    }
  }
  @media only screen and (max-width: 600px) {
    .modal-streamers {
      max-width: 90%;
    }
    .modal-img {
      max-height: 250px;
    }
    .modal-description-text {
      padding: 0 10px;
      font-size: 0.9em;
    }
  }
  @media screen and (max-width: 800px) and (orientation:landscape) {
    .modal-streamers {
      height: auto;
      max-height: 95%;
      max-width: 90%;
      padding: 5px 5px 25px;
    }
    .modal-streamers-body {
      padding: 10px;
    }
    .modal-img-container.col-sm-12 {
      max-width: 30%;
    }
    .modal-description.col-sm-12 {
      max-width: 68%;
    }
    .modal-description {
      padding: 0 15px 0;
    }
    .modal-img {
      max-height: 250px;
    }
    .modal-description-text {
      margin-top: 15px;
      padding: 0;
      font-size: 0.9em;
      text-overflow: ellipsis;
    }
    .modal-streamer-title {
      text-align: center;
    }
    .modal-name {
      display: inline-block;
      margin: 0;
    }
    .modal-pronouns {
      display: inline-block;
      margin-left: 10px;
      font-size: 1em;
    }
  }
</style>

