<template>
  <div class="modal-backdrop animated faster" :class="isClosing ? 'fadeOut' : 'fadeIn'" @click.self="close">
    <div class="modal-streamers animated faster"
      role="dialog"
      aria-labelledby="modalTitle"
      aria-describedby="modalDescription"
      :class="isClosing ? 'zoomOutDown' : 'zoomInUp'" 
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
      <section class="modal-streamers-body">
        <slot name="body">
            <div class="row">
              <div class="modal-img-container col-md-6 col-sm-12">
                <img class="modal-img" :src="profile.img" />
              </div>
              <div class="modal-description col-md-6 col-sm-12">
                <span class="modal-name">{{ profile.name }}</span>
                <span class="modal-description-text-streamers">{{ profile.bio }}</span>
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
        isClosing: false
      }
    },
    mounted() {
    },
    methods: {
      close() {
        this.isClosing = true;
        setTimeout(() => {   
          this.$emit('close');
          this.isClosing = false;
        }, 450)
      },
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
    max-width: 700px;
    padding: 0 10px 20px;
    background: #a72164;
    box-shadow: 2px 2px 20px 1px;
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
  .modal-img {
    max-width:90%;
    height:auto;
    padding:25px 20px;
    margin-bottom: 10px;
    background: #f2f8fc;
     -webkit-box-shadow: 8px 6px 14px -7px rgba(0,0,0,0.98);
    -moz-box-shadow: 8px 6px 14px -7px rgba(0,0,0,0.98);
    box-shadow: 8px 6px 14px -7px rgba(0,0,0,0.98);
  }
  .modal-description {
    color:#fff;
    font-size: 15px;
    text-align: left;
  }
  .modal-name {
    display: block;
    font-family: 'Permanent Marker', cursive;
    font-size: 28px;
    text-align: center;
  }
  .modal-description-text {
    display: block;
    font-family: 'Open Sans', sans-serif;
    margin-top: 20px;
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
      max-width: 80%;
    }
    .modal-img {
      max-height: 250px;
    }
    .modal-description-text {
      padding: 0 20px;
    }
  }
</style>

