<template>
    <nav class="navbar navbar-expand-sm navbar-dark fixed-top">
      <div class="container d-flex flex-column flex-md-row justify-content-between">
        <a class="navbar-brand d-none d-sm-block" href="#"><img src="../assets/img/MidBossLogo.svg" alt="Midboss Logo" /></a>
        <a class="navbar-brand d-sm-none" href="#"><img src="../assets/img/MidBossLogoMobile.svg" alt="Midboss Logo" /></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#mainNav" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse nav justify-content-center" id="mainNav">
          <ul class="navbar-nav ml-auto" id="navbar-list">
            <li class="nav-item active">
              <a class="nav-link" href="./index.html">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="./works.html">Works</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="http://wearemidboss.tumblr.com/" target="_blank">Blog</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="./about.html">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="./contact.html">Contact</a>
            </li>
          </ul>
        </div>
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
</style>