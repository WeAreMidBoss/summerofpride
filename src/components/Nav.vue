<template>
    <nav class="navbar navbar-expand-sm">
      <div class="container d-flex flex-column flex-md-row justify-content-between">
        <a class="navbar-brand d-none d-sm-block" href="#"><img src="../assets/img/MidBossLogo.svg" alt="Midboss Logo" /></a>
        <a class="navbar-brand d-sm-none" href="#"><img src="../assets/img/MidBossLogoMobile.svg" alt="Midboss Logo" /></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#mainNav" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>


      </div>
  </nav>
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
}
</style>