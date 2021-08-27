<template>
  <header>

    <nav>
      <Nuxt-link to="/"> ABOUT US </Nuxt-link>
      <Nuxt-link to="/about">CLASSROOM PROGRAMES</Nuxt-link>
      <Nuxt-link to="/gallery">GALLERY</Nuxt-link>
      <Nuxt-link to="contact-us">CONTACT US</Nuxt-link>
      <Nuxt-link to="notices">NOTICES</Nuxt-link>
    </nav>
  </header>
</template>


<style scoped>
header{
  padding: 15px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 1);
}
header .title{
  color: #212121;
  font-size: 24px;
  font-weight: 900;
  text-transform: uppercase;
}
nav{
  display: flex;
  align-items: center;
  margin: 0 200px;

}
nav a{
  display: flex;
  margin: 0 15px;
  color: #9f25cf;
  text-decoration: none;
  font-weight: 900;
}
</style>
