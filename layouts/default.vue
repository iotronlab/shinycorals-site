<template>
  <div>
    <div id="navbar">
      <nuxt-link v-for="title in titles" :key="title">{{title}}</nuxt-link>
    </div>

    <div id="default-body">
      <nuxt />
    </div>
    <div id="footer">

   © 2019 All rights reserved.
    </div>
  </div>
</template>

<script >

export default {
 data()
 {
   return{
     titles:['ABOUT US','CLASSROOM PROGRAMMES','GALLERY','CONTACT US','NOTICES']
   }
 }
}
</script>

<style scoped>
#navbar{
/* background-color: black; */
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
