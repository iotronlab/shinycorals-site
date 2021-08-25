<template>
  <div>
    <div id="navbar">
      <div class="navbar-links">
      <nuxt-link to="/about">ABOUT US</nuxt-link>
      <nuxt-link to="/classprogram">CLASSROOM PROGRAMMES</nuxt-link>
      <nuxt-link to="/gallery">GALLERY</nuxt-link>
      <nuxt-link to="/contactus">CONTACT US</nuxt-link>
      <nuxt-link to="/notice">NOTICES</nuxt-link>
      </div>
    </div>
    <div id="default-body">
      <nuxt />
    </div>
    <div id="footer">

   © 2019 All rights reserved.
    </div>
  </div>
</template>


<style scoped>
#navbar{
background-color: black;
height: 60px;
}
#navbar .navbar-links{
  max-width: 800px;
  margin: auto;
  padding-top: 20px;
}
#navbar a{
  color: white;
  text-decoration: none;
 padding-left: 10px;
 margin-top: 2px;
}

#default-body{
  max-width: 800px;
  margin: auto;
}
#footer{
  background-color: rgb(211, 26, 112);
height: 60px;
}

</style>
