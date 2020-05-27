<template>
  <div class="modal-backdrop animated faster" :class="isClosing ? 'fadeOut' : 'fadeIn'" @click.self="close">
    <div class="modal-games animated faster"
      role="dialog"
      aria-labelledby="modalTitle"
      aria-describedby="modalDescription"
      :class="isClosing ? 'zoomOutDown' : 'zoomInUp'"
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
              <img class="modal-img" :src="game.img" />
            </div>
            <div class="modal-description col-sm-12">
              <span class="modal-name">{{ game.name }}</span>
              <span class="modal-warning" v-if="game.warning">CONTENT WARNING: <br /> {{ game.warning }}</span>
              <span class="modal-description-text">{{ game.desc }}</span>
              <span class="modal-description-social text-center">
              <a :href="game.url" target="_blank" v-if="game.url"><img class="modal-social" src="../assets/img/Website.svg" /></a>
              <a :href="game.url2" target="_blank" v-if="game.url2"><img class="modal-social" src="../assets/img/Website.svg" /></a>
              <a :href="game.url3" target="_blank" v-if="game.url3"><img class="modal-social" src="../assets/img/Website.svg" /></a>
              </span>
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
  .modal-games {
    max-width: 700px;
    padding: 0 10px 20px;
    background: #EC5A5A;
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
   .modal-warning {
    display: block;
    font-family: 'Open Sans', sans-serif;
    font-size: 20px;
    text-align: center;
    color:#ea276d;
    background-color: #fff;
    font-weight: bold;
    margin-top:15px;
    padding: 10px;
  }
  .modal-description-text {
    display: block;
    font-family: 'Open Sans', sans-serif;
    margin-top: 20px;
    padding: 0 40px;
    
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
    .modal-games {
      max-width: 85%;
    }
  }
  @media only screen and (max-width: 600px) {
    .modal-games {
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