<template>
  <div>
    <nav class="navbar fixed-top  navbar-expand-sm" data-aos="slide-down">
      <div class="container">
        <a class="navbar-brand d-none d-sm-block" href="#"><img src="../assets/img/MidBossLogo.svg" alt="Midboss Logo" /></a>
        <a class="navbar-brand d-sm-none" href="#"><img src="../assets/img/MidBossLogoCastleMobile.svg" alt="Midboss Logo" /></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#mainNav" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
       

          <div class="social-links justify-content-end">
            <a href="https://twitter.com/MidBoss" target="_blank"><img src="../assets/img/TwitterPurple.svg" alt="Twitter" /></a>
            <a href="https://www.facebook.com/WeAreMidBoss" target="_blank"><img src="../assets/img/FacebookPurple.svg" alt="Facebook" /></a>
            <a href="http://midboss.com/press/sop" target="_blank"><img src="../assets/img/PressKitPurple.svg" alt="Press Kit" /></a>
          </div>

      </div>  
    </nav>
  </div>
</template>
<style>
.navbar {
  z-index: 100!important;
}
.navbar-nav > li {
  text-transform: uppercase;
  font-weight: normal;
  font-size: 2rem
}
.navbar-dark .navbar-nav .nav-link, .navbar-dark .navbar-nav .nav-link {
  color: #caa9d8
}
.navbar-dark .navbar-nav .active>.nav-link, .navbar-dark .navbar-nav .nav-link.active {
    color: #fff;
}
.navbar-dark .navbar-nav .nav-link:focus, .navbar-dark .navbar-nav .nav-link:hover {
  color: #f8c2c8
}   
.navbar {
  position:relative;
  background: -moz-linear-gradient(left, #c00d1044, #F9414444, #F3722C44, #F9C74F44, #90BE6D44, #57BED644, #9C71D444, #602ca444);
  background: -webkit-linear-gradient(left, #c00d1044, #F9414444, #F3722C44, #F9C74F44, #90BE6D44, #57BED644, #9C71D444, #602ca444); /* Chrome10-25,Safari5.1-6 */
  background-image: linear-gradient(to left, #c00d1044,#F9414444, #F3722C44, #F9C74F44, #90BE6D44, #57BED644, #9C71D444, #602ca444); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#a6000000', endColorstr='#00000000',GradientType=0 )!important; /* IE6-9 */ 
}
</style>