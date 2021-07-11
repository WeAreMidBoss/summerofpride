<template>
  <div class="modal-backdrop animate__animated animate__faster" :class="isClosing ? 'animate__fadeOut' : 'animate__fadeIn'" @click.self="close">
    <div class="modal-games animate__animated animate__faster"
      role="dialog"
      aria-labelledby="modalTitle"
      aria-describedby="modalDescription"
      :class="isClosing ? 'animate__zoomOutDown' : 'animate__zoomInUp'"
    >
      <header class="modal-games-header">
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
      <section class="modal-games-body" v-scroll-lock="!isClosing">
        <slot name="body">
          <div class="row">
            <div class="modal-img-container col-sm-12">
              <img class="modal-img" :src="`${publicPath}games/${game.img}`" />
              <span class="modal-description-social-mobile text-center">
                <a :href="game.url" target="_blank" v-if="game.url"><img class="modal-social" src="../assets/img/Store.svg" /></a>
                <a :href="game.url2" target="_blank" v-if="game.url2"><img class="modal-social" src="../assets/img/Social.svg" /></a>
                <a :href="game.url3" target="_blank" v-if="game.url3"><img class="modal-social" src="../assets/img/Website.svg" /></a>
              </span>
            </div>
            <div class="modal-description col-sm-12">
              <span class="modal-name">{{ game.name }}</span>
              <span class="modal-description-text">{{ game.desc }}</span>
              <div class="modal-warning" v-if="game.warning"><div class="modal-warning-wrapper"><span class="modal-warning-title">CONTENT DESCRIPTOR</span> <span class="modal-warning-descriptor"> {{ game.warning }}</span></div></div>
              <span class="modal-description-social text-center">
              <a :href="game.url" target="_blank" v-if="game.url"><img class="modal-social" src="../assets/img/Store.svg" /></a>
              <a :href="game.url2" target="_blank" v-if="game.url2"><img class="modal-social" src="../assets/img/Social.svg" /></a>
              <a :href="game.url3" target="_blank" v-if="game.url3"><img class="modal-social" src="../assets/img/Website.svg" /></a>
              </span>
            </div>
          </div>
          <div class="modal-warning-mobile row">
            <div class="modal-warning-mobile-container col-sm-12">
              <div class="modal-warning-mobile-body" v-if="game.warning"><div class="modal-warning-wrapper"><span class="modal-warning-title">CONTENT DESCRIPTOR</span> <span class="modal-warning-descriptor"> {{ game.warning }}</span></div></div>
            </div>
          </div>
        </slot>
      </section>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'modalGames',
    props: {
      game: {
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
  .modal-games {
    max-width: 700px;
    padding: 0 10px 20px;
    background: #F37739;
    box-shadow: 2px 2px 20px 1px;
    /*overflow-x: auto;*/
    display: flex;
    flex-direction: column;
  }
  .modal-games-header,
  .modal-games-footer {
    /*padding: 5px;*/
    display: flex;
  }
  .modal-games-header {
    /*border-bottom: 1px solid #eeeeee;*/
    color: transparent;
    justify-content: space-between;
  }
  .modal-games-header span {
    line-height: 10px;
  }
  .modal-games-footer {
    /*border-top: 1px solid #eeeeee;*/
    justify-content: flex-end;
  }
  .modal-games-body {
    position: relative;
    padding: 20px 10px;
  }
  .btn-close {
    position:relative;
    top:-15px;
    right:-25px;
    width: 32px;
    height: 32px;
    padding: 0;
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
    padding:25px 20px;
    margin-bottom: 10px;
    background: #f2f8fc;
     -webkit-box-shadow: 8px 6px 14px -7px rgba(0,0,0,0.98);
    -moz-box-shadow: 8px 6px 14px -7px rgba(0,0,0,0.98);
    box-shadow: 8px 6px 14px -7px rgba(0,0,0,0.98);
  }
  .modal-description {
    color:#fff;
    font-size: 16px;
    text-align: left;
  }
  .modal-name {
    display: block;
    font-family: 'Knewave', cursive;
    font-size: 28px;
    text-align: center;
  }
  .modal-warning, .modal-description-text {
    padding: 0 40px;
  }
  .modal-warning {
    display: block;
    width: 100%;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    text-align: center;
    font-weight: bold;
    margin-top:15px;
  }
  .modal-warning-wrapper {
    background-color:#ffb090;
    padding: 10px;
  }
  .modal-warning-title {
    display:block;
    width:100%;
    background-color:#e45c3a;
    color:#fff;
    padding:5px 0;
  }
  .modal-warning-descriptor {
    display: block;
    font-weight: normal;
    margin-top:10px;
    font-size: 13px;
    color:#b32c0a;
    padding: 0 40px;
  }
  .modal-description-text {
    display: block;
    font-family: 'Montserrat', sans-serif;
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
  .modal-description-social-mobile,.modal-warning-mobile {
    display: none;
  }
  
    @media only screen and (max-width: 800px) {
    .modal-games {
      max-width: 85%;
    }
  }
  @media only screen and (max-width: 600px) {
    .modal-games {
      max-width: 90%;
    }
    .modal-img {
      max-height: 250px;
      padding: 15px 15px;
    }
    .modal-description {
      font-size: 13px;
    }
    .modal-description-text {
      padding: 0 20px;
    }
    .modal-warning {
      padding: 0 15px;
    }
  }
    @media screen and (max-width: 800px) and (orientation:landscape) {
    .modal-games {
      height: auto;
      max-height: 95%;
      max-width: 90%;
      padding: 5px 5px 25px;
    }
    .modal-games-body {
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
      padding:15px 15px;
    }
    .modal-description-text {
      margin-top: 15px;
      padding: 0;
      font-size: 0.8em;
      text-overflow: ellipsis;
    }
    .modal-name {
      font-size: 1.3em;
      text-align: center;
    }
    .modal-warning {
      display:none;
    }
    .modal-description-social {
      display:none;
    }
     .modal-description-social-mobile {
      display: block;
      margin-top: 10px;
    }
    .modal-warning-mobile {
      display: block;
      margin-top: 10px;
    }
    .modal-warning-mobile-body {
      width: 95%;
      margin: 0 auto;
    }
    .modal-warning-mobile-body .modal-warning-title {
      font-size: 0.8em;
    }
}
</style>