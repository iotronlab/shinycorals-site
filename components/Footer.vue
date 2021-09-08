<template>
  <v-footer

    class="footer mt-5"
  >
    <v-row
      no-gutters
      justify="center"
    >
    <v-col col="12" sm="5">
      <v-row class="ma-2">
       <nuxt-link :to="{ name: 'index' }">
        <v-img
            :src="require('@/assets/img/shiny_logo.png')"
            :max-width="$vuetify.breakpoint.lgAndUp ? 45 : 35"
          ></v-img>
      </nuxt-link>
      <h1 class="text-h6 ml-8 mt-2 white--text">Shiny Corals Pre-School</h1></v-row>
      <v-col sm="7">
      <v-list-item
      class="white--text"
      v-for="item in navLinks"
      :key="item.title"
      :to="item.to"
      router
      exact
    >
      <v-list-item-content>
        <v-list-item-title v-text="item.title" class="font-weight-bold" />
       </v-list-item-content>
       </v-list-item>
      </v-col>
      </v-col>
      <v-col col="12" sm="5">
        <h1 class="text-h5 white--text">GET IN TOUCH</h1>
        <h1 class="text-h6 white--text">Shiny Corals PreSchool</h1>
        <p class="white--text">West Bankim Pally, MADHYAMGRAM - 700129.<br>contact@shinycorals.com</p>

        <p class="white--text">QUESTIONS? CALL:<br>9903067468</p>
        <p class="white--text">
          <v-btn href="https://www.google.com/" target="_blank">
          Open in Google Maps</v-btn></p>

      </v-col>

<v-row class="footer-bottom" >
    <v-col
        class="text-center white--text"
        cols="12"
        sm="6"
      >
        <span class="grey--text">&copy;{{ new Date().getFullYear() }}</span> — <strong class="grey--text">All rights reserved.</strong>
      </v-col>
      <v-col cols="12" sm="6" class="text-center white--text" justify="space-around">
        <v-row no-gutters justify="space-around">
          <p class="overline text-h5 text--disabled">GET SOCIAL</p>
        <v-btn
        icon
        v-for="social in socialLinks"
        :key="social.name"
        :href="social.url"
        target="_blank"
        :aria-label="social.name"
        ><v-icon v-html="social.icon"></v-icon></v-btn>
        </v-row>
      </v-col>
     </v-row>
    </v-row>
  </v-footer>
</template>


<script>
export default {
  props: {
    navLinks: {
      type: Array,
      required: true,
    },
    socialLinks: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style scoped>
.footer
{
    background-image: linear-gradient(to right,#aa076b, #61045f);

}
.footer-bottom
{
   background-image: linear-gradient(to right,#aa076b, #61045f);
   border-top: 5px solid #484848;
}

</style>
