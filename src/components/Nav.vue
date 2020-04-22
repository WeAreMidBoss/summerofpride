<template>
  <div>
    <nav class="navbar navbar-expand-sm">
      <div class="container">
        <a class="navbar-brand d-none d-sm-block" href="#"><img src="../assets/img/MidBossLogo.svg" alt="Midboss Logo" /></a>
        <a class="navbar-brand d-sm-none" href="#"><img src="../assets/img/MidBossLogoCastleMobile.svg" alt="Midboss Logo" /></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#mainNav" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      </div> 
    </nav>
  </div>
</template>
<style>
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
  background: -moz-linear-gradient(top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0) 100%)!important; /* FF3.6-15 */
  background: -webkit-linear-gradient(top, rgba(0,0,0,0.65) 0%,rgba(0,0,0,0) 100%)!important; /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to bottom, rgba(0,0,0,0.65) 0%,rgba(0,0,0,0) 100%)!important; /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#a6000000', endColorstr='#00000000',GradientType=0 )!important; /* IE6-9 */ 
}
</style>