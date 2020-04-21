<template>
  <div id="modal-streamers" class="modal fade" tabindex="-1" role="dialog">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">✖</span>
            </button>
        </div>
        <div class="modal-body">
          <slot name="body">
            <div class="row">
              <div class="modal-img-container col-md-6 col-sm-12">
                <img class="modal-img" :src="profile.img" />
              </div>
              <div class="modal-description col-md-6 col-sm-12">
                <span class="modal-name">{{ profile.name }}</span>
                <span class="modal-description-text">{{ profile.bio }}</span>
                <span class="modal-description-social text-center"><a :href="profile.twitch" target="_blank" v-if="profile.twitch"><img class="modal-social" src="../assets/img/Twitch.svg" /></a> 
                <a :href="profile.social" target="_blank" v-if="profile.social"><img class="modal-social" src="../assets/img/Twitter.svg" /></a> 
                <a :href="profile.personal" target="_blank" v-if="profile.personal"><img class="modal-social" src="../assets/img/Website.svg" /></a></span>
              </div>
            </div>
          </slot>
        </div>
      </div>
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
    methods: {
      close() {
        this.$emit('close');
      },
    },
  };
</script>

<style scoped>
.modal-content {
  background: #a72164;
  box-shadow: 2px 2px 20px 1px;
  border: none;
  border-radius: 0;
}
.modal-header {
  border-bottom: none;
  padding: 0;
  border-radius: 0;
}
.close {
  opacity: 1;
  transition: all 0.5s ease;
}
.close:hover {
  opacity: 1!important;
}
.close span {
  display: block;
  position:relative;
  top:-15px;
  right:-15px;
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
.close span:hover{
  background-color:#eee;
}
.modal-content {
  padding-bottom: 0.75em;
}
.modal-description-social a:not(:first-child) {
  margin-left: 10px;
}
.modal-description-social a img {
  width: 45px;
  height: 45px;
}
.modal-name {
  margin-bottom: 0.5em;
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
  font-size: 15px;
  text-align: left;
}
.modal-name {
  display: block;
  font-family: 'Permanent Marker', cursive;
  font-size: 28px;
  text-align: center;
}
.modal-description-social {
  display: block;
  margin-top: 20px;
}
.modal-description-social img{
  width:55px;
  height:auto;
}
 @media only screen and (max-width: 600px) {
  .modal-img {
    max-height: 250px;
  }
  .modal-description {
    padding: 0 20px;
  }
}

</style>

