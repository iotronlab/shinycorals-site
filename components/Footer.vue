<template>
  <v-footer
    color="purple lighten-2"
    padless
  >
    <v-row
      no-gutters
      justify="center"
    >
    <v-col col="12" sm="5">
      <h1 class="text-h6 ml-8 mt-2 white--text">Shiny Corals Pre-School</h1>
      <v-col sm="7">
      <v-btn
        v-for="link in navlinks"
        :key="link"
        color="white"
        text
        rounded
        class="my-2"
      >
        {{ link }}
      </v-btn>
      </v-col>
      </v-col>
      <v-col col="12" sm="5">
        <h1 class="text-h5 white--text">GET IN TOUCH</h1>
        <h1 class="text-h6 white--text">Shiny Corals PreSchool</h1>
        <p class="white--text">West Bankim Pally, MADHYAMGRAM - 700129. contact@shinycorals.com</p>

        <p class="white--text">QUESTIONS? CALL:<br>9903067468</p>
        <p class="white--text">
          <v-btn href="https://www.google.com/" target="_blank">
          Open in Google Maps</v-btn></p>

      </v-col>

<v-row justify="center">
    <v-col
        class="purple lighten-1 py-4 text-center white--text"
        cols="12"
        sm="6"
      >
        <span class="mr-2">&copy;{{ new Date().getFullYear() }}</span> — <strong>All rights reserved.</strong>
      </v-col>
      <v-col cols="12" sm="6" class="purple lighten-1 py-4 text-center white--text">
        <v-row no-gutters justify="space-around" class="mb-4">
          <p class="overline text-h5 text--disabled">GET SOCIAL</p>
        <v-btn
            v-for="(social, i) in socialLinks"
            :key="i"
            icon
            :href="social.url"
            target="_blank"
            :aria-label="social.name"
            ><v-icon large>{{ social.icon }}</v-icon></v-btn
          >
        </v-row>
      </v-col>
 </v-row>
    </v-row>
  </v-footer>
</template>
<script>
import {
  mdiFacebook,
  mdiWhatsapp,
  mdiGoogle,
} from '@mdi/js'

  export default {

    data: () => ({
      navlinks: [
        'HOME',
        'ABOUT US',
        'CLASSROOM',
        'GALLERY',
        'PROGRAMMES',
        'CONTACT US',
        'NOTICES',
      ],
      socialLinks: [
        {
          name: 'Facebook',
          url: 'https://www.facebook.com/',
          icon: mdiFacebook,
        },
        {
          name: 'Whatsapp',
          url: 'https://www.Whatsapp.com/',
          icon: mdiWhatsapp,
        },

        { name: 'Google', url: 'https://www.google.com/', icon: mdiGoogle },

      ],
    }),
  }
</script>
